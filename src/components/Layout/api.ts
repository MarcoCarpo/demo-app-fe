import axiosClient from "../../axios";

export const logout = async () => {
    return await axiosClient.post("auth/logout");
};
