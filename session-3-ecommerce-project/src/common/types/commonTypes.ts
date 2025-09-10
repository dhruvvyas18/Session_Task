export interface ProductType {
  id?: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  rating: number;
  tag?: string;
  image: string;
  altImage?: string;
}

export interface CardItemProps {
  product: ProductType;
}
