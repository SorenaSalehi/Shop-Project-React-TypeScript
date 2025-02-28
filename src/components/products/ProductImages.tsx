import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Box } from "@mui/material";

import LoadingCar from "../../ui/LoadingCar";
import { ProductImagesProps } from "../../types/components/products";

export default function ProductImages({
    images,
    container = "90%",
    containerHeight = "400px",
}: ProductImagesProps) {
    //Record<K, V> is a utility type that defines an object with specific key-value pairs.
    const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>(
        {}
    );

    const handleImageLoad = (imgSrc: string) => {
        setLoadedImages((prev) => ({
            ...prev,
            [imgSrc]: true,
        }));
    };

    return (
        <Box
            onClick={(e) => e.stopPropagation()}
            sx={{
                width: { container },
                height: { containerHeight },
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
                    position: "relative",
                },
                "& .swiper-slide img": {
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    opacity: 1,
                    transition: "opacity 0.3s ease",
                },
                "& .swiper-button-prev, & .swiper-button-next": {
                    color: "rgba(0,0,0,0.5)",
                    zIndex: 10,
                    "&:hover": {
                        color: "rgba(0,0,0,0.8)",
                    },
                },
                "& .swiper-pagination": {
                    zIndex: 10,
                },
            }}
        >
            <Swiper
                modules={[Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}

                // onClick={(e) => e.stopPropagation()}
            >
                {images?.map((img, index) => (
                    <SwiperSlide
                        key={`${img}-${index}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {!loadedImages[img] && <LoadingCar />}
                        <Box
                            component="img"
                            loading="lazy"
                            alt={`product-img-${img}`}
                            src={img}
                            onLoad={() => handleImageLoad(img)}
                            onClick={(e) => e.stopPropagation()}
                            sx={{
                                opacity: loadedImages[img] ? 1 : 0,
                                transition: "opacity 0.3s ease",
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}
