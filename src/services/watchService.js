import * as api from "./api";

const endpoints = {
    addWatch: '/watches',
    getAll: '/watches',
    getBrandsLogo: '/watches/brandsLogo',
    getAllPaginated: (filterCriteria, sortCriteria, page, limit) => `/watches/paginated?filteredByCriteria=${filterCriteria}&sortedByCriteria=${sortCriteria}&page=${page}&limit=${limit}`,
    getWatchesCount: (type, brand) => `/watches/count?type=${type}&brand=${brand}`,
    getWatchesByTypePaginated: (type, page, limit) => `/watches/types/${type}?page=${page}&limit=${limit}`,
    getWatchesByTypeCount: (type) => `/watches/count/types/${type}`,
    getWatchesByBrandPaginated: (brand, page, limit) => `/watches/brands/${brand}?page=${page}&limit=${limit}`,
    getWatchesByBrandCount: (brand) => `/watches/count/brands/${brand}`
};

export const addWatch = (data) => api.post(endpoints.addWatch, data);

export const getAll = () => api.get(endpoints.getAll);

export const getBrandsLogo = () => api.get(endpoints.getBrandsLogo);

export const getAllPaginated = (filterCriteria, sortCriteria, page, limit) => api.get(endpoints.getAllPaginated(filterCriteria, sortCriteria, page, limit));

export const getWatchesCount = (type, brand) => api.get(endpoints.getWatchesCount(type, brand));

export const getWatchesByTypePaginated = (type, page, limit) => api.get(endpoints.getWatchesByTypePaginated(type, page, limit));

export const getWatchesByTypeCount = (type) => api.get(endpoints.getWatchesByTypeCount(type));

export const getWatchesByBrandPaginated = (brand, page, limit) => api.get(endpoints.getWatchesByBrandPaginated(brand, page, limit));

export const getWatchesByBrandCount = (brand) => api.get(endpoints.getWatchesByBrandCount(brand));