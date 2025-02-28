import { type ProductItemType } from "./components/products";

export type CalcDiscountArg = {
    price: number | undefined;
    discount: number | undefined;
};
export type CalcCountPrice = {
    basketDetails: ProductItemType[];
    basket: ProductItemType[];
};
