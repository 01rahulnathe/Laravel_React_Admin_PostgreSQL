import api from "./api";

export const getChannels = () => {
    return api.get("/channels");
};