import { Box, Typography } from "@mui/material";

import useProductsListLogic from "../../hooks/productHooks/useProductsListLogic";
import { Category } from "../../types/components/products";
import HomeSkeleton from "../../ui/HomeSkeleton";
import ProductItem from "./ProductItem";

export default function ProductsList({ category }: Category) {
    const {
        isFetching,
        isError,
        showingResults = [],
    } = useProductsListLogic({
        category,
    });

    if (isFetching) return <HomeSkeleton />;

    if (isError) return <Typography>Something went wrong</Typography>;

    return (
        <Box component="ul" sx={{ listStyle: "none" }}>
            {showingResults?.map((item) => (
                <ProductItem key={item?.id} item={item} />
            ))}
        </Box>
    );
}
