import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { addProductToCart, getCart, getProducts } from "../views/home/api";
import {
    CreateCartDto,
    CartItem,
    Product,
    SearchProductsDto,
} from "../views/home/types";
import { getCategories } from "./api";
import { Category, Paginated } from "./types";
import { useFiltersContext } from "../contexts/filters/customHooks";
import { objectWithoutFalsyValues } from "./functions";

export const useCart = () => {
    const queryClient = useQueryClient();

    const { mutate } = useMutation<void, AxiosError, CreateCartDto>({
        mutationKey: ["addToCart"],
        mutationFn: (products) => addProductToCart(products),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] });
        },
    });

    const { data } = useQuery<any, AxiosError, CartItem[]>({
        queryKey: ["cart"],
        queryFn: getCart,
    });

    const addToCart = (productId: number, value?: number) => {
        mutate({ productId, value });
    };

    const getTotalCartItems = () => {
        return data?.reduce((acc, curr) => acc + curr.quantity, 0);
    };

    const getTotalCartPrice = () => {
        return data?.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
    };

    return { addToCart, cart: data, getTotalCartItems, getTotalCartPrice };
};

export const useCategories = () => {
    const { data, isError, isLoading } = useQuery<Category[], AxiosError>({
        queryKey: ["categories"],
        queryFn: getCategories,
    });

    return { categories: data, isError, isLoading };
};

export const useProducts = () => {
    const { setFilters, ...params } = useFiltersContext()!;

    const {
        error,
        isLoading,
        data: products,
    } = useQuery<Paginated<Product>, AxiosError>({
        queryKey: ["products", objectWithoutFalsyValues(params)],
        queryFn: () =>
            getProducts(objectWithoutFalsyValues<SearchProductsDto>(params)),
    });

    const totalPages = Math.ceil(
        products?.meta?.total! / products?.meta?.perPage!,
    );
    const currentPage = products?.meta?.currentPage!;

    return { products, error, isLoading, totalPages, currentPage };
};
