import { useQuery } from "@tanstack/react-query";
import { getUser } from "./api";
import { User } from "./types";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { handleUserNotFound } from "./functions";
import { useNavigate } from "react-router-dom";

export const useUser = () => {
    const navigate = useNavigate();
    const { data, isLoading, error } = useQuery<User, AxiosError>({
        queryKey: ["user"],
        queryFn: getUser,
    });

    useEffect(() => {
        if (error?.response?.status === 404) {
            handleUserNotFound(navigate);
        }
    }, [error]);

    return { user: data, isLoading };
};
