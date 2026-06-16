const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin:"*"
    }
});

io.on("connection",(socket)=>{

    console.log(
        "User Connected:",
        socket.id
    );

    socket.on(
        "join-room",
        (conversationId)=>{

            socket.join(
                `room_${conversationId}`
            );

            console.log(
                socket.id,
                "joined",
                `room_${conversationId}`
            );

        }
    );

    socket.on(
        "send-message",
        (data)=>{

            io.to(
                `room_${data.conversation_id}`
            ).emit(
                "receive-message",
                data
            );

        }
    );

    socket.on(
        "disconnect",
        ()=>{

            console.log(
                "Disconnected:",
                socket.id
            );

        }
    );

});

server.listen(
    3001,
    ()=>{

        console.log(
            "Socket Server Running on port 3001"
        );

    }
);