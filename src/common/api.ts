import client from "../axios";
import { Category } from "./types";

export const getCategories = async (): Promise<Category[]> => {
    return await client().get("categories");
};
