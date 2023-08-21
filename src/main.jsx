import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import Home from './routes/Home.jsx';
import CartPage from './routes/CartPage.jsx';
import App from './App.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import ProductPage from './routes/ProductPage.jsx';
import AccountPage from './routes/AccountPage.jsx';
import Login from './components/Account/Login.jsx';
import Register from './components/Account/Register.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   },
//   {
//     path: 'Cart',
//     element: <Cart />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'produto/:id',
        element: <ProductPage />,
      },
      {
        path: 'oldpage',
        element: <Navigate to="/" />,
      },
    ],
  },
  {
    path: '/account',
    element: <AccountPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'oldpage',
        element: <Navigate to="/" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
