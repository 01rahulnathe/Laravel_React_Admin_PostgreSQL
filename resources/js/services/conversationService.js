import api from "./api";

export const getConversation = (id) => {
    return api.get(`/conversations/${id}`);
};