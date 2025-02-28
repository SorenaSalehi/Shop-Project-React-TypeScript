import { createContext, ReactNode, useContext, useState } from "react";
import { ShopContextType } from "../types/shop";
import { ProductItemType } from "../types/components/products";

const ShopContext = createContext<ShopContextType | undefined>(undefined);

function ShopContextProvider({ children }: { children: ReactNode }) {
    const [currentItem, setCurrentItem] = useState<ProductItemType>(null);
    const [cartOrBasket, setCartOrBasket] = useState<string | null>(null);
    const [itemType, setItemType] = useState<string | null>(null);

    const cxt = {
        currentItem,
        setCurrentItem,
        cartOrBasket,
        setCartOrBasket,
        itemType,
        setItemType,
    };
    return <ShopContext.Provider value={cxt}>{children}</ShopContext.Provider>;
}

function useShopContext() {
    const context = useContext(ShopContext);

    if (!context)
        throw new Error("Shop context was used outside the provider!!");

    return context;
}

export { ShopContextProvider, useShopContext };
