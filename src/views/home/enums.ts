export enum OrderByEnum {
    Auto = "auto",
    Price_desc = "price_desc",
    Price_asc = "price_asc",
}

export const getNameFromOrderByEnum = (orderBy: OrderByEnum) => {
    switch (orderBy) {
        case OrderByEnum.Auto:
            return "Auto";

        case OrderByEnum.Price_desc:
            return "Price: High to Low";

        case OrderByEnum.Price_asc:
            return "Price: Low to High";

        default:
            return "Auto";
    }
};
