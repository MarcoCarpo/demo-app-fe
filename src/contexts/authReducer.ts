export interface AppState {
    isAuthenticated: boolean;
}

interface SET_AUTHENTICATED {
    type: "SET_AUTHENTICATED";
    payload: boolean;
}

export type AppActions = SET_AUTHENTICATED;

export const initialState: AppState = {
    isAuthenticated: !!(
        localStorage.getItem("access_token") &&
        localStorage.getItem("refresh_token")
    ),
};

const reducer = (state: AppState, action: AppActions) => {
    switch (action.type) {
        case "SET_AUTHENTICATED":
            return { ...state, isAuthenticated: action.payload };

        default:
            return state;
    }
};

export default reducer;
