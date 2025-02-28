import { type ProductItemType } from "./components/products";

export type CalcDiscountArg = {
    price: number;
    discount: number;
};
export type CalcCountPrice = {
    basketDetails: ProductItemType;
    basket: ProductItemType;
};
