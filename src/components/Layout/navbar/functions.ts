import { Category } from "../../../common/types";
import { FiltersState } from "../../../contexts/filters/filtersReducer";

export const handleChangeCategory = (
    ids: string[],
    setFilters: (filters: Partial<FiltersState>) => void,
) => {
    setFilters({
        categoryIds: ids.map((id) => parseInt(id)).filter((id) => id),
        page: 1,
    });
};

export const toggleAllProducts = (
    categoryIds: number[],
    categories: Category[],
    setFilters: (filters: Partial<FiltersState>) => void,
) => {
    if (categoryIds.length === categories?.length) {
        setFilters({ categoryIds: [], page: 1 });
    } else {
        setFilters({
            categoryIds: categories?.map((category) => category.id) || [],
            page: 1,
        });
    }
};

export const onPriceChange = (
    value: number[],
    setFilters: (filters: Partial<FiltersState>) => void,
) => {
    setFilters({
        page: 1,
        minPrice: value[0],
        maxPrice: value[1],
    });
};
