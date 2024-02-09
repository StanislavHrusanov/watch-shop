import * as api from "./api";

const endpoints = {
    addWatch: '/watches',
    getAll: '/watches',
    getBrandsLogo: '/watches/brandsLogo',
    getAllPaginated: (page, limit) => `/watches/paginated?page=${page}&limit=${limit}`,
    getWatchesCount: '/watches/count'
};

export const addWatch = (data) => api.post(endpoints.addWatch, data);

export const getAll = () => api.get(endpoints.getAll);

export const getBrandsLogo = () => api.get(endpoints.getBrandsLogo);

export const getAllPaginated = (page, limit) => api.get(endpoints.getAllPaginated(page, limit));

export const getWatchesCount = () => api.get(endpoints.getWatchesCount);