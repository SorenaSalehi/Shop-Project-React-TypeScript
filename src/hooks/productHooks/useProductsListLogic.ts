import { useMemo } from "react";
import { useAllProducts } from "./useAllProducts";
import { useOneProduct } from "./useOneProduct";
import {
    Category,
    ProductItemProps,
    ProductItemType,
} from "../../types/components/products";

export default function useProductsListLogic({ category }: Category) {
    //*fetch All product by default
    const { isFetchingAllProducts, allProducts, allProductsError } =
        useAllProducts();

    //*filter and fetch one product
    const { isFetchingOneProduct, oneProduct, oneProductError } =
        useOneProduct(category);

    //*making it shuffle
    const showingResults: ProductItemType[] | [] = useMemo<
        ProductItemType[] | []
    >(() => {
        if (isFetchingAllProducts) return [];

        return allProducts?.sort(() => Math.random() - 0.5) || [];
    }, [allProducts, isFetchingAllProducts]);

    //loading ..........
    let isFetching = isFetchingAllProducts || isFetchingOneProduct;

    //error
    let isError = allProductsError || oneProductError;

    // //*filtering or not
    // const showingResults: ProductItemProps[] = oneProduct
    //   ? oneProduct
    //   : allResults;
    // console.log(showingResults);
    return { isFetching, isError, showingResults };
}
