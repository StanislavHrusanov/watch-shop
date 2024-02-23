import * as api from "./api";

const endpoints = {
    createOrder: '/orders'
};

export const createOrder = (order) => api.post(endpoints.createOrder, order);