import client from "../../axios";
import { LoginDto, LoginEntity, RegisterDto } from "./types";

export const register = async (
    formValues: RegisterDto,
): Promise<LoginEntity> => {
    return await client().post("auth/register", formValues);
};

export const login = async (formValues: LoginDto): Promise<LoginEntity> => {
    return await client(true).post("auth/login", formValues);
};
