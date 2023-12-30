import { createContext, useReducer } from "react";
import reducer, {
    FiltersState,
    FiltersStateDispatchParams,
    initialState,
} from "./filtersReducer";

export interface FiltersContextType extends FiltersState {
    setFilters: (filters: FiltersStateDispatchParams) => void;
    resetFilters: () => void;
}

export const FiltersContext = createContext<FiltersContextType | undefined>(
    undefined,
);

export const FiltersProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setFilters = (filters: FiltersStateDispatchParams) => {
        dispatch({ type: "SET_FILTERS", payload: { ...state, ...filters } });
    };

    const resetFilters = () => {
        dispatch({ type: "RESET_FILTERS" });
    };

    return (
        <FiltersContext.Provider
            value={{
                ...state,
                setFilters,
                resetFilters,
            }}
        >
            {children}
        </FiltersContext.Provider>
    );
};
