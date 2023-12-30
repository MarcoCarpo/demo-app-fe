import MantineProvider from "./Mantine.provider";
import { RoutingProvider } from "./Routing.provider";
import { TanstackQueryProvider } from "./TanstackQuery.provider";
import { AuthProvider } from "../contexts/auth/AuthContext";
import ToastProvider from "./Toast.provider";
import { FiltersProvider } from "../contexts/filters/FiltersContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export function AppProvider() {
    return (
        <TanstackQueryProvider>
            <AuthProvider>
                <FiltersProvider>
                    <ToastProvider>
                        <MantineProvider>
                            <RoutingProvider />
                        </MantineProvider>
                    </ToastProvider>
                </FiltersProvider>
            </AuthProvider>
            <ReactQueryDevtools />
        </TanstackQueryProvider>
    );
}
