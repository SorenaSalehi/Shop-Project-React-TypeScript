import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../services/apiProducts";

export function useAllProducts() {
  const {
    data: allProducts = [],
    isLoading: isFetchingAllProducts,
    error: allProductsError,
  } = useQuery({ queryFn: getAllProducts, queryKey: ["allProducts"] });

  return { allProducts, isFetchingAllProducts, allProductsError };
}
