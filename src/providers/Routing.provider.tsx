import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "../components";
import { CheckoutView, HomeView, LoginView, UserView } from "../views";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/login" element={<LoginView />} />
            <Route path="/register" element={<LoginView isRegister />} />
            <Route element={<Layout />}>
                <Route path="/" element={<HomeView />} />
                <Route path="/checkout" element={<CheckoutView />} />
                <Route path="/user" element={<UserView />} />
            </Route>
        </Route>,
    ),
);

export function RoutingProvider() {
    return <RouterProvider router={router} />;
}
