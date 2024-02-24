import * as api from "./api";

const endpoints = {
    createOrder: '/orders',
    getSpecificUserOrders: (userId) => `/orders/specificUserOrders?userId=${userId}`
};

export const createOrder = (order) => api.post(endpoints.createOrder, order);

export const getMyOrders = (userId) => api.get(endpoints.getSpecificUserOrders(userId));