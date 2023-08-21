import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );
      if (productIsAlreadyInCart) {
        state.products = state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        return;
      }
      state.products = [...state.products, { ...action.payload, quantity: 1 }];
    },
    increaseProductItem: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    },
    decreaseProductItem: (state, action) => {
      state.products = state.products
        .map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0);
    },
    removeProductItem: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const {
  addToCart,
  increaseProductItem,
  decreaseProductItem,
  removeProductItem,
} = cartSlice.actions;

export const selectorCartProducts = (state) => state.cart;

export const selectorProductsTotalPrice = (state) => {
  return state.cart.products.reduce((a, c) => a + c.price * c.quantity, 0);
};

export const selectorProductsTotalitems = (state) => {
  return state.cart.products.reduce((a, c) => a + c.quantity, 0);
};

export default cartSlice.reducer;
