import * as api from "./api";

const endpoints = {
    addWatch: '/watches'
};

export const addWatch = (data) => api.post(endpoints.addWatch, data);