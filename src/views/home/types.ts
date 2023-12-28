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
};
