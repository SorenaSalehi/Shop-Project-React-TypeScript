export type ProductItemType = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    quantity: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[] | [];
    brand: string;
    dimensions: Dimension;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[] | [];
    returnPolicy: string;
    minimumOrderQuantity: number;
    images: string[] | [];
    weight: string;
} | null;
export type ProductItemProps = {
    id: number;
    brand: string;
    category: string;
    images: string[];
    price: number;
    rating: number;
    title: string;
    tags: string[];
    discountPercentage: number;
};

type Dimension = {
    width: number;
    height: number;
    depth: number;
};

type Review = {
    rating: string;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
};

export type OneProductResponse = {
    isFetchingOneProduct: boolean;
    oneProduct: any;
    oneProductError: Error | null;
};

export type Category = {
    category: string | null;
};

export type ProductImagesProps = {
    images: string[] | undefined;
    container?: string;
    containerHeight?: string;
};

export type ItemActionsBtnsProps = {
    itemType?: string | null;
    productId: number | undefined;
};
