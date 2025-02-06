import { useMutation } from "@tanstack/react-query";
import { getOneProduct } from "../../services/apiProducts";

export function useOneProduct(category: string | null) {
  const {
    isPending: isFetchingOneProduct,
    data: oneProduct,
    error: oneProductError,
  } = useMutation({
    mutationFn: () => getOneProduct(category),
    mutationKey: ["oneProduct", category],
  });

  return { isFetchingOneProduct, oneProduct, oneProductError };
}
