import * as api from "./api";

const endpoints = {
    register: '/auth/register',
    login: '/auth/login',
    logout: '/auth/logout'
};

export const register = (userData) => api.post(endpoints.register, userData);

export const login = (userData) => api.post(endpoints.login, userData);

export const logout = () => api.get(endpoints.logout);

