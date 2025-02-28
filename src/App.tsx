import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppRoutes from "./Routes";
import { ShopContextProvider } from "./context/ShopContext";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ShopContextProvider>
        <AppRoutes />;
      </ShopContextProvider>
    </QueryClientProvider>
  );
}
