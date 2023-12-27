import { useQuery } from "@tanstack/react-query";
import { getProducts, getUser } from "./api";
import { User } from "./types";
import { AxiosError } from "axios";

export const useProducts = () => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });

    return { products: data, isError, isLoading };
};

export const useUser = () => {
    const { data, isLoading, error } = useQuery<User, AxiosError>({
        queryKey: ["user"],
        queryFn: getUser,
    });

    return { user: data, error, isLoading };
};
