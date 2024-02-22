import * as api from "./api";

const endpoints = {
    getUserInfo: (userId) => `/myProfile/userInfo?userId=${userId}`,
    getUserWishlist: (userId) => `/myProfile/wishlist?userId=${userId}`,
    updateWishlist: (userId, watchId) => `/myProfile/wishlist/update?userId=${userId}&watchId=${watchId}`,
    removeFromWishlist: (userId, watchId) => `/myProfile/wishlist/remove?userId=${userId}&watchId=${watchId}`,
    addToCart: (userId, watchId, qty) => `/myProfile/cart/add?userId=${userId}&watchId=${watchId}&qty=${qty}`,
    removeFromCart: (userId, watchId) => `/myProfile/cart/remove?userId=${userId}&watchId=${watchId}`,
    decreaseQty: (userId, watchId, qty) => `/myProfile/cart/decreaseQty?userId=${userId}&watchId=${watchId}&qty=${qty}`
};

export const getUserInfo = (userId) => api.get(endpoints.getUserInfo(userId));

export const getUserWishlist = (userId) => api.get(endpoints.getUserWishlist(userId));

export const updateWishlist = (userId, watchId) => api.put(endpoints.updateWishlist(userId, watchId));

export const removeFromWishlist = (userId, watchId) => api.put(endpoints.removeFromWishlist(userId, watchId));

export const addToCart = (userId, watchId, qty) => api.put(endpoints.addToCart(userId, watchId, qty));

export const removeFromCart = (userId, watchId) => api.put(endpoints.removeFromCart(userId, watchId));

export const decreaseQty = (userId, watchId, qty) => api.put(endpoints.decreaseQty(userId, watchId, qty));