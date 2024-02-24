import { useState, createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import * as myProfileService from "../services/myProfileService";

export const UserProfileContext = createContext();

export const UserProfileProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                if (user) {
                    const userDetails = await myProfileService.getUserInfo(user._id);
                    setUserInfo(userDetails);
                }
            } catch (error) {
                window.alert(error.message);
                return navigate('/');
            }
        })();
    }, [user, navigate]);

    return (
        <UserProfileContext.Provider value={{
            userInfo,
            setUserInfo
        }}>
            {children}
        </UserProfileContext.Provider>
    )
}