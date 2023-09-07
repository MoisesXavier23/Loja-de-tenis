import { createSlice } from '@reduxjs/toolkit';

let items = [];
if (Object.keys(localStorage)) {
  const key = Object.keys(localStorage).filter((key) =>
    key.startsWith('Cart: ')
  );
  key.forEach((key) => {
    items.push(JSON.parse(localStorage.getItem(key)));
  });
}

const initialState = {
  products: items,
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
          product.id === action.payload.id ? { ...product } : product
        );
        state.products.map((product) =>
          localStorage.setItem('Cart: ' + product.id, JSON.stringify(product))
        );
        return;
      }
      state.products = [...state.products, { ...action.payload, quantity: 1 }];
      state.products.map((product) =>
        localStorage.setItem('Cart: ' + product.id, JSON.stringify(product))
      );
    },
    increaseProductItem: (state, action) => {
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );
      if (productIsAlreadyInCart) {
        state.products = state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        state.products.map((product) =>
          localStorage.setItem('Cart: ' + product.id, JSON.stringify(product))
        );
        return;
      }
      state.products = [...state.products, { ...action.payload, quantity: 1 }];
      state.products.map((product) =>
        localStorage.setItem('Cart: ' + product.id, JSON.stringify(product))
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
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      const productID = action.payload.id;
      if (!product) {
        localStorage.removeItem('Cart: ' + productID);
      }
      state.products.map((product) =>
        localStorage.setItem('Cart: ' + product.id, JSON.stringify(product))
      );
    },
    removeProductItem: (state, action) => {
      state.products.map((product) =>
        product.id === action.payload.id
          ? localStorage.removeItem('Cart: ' + product.id)
          : product
      );
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
