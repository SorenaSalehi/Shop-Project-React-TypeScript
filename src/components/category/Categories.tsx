import { Box, Typography } from "@mui/material";
import { CategoriesComponentProps } from "../../types/components/home";
import CategorySwiper from "./CategorySwiper";

export default function Categories({ handleClick }: CategoriesComponentProps) {
  return (
    <>
      <Typography
        component="h4"
        variant="h4"
        sx={{ textAlign: "center", padding: "1rem 0" }}
      >
        Select Category{" "}
      </Typography>
      <Box component="div">
        <CategorySwiper handleClick={handleClick} />
      </Box>
    </>
  );
}
