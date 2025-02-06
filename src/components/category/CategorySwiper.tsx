import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Box, Typography } from "@mui/material";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import { CategoriesComponentProps } from "../../types/components/home";

const images = [
  { src: "men-shirt.jpg", value: "mens-shirts" },
  { src: "men-watch.jpg", value: "mens-watches" },
  { src: "men-shoes.jpg", value: "mens-shoes" },
  { src: "women-watch.jpg", value: "womens-watches" },
  { src: "women-shoes.jpg", value: "womens-shoes" },
  { src: "women-shirt.jpg", value: "womens-dresses" },
];

export default function ProductImageSwiper({
  handleClick,
}: CategoriesComponentProps) {
  return (
    <Box
      sx={{
        width: "90%",
        height: "20vh",
        margin: "0 auto",
        zIndex: "500",

        "& .swiper": {
          width: "100%",
          height: "100%",
        },
        "& .swiper-slide": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        "& .swiper-slide img": {
          width: "100px",
          height: "100px",
          objectFit: "contain",
          borderRadius: "50%",
        },
        "& .swiper-slide p": {
          textWrap: "nowrap",
          fontSize: "0.8rem",
          //   marginX: "1rem",
        },
        // Custom navigation button styles
        "& .swiper-button-prev, & .swiper-button-next": {
          color: "rgba(235, 225, 225, 0.5)",

          "&:hover": {
            color: "rgba(0,0,0,0.8)",
          },
        },
      }}
    >
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        // navigation
        scrollbar={{ draggable: true }}
      >
        {images?.map((img, i) => (
          <SwiperSlide key={i}>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                component="img"
                loading="lazy"
                alt={img.src}
                src={img.src}
                onClick={() => handleClick(img.value)}
              />
              <Typography variant="caption" component="p">
                {img.value.replace("-", " ").toUpperCase()}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
