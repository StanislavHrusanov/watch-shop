import { useState, createContext } from "react";

export const UserProfileContext = createContext();

export const UserProfileProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({
        wishlist: [],
        cart: []
    });

    return (
        <UserProfileContext.Provider value={{
            userInfo,
            setUserInfo
        }}>
            {children}
        </UserProfileContext.Provider>
    )
}