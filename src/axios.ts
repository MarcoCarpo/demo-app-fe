import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

let axiosClient = axios.create({
    baseURL: "http://localhost:3000",
});

let refreshClient = axios.create({
    baseURL: "http://localhost:3000",
});

let originalRequest: InternalAxiosRequestConfig;

axiosClient.interceptors.request.use(
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

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error: AxiosError) => {
        const statusCode = error.request.status;

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

                        console.log(originalRequest);

                        return axiosClient({
                            ...originalRequest,
                            headers: {
                                Authorization: `Bearer ${res.data.accessToken}`,
                            },
                        });
                    })
                    .catch((err) => {
                        localStorage.removeItem("access_token");
                        localStorage.removeItem("refresh_token");
                        window.location.href = "/login";
                    });
            } else {
                localStorage.removeItem("access_token");
                localStorage.removeItem("refresh_token");
                window.location.href = "/login";
            }
        }
        return Promise.reject(error);
    },
);

export default axiosClient;
