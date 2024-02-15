import * as api from "./api";

const endpoints = {
    register: '/auth/register',
    login: '/auth/login'
};

export const register = (userData) => api.post(endpoints.register, userData);

export const login = (userData) => api.post(endpoints.login, userData);

