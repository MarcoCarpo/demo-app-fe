import axiosClient from "../../axios";
import { Product } from "../types";
import { User } from "./types";

export const getProducts = async (): Promise<Product[]> => {
    return await axiosClient.get("products");
};

export const getUser = async (): Promise<User> => {
    return await axiosClient.get("user");
};
