import { createContext, useReducer } from "react";
import reducer, { AppState, initialState } from "./authReducer";

export interface AppContextType extends AppState {
    setAuthenticated: (authenticated: boolean) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setAuthenticated = (authenticated: boolean) => {
        dispatch({ type: "SET_AUTHENTICATED", payload: authenticated });
    };

    return (
        <AppContext.Provider
            value={{
                ...state,
                setAuthenticated,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
