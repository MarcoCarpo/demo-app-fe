import client from "../../axios";

export const logout = async () => {
    return await client().post("auth/logout");
};
