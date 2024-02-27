import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const IsAdmin = () => {
    const { user } = useContext(AuthContext);

    if (user && user.isAdmin) {
        return <Navigate to="/404" replace />
    }

    return <Outlet />
}