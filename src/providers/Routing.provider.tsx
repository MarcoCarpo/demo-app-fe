import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "../components";
import { HomeView } from "../views";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            <Route path="/" element={<HomeView />} />
        </Route>,
    ),
);

export function RoutingProvider() {
    return <RouterProvider router={router} />;
}
