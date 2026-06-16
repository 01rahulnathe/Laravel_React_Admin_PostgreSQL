import axios from "axios";

export const sendMessageApi = (data) => {

    return axios.post(
        "/api/messages",
        data
    );

};