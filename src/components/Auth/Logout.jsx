import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { LoadingContext } from "../../contexts/LoadingContext";
import { AuthContext } from "../../contexts/AuthContext";
import { UserProfileContext } from "../../contexts/UserProfileContext";
import * as authService from "../../services/authService";

function Logout() {
    const { userLogout } = useContext(AuthContext);
    const { setUserInfo } = useContext(UserProfileContext);
    const { isLoading, showLoading, hideLoading } = useContext(LoadingContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                showLoading();
                await authService.logout();
                userLogout();
                setUserInfo({
                    wishlist: [],
                    cart: []
                });
                localStorage.removeItem('user');
                hideLoading();
                navigate('/');

            } catch (error) {
                window.alert(error.message);
                hideLoading();
                navigate('/');
            }
        })();
    }, [showLoading, hideLoading, navigate, userLogout, setUserInfo]);

    return isLoading && <LoadingSpinner />
}

export default Logout;