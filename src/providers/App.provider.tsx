import { RoutingProvider } from "./Routing.provider";
import { TanstackQueryProvider } from "./TanstackQuery.provider";

export function AppProvider() {
    return (
        <TanstackQueryProvider>
            <RoutingProvider />
        </TanstackQueryProvider>
    );
}
