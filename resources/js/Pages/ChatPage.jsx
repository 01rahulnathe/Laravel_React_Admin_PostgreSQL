import { useEffect, useState } from "react";
import socket from "@/sockets/socket";
import { sendMessageApi } from "@/services/messageService";
import axios from "axios";

export default function ChatPage() {

    const [messages,setMessages] = useState([]);

    const [text,setText] = useState("");

    useEffect(()=>{

        socket.emit(
            "join-room",
            1
        );

    },[]);

    /*
        Load history
    */

    useEffect(()=>{

        axios
        .get(
            "/api/conversations/1"
        )
        .then(res=>{

            setMessages(
                res.data.messages
            );

        });

    },[]);

    /*
        Receive new messages
    */

    useEffect(()=>{

        socket.on(

            "receive-message",

            (message)=>{

                setMessages(

                    prev=>[

                        ...prev,

                        message

                    ]

                );

            }

        );

        return ()=>{

            socket.off(
                "receive-message"
            );

        };

    },[]);

    /*
        Send Message
    */

    const sendMessage = async()=>{

        if(!text.trim()) return;

        try{

            const response = await sendMessageApi({

                conversation_id:1,

                body:text,

                message_type:"text"

            });

            const savedMessage = response.data;

            socket.emit(

                "send-message",

                savedMessage

            );

            setText("");

        }
        catch(error){

            console.log(error);

        }

    };

    return(

        <div>

            <h1>
                Chat Page
            </h1>

            <hr/>

            {

                messages.map(

                    message=>(

                        <div
                            key={message.id}
                        >

                            <strong>

                                {

                                    message.sender
                                    ?.name

                                }

                            </strong>

                            :

                            {

                                message.body

                            }

                        </div>

                    )

                )

            }

            <hr/>

            <input

                value={text}

                onChange={

                    e=>

                    setText(
                        e.target.value
                    )

                }

                placeholder="Type message"

            />

            <button
                onClick={
                    sendMessage
                }
            >

                Send

            </button>

        </div>

    );

}