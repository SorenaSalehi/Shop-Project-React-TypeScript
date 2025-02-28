import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppRoutes from "./Routes";
import { ShopContextProvider } from "./context/ShopContext";
import { AuthProvider } from "./context/AuthContext";

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <AuthProvider>
                <ShopContextProvider>
                    <AppRoutes />;
                </ShopContextProvider>
            </AuthProvider>
        </QueryClientProvider>
    );
}
