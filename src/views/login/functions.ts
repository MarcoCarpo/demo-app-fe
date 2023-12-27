import { NavigateFunction } from "react-router-dom";
import { LoginEntity } from "./types";
import { toast } from "react-toastify";

export const onRegisterSuccess = (navigate: NavigateFunction) => {
    navigate("/login");
    toast("Wow so easy !");
};

export const onLoginSuccess = (
    data: LoginEntity,
    setAuthenticated: Function,
    navigate: NavigateFunction,
) => {
    localStorage.setItem("access_token", data.accessToken);
    localStorage.setItem("refresh_token", data.refreshToken);
    setAuthenticated(true);
    navigate("/");
};
