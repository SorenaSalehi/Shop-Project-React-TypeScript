import { InView } from "react-intersection-observer";
import Categories from "../components/category/Categories";
import { Box, Fab } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
import useHomeLogic from "../hooks/useHomeLogic";
import ProductsList from "../components/products/ProductsList";
export default function Home() {
  const {
    category,
    showArrow,
    setShowArrow,
    HeadRefMerged,
    ProductsRef,
    handleCategory,
    handleGoTop,
  } = useHomeLogic();

  return (
    <>
      <InView onChange={(inView) => setShowArrow(!inView)}>
        <Box ref={HeadRefMerged}>
          <Categories handleClick={handleCategory} />
        </Box>
      </InView>

      {/* //*products list */}
      <Box
        component="div"
        sx={{ padding: "1rem", position: "relative" }}
        ref={ProductsRef}
      >
        <ProductsList category={category} />

        {/* //*go to top */}
        {showArrow && (
          <Fab
            onClick={handleGoTop}
            sx={{
              position: "fixed",
              top: "80%",
              right: "1rem",
              zIndex: 1100,
              color: "text.btn",
              backgroundColor: "background.appBar",
            }}
          >
            <ArrowUpward />
          </Fab>
        )}
      </Box>
    </>
  );
}
