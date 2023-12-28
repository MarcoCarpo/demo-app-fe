import client from "../../axios";
import { User } from "./types";

export const getUser = async (): Promise<User> => {
    return await client().get("user");
};
