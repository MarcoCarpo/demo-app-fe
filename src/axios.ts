import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { createBrowserRouter } from "react-router-dom";
import { toast } from "react-toastify";

let client = axios.create({
    baseURL: "http://localhost:3000",
});
let refreshClient = axios.create({
    baseURL: "http://localhost:3000",
});
let originalRequest: InternalAxiosRequestConfig;

const wrapperClient = (showError = false) => {
    client.interceptors.request.use(
        (config) => {
            originalRequest = config;

            config.headers.Authorization = `Bearer ${localStorage.getItem(
                "access_token",
            )}`;
            return config;
        },
        (error) => {
            return Promise.reject(error);
        },
    );

    client.interceptors.response.use(
        (response) => {
            if (response && response.data) {
                return response.data;
            }
            return response;
        },
        (error) => {
            const statusCode = error.request.status;
            const axiosError = error as AxiosError<{
                message: string;
                statusCode: number;
            }>;

            if (statusCode === 401) {
                const refreshToken = localStorage.getItem("refresh_token");
                if (refreshToken) {
                    refreshClient
                        .post("auth/refresh-token", {
                            refreshToken,
                        })
                        .then((res) => {
                            localStorage.setItem(
                                "access_token",
                                res.data.accessToken,
                            );
                            localStorage.setItem(
                                "refresh_token",
                                res.data.refreshToken,
                            );

                            return client({
                                ...originalRequest,
                                headers: {
                                    Authorization: `Bearer ${res.data.accessToken}`,
                                },
                            });
                        })
                        .catch(() => {
                            localStorage.removeItem("access_token");
                            localStorage.removeItem("refresh_token");
                            window.location.href = "/login";
                        });
                } else {
                    localStorage.removeItem("access_token");
                    localStorage.removeItem("refresh_token");
                    toast.error(error.response?.data.message);
                    window.location.href = "/login";
                }
            } else {
                if (showError) {
                    toast.error(axiosError.response?.data.message);
                }
            }

            return Promise.reject(error);
        },
    );

    return client;
};

export default wrapperClient;
