import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import Header from './components/Header/Header';
import ErrorPage from './pages/ErrorPage';
import ProductPage from './pages/ProductPage';
// import AccountPage from './pages/AccountPage';
// import Login from './components/Account/Login';
// import Register from './components/Account/Register';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/produto/:id" element={<ProductPage />} />
        {/* <Route path="/account" element={<AccountPage />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
