import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import ProductImages from "../components/products/ProductImages";
import ItemActionsBtns from "../components/ui/ItemActionsBtns";
import ProductDetailsContent from "../components/productDetails/ProductDetailsContent";
import { useShopContext } from "../context/ShopContext";

export default function ProductDetails() {
    const { currentItem, itemType } = useShopContext();

    return (
        <Box component="div" style={{ position: "relative" }}>
            {/* Fixed Image */}
            <Typography
                component="div"
                style={{
                    position: "fixed",
                    top: "10%",
                    left: "50%",
                    right: "50%",
                    transform: "translateX(-50%)",
                    width: "80%",
                }}
            >
                {/* //*imgs  */}
                <ProductImages images={currentItem?.images} />
            </Typography>

            {/* //*btns Group by type */}
            <Box component="div" sx={{ position: "absolute", right: 10 }}>
                <ItemActionsBtns
                    itemType={itemType}
                    productId={currentItem?.id}
                />
            </Box>

            {/* //*Scrolling Content */}
            <ProductDetailsContent />
        </Box>
    );
}
