import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from '../redux/counter/counterSlice';
import cartReducer from '../redux/cart/cartSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
  middleware: [logger],
});
