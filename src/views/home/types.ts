import { OrderByEnum } from "./enums";

export type User = {
    id: number;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    address: {
        street: string;
        city: string;
        country: string;
        zipCode: string;
    };
    image: Image;
};

export type Product = {
    id: number;
    name: string;
    price: number;
    categoryName: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    image: Image;
};

export type Image = {
    id: number;
    url: string;
    createdAt: string;
    updatedAt: string;
};

export type CartItem = Product &
    Omit<Product, "id"> & {
        quantity: number;
        productId: number;
    };

export type CreateCartDto = {
    productId: number;
    value?: number;
};

export type SearchProductsDto = {
    categoryIds?: number[];
    page?: number;
    limit?: number;
    minPrice?: number;
    maxPrice?: number;
    orderBy?: OrderByEnum;
};
