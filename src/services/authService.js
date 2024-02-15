import * as api from "./api";

const endpoints = {
    register: '/auth/register'
};

export const register = (userData) => api.post(endpoints.register, userData);

