import { Dispatch, SetStateAction } from "react";
import { ProductItemType } from "./components/products";

export type ShopContextType = {
    currentItem: ProductItemType;
    setCurrentItem: Dispatch<SetStateAction<ProductItemType>>;

    cartOrBasket: string | null;
    setCartOrBasket: Dispatch<SetStateAction<string | null>>;

    itemType: string | null;
    setItemType: Dispatch<SetStateAction<string | null>>;
};
