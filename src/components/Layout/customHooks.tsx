import { useMutation } from "@tanstack/react-query";
import { logout } from "./api";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/auth/customHooks";

export const useLogout = () => {
    const navigate = useNavigate();
    const { setAuthenticated } = useAuthContext()!;
    const { mutate, isError } = useMutation({
        mutationKey: ["logout"],
        mutationFn: logout,
        onSuccess: () => {
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            navigate("/login");
            setAuthenticated(false);
        },
    });

    return { isError, logout: mutate };
};
