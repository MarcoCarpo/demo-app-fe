export type LoginDto = {
    email: string;
    password: string;
};

export type RegisterDto = {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
};

export type LoginEntity = {
    accessToken: string;
    refreshToken: string;
};
