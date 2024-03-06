import * as api from "./api";

const endpoints = {
    addWatch: '/watches',
    getAll: '/watches',
    getBrandsLogo: '/watches/brandsLogo',
    getAllPaginated: (filterCriteria, sortCriteria, page, limit) => `/watches/paginated?filteredByCriteria=${filterCriteria}&sortedByCriteria=${sortCriteria}&page=${page}&limit=${limit}`,
    getSearched: (searched, filterCriteria, sortCriteria, page, limit) => `/watches/search?searched=${searched}&filteredByCriteria=${filterCriteria}&sortedByCriteria=${sortCriteria}&page=${page}&limit=${limit}`,
    getWatchesCount: (type, brand, searched) => `/watches/count?type=${type}&brand=${brand}&searched=${searched}`,
    getWatchesByBrandPaginated: (brand, type, sortCriteria, page, limit) => `/watches/brands?brand=${brand}&type=${type}&sortedByCriteria=${sortCriteria}&page=${page}&limit=${limit}`,
    getWatchDetails: (watchId) => `/watches/${watchId}`,
    getSimilarWatches: (brand, watchId) => `/watches/similarWatches?brand=${brand}&watchId=${watchId}`,
    editWatch: (watchId) => `/watches/${watchId}`,
    deleteWatch: (watchId) => `/watches/${watchId}`
};

export const addWatch = (data) => api.post(endpoints.addWatch, data);

export const getAll = () => api.get(endpoints.getAll);

export const getBrandsLogo = () => api.get(endpoints.getBrandsLogo);

export const getAllPaginated = (filterCriteria, sortCriteria, page, limit) => api.get(endpoints.getAllPaginated(filterCriteria, sortCriteria, page, limit));

export const getSearched = (searched, filterCriteria, sortCriteria, page, limit) => api.get(endpoints.getSearched(searched, filterCriteria, sortCriteria, page, limit));

export const getWatchesCount = (type, brand, searched) => api.get(endpoints.getWatchesCount(type, brand, searched));

export const getWatchesByBrandPaginated = (brand, type, sortCriteria, page, limit) => api.get(endpoints.getWatchesByBrandPaginated(brand, type, sortCriteria, page, limit));

export const getWatchDetails = (watchId) => api.get(endpoints.getWatchDetails(watchId));

export const getSimilarWatches = (brand, watchId) => api.get(endpoints.getSimilarWatches(brand, watchId));

export const editWatch = (watchId, watchData) => api.put(endpoints.editWatch(watchId), watchData);

export const delWatch = (watchId) => api.del(endpoints.deleteWatch(watchId));