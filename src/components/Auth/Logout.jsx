import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { LoadingContext } from "../../contexts/LoadingContext";
import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

function Logout() {
    const { userLogout } = useContext(AuthContext);
    const { isLoading, showLoading, hideLoading } = useContext(LoadingContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                showLoading();
                await authService.logout();
                userLogout();
                hideLoading();
                return navigate('/');

            } catch (error) {
                window.alert(error.message);
                hideLoading();
                return navigate('/');
            }
        })();
    }, [showLoading, hideLoading, navigate, userLogout]);

    return isLoading && <LoadingSpinner />
}

export default Logout;