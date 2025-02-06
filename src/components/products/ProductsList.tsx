import { Box, Typography } from "@mui/material";
import { useAllProducts } from "../../hooks/productHooks/useAllProducts";
import { useOneProduct } from "../../hooks/productHooks/useOneProduct";
import HomeSkeleton from "../../ui/HomeSkeleton";
import ProductItem from "./ProductItem";
import { Category, ProductItemProps } from "../../types/components/products";

export default function ProductsList({ category }: Category) {
  //*fetch All product by default
  const { isFetchingAllProducts, allProducts, allProductsError } =
    useAllProducts();

  //*filter and fetch one product
  const { isFetchingOneProduct, oneProduct, oneProductError } =
    useOneProduct(category);

  //loading ..........
  if (isFetchingAllProducts || isFetchingOneProduct) return <HomeSkeleton />;

  //error
  if (allProductsError || oneProductError)
    return <Typography>something went wrong</Typography>;

  //*flatMap for get the arrays of object and then making it shuffle
  const allResults = allProducts
    ?.flatMap((obj) => obj.products)
    .sort(() => Math.random() - 0.5);

  //*filtering or not
  const showingResults: ProductItemProps[] = oneProduct
    ? oneProduct?.products
    : allResults;

  return (
    <Box component="ul" sx={{ listStyle: "none" }}>
      {showingResults?.map((item) => (
        <ProductItem key={item.id} {...item} />
      ))}
    </Box>
  );
}
