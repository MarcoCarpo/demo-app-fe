import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "../components";
import { HomeView, LoginView } from "../views";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/login" element={<LoginView />} />
            <Route path="/register" element={<LoginView isRegister />} />
            <Route element={<Layout />}>
                <Route path="/" element={<HomeView />} />
            </Route>
        </Route>,
    ),
);

export function RoutingProvider() {
    return <RouterProvider router={router} />;
}
