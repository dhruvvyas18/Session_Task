import { createSlice } from "@reduxjs/toolkit";
import type { newProductType } from "../common/interfaces/commonInterface";

const cartInitialState: {
  items: newProductType[];
  totalQuantity: number;
} = {
  items: [],
  totalQuantity: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addItemToCart(state, action) {
      const newitem: newProductType = action.payload;
      state.totalQuantity++;
      const exitstingItems = state.items.find((item) => item.id === newitem.id);
      if (!exitstingItems) {
        state.items.push({
          id: newitem.id!,
          price: newitem.price,
          name: newitem.name,
          quantity: 1,
          totalPrice: newitem.price,
          image: newitem.image,
          discountPrice: newitem.discountPrice,
          totalDiscountPrice: newitem.discountPrice!,
        });
      } else {
        exitstingItems.quantity = exitstingItems.quantity + 1;
        exitstingItems.totalPrice =
          exitstingItems.totalPrice + exitstingItems.price;
        exitstingItems.totalDiscountPrice =
          exitstingItems.totalDiscountPrice! + exitstingItems.discountPrice!;
      }
    },

    removeTotalQunatityFromCart(state, action) {
      const id = action.payload;
      const product = state.items.find((prod) => prod.id === id);
      const quantity = product?.quantity;
      state.totalQuantity = state.totalQuantity - quantity!;
      state.items = state.items.filter((item) => item.id !== id);
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      state.totalQuantity--;
      const exitstingItem = state.items.find((item) => item.id === id);
      if (exitstingItem?.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exitstingItem!.quantity--;
        exitstingItem!.totalPrice =
          exitstingItem!.totalPrice - exitstingItem!.price;
        exitstingItem!.totalDiscountPrice =
          exitstingItem!.totalDiscountPrice! - exitstingItem!.discountPrice!;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
