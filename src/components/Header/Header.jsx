import { useSelector } from 'react-redux';
import { selectorCartProducts } from '../../redux/cart/cartSlice';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CartModal from '../CartModal/CartModal';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const local = location.pathname;

  const { products } = useSelector(selectorCartProducts);

  const total = products.reduce((sum, item) => sum + item.quantity, 0);

  const [cartIsVisible, setCartIsVisible] = useState(false);

  function handleClickOpenCart() {
    setCartIsVisible(!cartIsVisible);
  }

  function handleClickLogin() {
    local === '/' ? navigate('account/login') : navigate('login');
  }
  function handleClickRegister() {
    local === '/' ? navigate('account/register') : navigate('register');
  }

  return (
    <header className="flex justify-between px-20 py-4 bg-slate-600 text-white">
      <Link to="/">
        <h1 className="text-2xl font-bold tracking-wide">Tênis</h1>
      </Link>
      <nav>
        <ul className="flex gap-10">
          <ul className="flex">
            <li
              onClick={handleClickLogin}
              className={
                'text-lg font-bold px-2 tracking-normal cursor-pointer rounded hover:text-black hover:bg-white active:bg-opacity-75 select-none '
              }
            >
              Entrar
            </li>
            <span className="font-bold text-white">|</span>
            <li
              onClick={handleClickRegister}
              className={
                'text-lg font-bold px-2 tracking-normal cursor-pointer rounded hover:text-black hover:bg-white active:bg-opacity-75 select-none'
              }
            >
              Criar Conta
            </li>
          </ul>
          <li
            onClick={handleClickOpenCart}
            className={
              cartIsVisible
                ? 'text-lg text-black font-bold tracking-normal bg-white rounded hover:text-black hover:text-opacity-50 hover:bg-white px-2 cursor-pointer select-none z-50'
                : 'text-lg font-bold px-2 tracking-normal cursor-pointer rounded hover:text-black hover:bg-white active:bg-opacity-75 select-none'
            }
          >
            Carrinho ({total})
          </li>
        </ul>
      </nav>
      <CartModal isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </header>
  );
};

export default Header;
