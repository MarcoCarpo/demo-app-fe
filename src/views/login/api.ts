import axiosClient from "../../axios";
import { LoginDto, LoginEntity, RegisterDto } from "./types";

export const register = async (
    formValues: RegisterDto,
): Promise<LoginEntity> => {
    return await axiosClient.post("auth/register", formValues);
};

export const login = async (formValues: LoginDto): Promise<LoginEntity> => {
    return await axiosClient.post("auth/login", formValues);
};

// export const getProducts = async (): Promise<Product[]> => {
//     return (await axiosClient.get("products")).data;
// };
