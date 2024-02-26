import * as api from "./api";

const endpoints = {
    createOrder: '/orders',
    getAll: '/orders',
    getSpecificUserOrders: (userId) => `/orders/specificUserOrders?userId=${userId}`,
    changeOrderStatus: (orderId) => `/orders/changeOrderStatus?orderId=${orderId}`
};

export const createOrder = (order) => api.post(endpoints.createOrder, order);

export const getAll = () => api.get(endpoints.getAll);

export const getMyOrders = (userId) => api.get(endpoints.getSpecificUserOrders(userId));

export const changeOrderStatus = (orderId) => api.put(endpoints.changeOrderStatus(orderId));