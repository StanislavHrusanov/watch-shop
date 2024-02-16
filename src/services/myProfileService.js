import * as api from "./api";

const endpoints = {
    getUserInfo: (userId) => `/myProfile/userInfo?userId=${userId}`,
    updateWishlist: (userId, watchId) => `/myProfile/wishlist/update?userId=${userId}&watchId=${watchId}`
};

export const getUserInfo = (userId) => api.get(endpoints.getUserInfo(userId));

export const updateWishlist = (userId, watchId) => api.put(endpoints.updateWishlist(userId, watchId));