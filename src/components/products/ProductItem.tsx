import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Rating,
  Typography,
} from "@mui/material";
import { ProductItemType } from "../../types/components/products";
import ProductImages from "./ProductImages";
import ItemActionsBtns from "../ui/ItemActionsBtns";
import { useShopContext } from "../../context/ShopContext";
import { useNavigate } from "react-router-dom";

type Item = {
  item: ProductItemType;
};

export default function ProductItem({ item }: Item) {
  const {
    id,
    brand,
    category,
    images,
    price,
    rating,
    title,
    tags,
    discountPercentage,
  } = item ?? {};

  const { setCurrentItem } = useShopContext();
  const navigate = useNavigate();

  //*navigate to product details page
  function handleNavigate() {
    setCurrentItem(item);
    // setType(type);
    navigate(`${id}`);
  }

  return (
    <Card
      component="li"
      sx={{ margin: "1rem 1rem", position: "relative", borderRadius: "1rem" }}
    >
      {/* Discount Badge */}
      <Box
        sx={{
          position: "absolute",
          top: "10px",
          padding: "0.3rem 0.5rem",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            padding: "0.4rem 0.5rem 0",
            borderRadius: "0.5rem",
            color: "text.btn",
            fontWeight: "bold",
            backgroundColor: "#ff0000",
          }}
        >
          {discountPercentage}% OFF
        </Typography>

        {/* //*btns Group by type */}

        <ItemActionsBtns productId={id} />
      </Box>

      {/* //*card Area */}
      <CardActionArea>
        {/* Product Details */}
        <CardContent>
          {/* Image Slider */}
          <Box
            component="div"
            sx={{
              width: "60%",
              margin: "0 auto",
            }}
          >
            {/* <ProductImageSwiper images={images} /> */}
            <ProductImages images={images} />
          </Box>
          <Box onClick={handleNavigate}>
            <Typography gutterBottom variant="h6" component="p">
              {brand}
            </Typography>
            <Typography gutterBottom variant="body2" component="p">
              {title}
            </Typography>
            <Divider variant="middle" />
            <Box
              component="div"
              sx={{
                color: "text.secondary",
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "1rem",
                alignItems: "center",
              }}
            >
              <Typography variant="caption" component="p">
                {category?.replace("-", " ").toUpperCase()} <br />{" "}
                {tags?.[0]?.toUpperCase()}
              </Typography>
              <Typography variant="caption" component="p">
                Price:
                {price} $<br />
                <Rating name="read-only" value={rating} readOnly size="small" />
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
