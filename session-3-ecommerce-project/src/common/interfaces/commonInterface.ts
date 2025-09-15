export interface checkOutProduct {
  id: string;
  image: string;
  price: number;
  totalPrice: number;
  totalDiscountPrice: number;
  quantity: number;
  name: string;
}
export interface checkOutProps {
  product: checkOutProduct;
}

export interface newProductType {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
  discountPrice?: number;
  totalPrice: number;
  totalDiscountPrice: number;
}
