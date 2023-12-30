export type Category = {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
};

export type Paginated<T> = {
    data: T[];
    meta: {
        total: number;
        lastPage: number;
        currentPage: number;
        perPage: number;
        prev: number | null;
        next: number | null;
    };
};
