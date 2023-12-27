import MantineProvider from "./Mantine.provider";
import { RoutingProvider } from "./Routing.provider";
import { TanstackQueryProvider } from "./TanstackQuery.provider";
import { AuthProvider } from "../contexts/AuthContext";
import ToastProvider from "./Toast.provider";

export function AppProvider() {
    return (
        <TanstackQueryProvider>
            <AuthProvider>
                <ToastProvider>
                    <MantineProvider>
                        <RoutingProvider />
                    </MantineProvider>
                </ToastProvider>
            </AuthProvider>
        </TanstackQueryProvider>
    );
}
