import { OrderByEnum } from "../../views/home/enums";

export type FiltersState = {
    categoryIds: number[];
    orderBy: OrderByEnum;
    page: number;
    minPrice?: number;
    maxPrice?: number;
};

export type FiltersStateDispatchParams = Partial<FiltersState>;

interface SET_FILTERS {
    type: "SET_FILTERS";
    payload: FiltersState;
}

interface RESET_FILTERS {
    type: "RESET_FILTERS";
}

export type FiltersActions = SET_FILTERS | RESET_FILTERS;

export const initialState: FiltersState = {
    categoryIds: [],
    orderBy: OrderByEnum.Auto,
    page: 1,
};

const reducer = (state: FiltersState, action: FiltersActions) => {
    switch (action.type) {
        case "SET_FILTERS":
            return { ...state, ...action.payload };

        case "RESET_FILTERS":
            return { ...initialState };

        default:
            return state;
    }
};

export default reducer;
