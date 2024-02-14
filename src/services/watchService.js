import * as api from "./api";

const endpoints = {
    addWatch: '/watches',
    getAll: '/watches',
    getBrandsLogo: '/watches/brandsLogo',
    getAllPaginated: (filterCriteria, sortCriteria, page, limit) => `/watches/paginated?filteredByCriteria=${filterCriteria}&sortedByCriteria=${sortCriteria}&page=${page}&limit=${limit}`,
    getWatchesCount: (type, brand) => `/watches/count?type=${type}&brand=${brand}`,
    getWatchesByBrandPaginated: (brand, type, sortCriteria, page, limit) => `/watches/brands?brand=${brand}&type=${type}&sortedByCriteria=${sortCriteria}&page=${page}&limit=${limit}`,
    getWatchDetails: (watchId) => `/watches/${watchId}`,
    getSimilarWatches: (brand, watchId) => `/watches/similarWatches?brand=${brand}&watchId=${watchId}`
};

export const addWatch = (data) => api.post(endpoints.addWatch, data);

export const getAll = () => api.get(endpoints.getAll);

export const getBrandsLogo = () => api.get(endpoints.getBrandsLogo);

export const getAllPaginated = (filterCriteria, sortCriteria, page, limit) => api.get(endpoints.getAllPaginated(filterCriteria, sortCriteria, page, limit));

export const getWatchesCount = (type, brand) => api.get(endpoints.getWatchesCount(type, brand));

export const getWatchesByBrandPaginated = (brand, type, sortCriteria, page, limit) => api.get(endpoints.getWatchesByBrandPaginated(brand, type, sortCriteria, page, limit));

export const getWatchDetails = (watchId) => api.get(endpoints.getWatchDetails(watchId));

export const getSimilarWatches = (brand, watchId) => api.get(endpoints.getSimilarWatches(brand, watchId));