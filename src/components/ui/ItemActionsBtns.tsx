import { Favorite, ShoppingBasket, Delete } from "@mui/icons-material";
import { Box, Fab, Tooltip } from "@mui/material";
import React from "react";
import { ItemActionsBtnsProps } from "../../types/components/products";
// import { useShopContext } from "../context/ShopContext";

function ItemActionsBtns({ itemType, productId }: ItemActionsBtnsProps) {
    //   const { handleAddTo, handleRemoveFrom, isAddingTo, isRemovingFrom } =
    //     useShopContext();

    // Handle actions based on the type
    //   const handleAction = (actionType: String) => {
    //     if (type === "basket" && actionType === "addToWishlist") {
    //       handleAddTo({ productId, to: "wishlist" });
    //     } else if (type === "wishlist" && actionType === "addToBasket") {
    //       handleAddTo({ productId, to: "basket" });
    //     } else if (actionType === "remove") {
    //       handleRemoveFrom({ productId, from: type });
    //     }
    //   };

    //*for main page
    if (!itemType) {
        return (
            <Box
                component="div"
                sx={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                    alignItems: "center",
                    "& .MuiButtonBase-root": {
                        width: "auto",
                        height: "auto",
                        padding: "0.5rem",
                    },
                    "& .MuiSvgIcon-root": {
                        color: "background.appBar",
                        fontSize: "1rem",
                    },
                }}
            >
                <Tooltip title="Add to Basket">
                    <Fab
                    // onClick={() => handleAddTo({ productId, to: "basket" })}
                    // disabled={isAddingTo}
                    >
                        <ShoppingBasket />
                    </Fab>
                </Tooltip>
                <Tooltip title="Add to Wishlist">
                    <Fab
                    // onClick={() => handleAddTo({ productId, to: "wishlist" })}
                    // disabled={isAddingTo}
                    >
                        <Favorite />
                    </Fab>
                </Tooltip>
            </Box>
        );
    }

    return (
        <Box
            component="div"
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
                "& .MuiButtonBase-root": {
                    width: "auto",
                    height: "auto",
                    padding: "0.5rem",
                },
                "& .MuiSvgIcon-root": {
                    color: "background.appBar",
                    fontSize: "1rem",
                },
                "& :nth-child(even)": {
                    "& .MuiSvgIcon-root": {
                        color: "red",
                    },
                },
            }}
        >
            {/* //*Add or Remove Actions */}
            <Box component="div" sx={{ display: "flex", gap: "1rem" }}>
                {itemType === "basket" && (
                    <>
                        <Tooltip title="Add to Wishlist">
                            <Fab
                            // onClick={() => handleAction("addToWishlist")}
                            // disabled={isAddingTo}
                            >
                                <Favorite />
                            </Fab>
                        </Tooltip>
                        <Tooltip title="Remove from Basket">
                            <Fab
                            // onClick={() => handleAction("remove")}
                            // disabled={isRemovingFrom}
                            >
                                <Delete />
                            </Fab>
                        </Tooltip>
                    </>
                )}
                {itemType === "wishlist" && (
                    <>
                        <Tooltip title="Add to Basket">
                            <Fab
                            // onClick={() => handleAction("addToBasket")}
                            // disabled={isAddingTo}
                            >
                                <ShoppingBasket />
                            </Fab>
                        </Tooltip>
                        <Tooltip title="Remove from Wishlist">
                            <Fab
                            // onClick={() => handleAction("remove")}
                            // disabled={isRemovingFrom}
                            >
                                <Delete />
                            </Fab>
                        </Tooltip>
                    </>
                )}
            </Box>
        </Box>
    );
}

export default React.memo(ItemActionsBtns);
