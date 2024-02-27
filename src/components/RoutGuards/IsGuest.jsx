import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const IsGuest = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />
}