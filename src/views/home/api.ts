import client from "../../axios";
import { Paginated } from "../../common/types";
import {
    CartItem,
    CreateCartDto,
    Product,
    SearchProductsDto,
    User,
} from "./types";

export const getUser = async (): Promise<User> => {
    return await client().get("user");
};

export const getProducts = async (
    searchProductsDto: SearchProductsDto,
): Promise<Paginated<Product>> => {
    return await client().post("products/search", searchProductsDto);
};

export const addProductToCart = async (body: CreateCartDto): Promise<void> => {
    await client().post(`cart/add-products`, body);
};

export const getCart = async (): Promise<CartItem[]> => {
    return await client().get("cart");
};
