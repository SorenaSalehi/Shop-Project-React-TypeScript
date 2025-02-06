export type ProductItemProps = {
  id: number;
  brand: string;
  category: string;
  images: string;
  price: number;
  rating: number;
  title: string;
  tags: string[];
  discountPercentage: number;
};

export type OneProductResponse = {
  isFetchingOneProduct: boolean;
  oneProduct: any;
  oneProductError: Error | null;
};

export type Category = {
  category: string | null;
};
