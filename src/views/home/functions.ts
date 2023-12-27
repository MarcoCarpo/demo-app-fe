import { NavigateFunction } from "react-router-dom";

export const handleUserNotFound = (navigate: NavigateFunction) => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/login");
};
