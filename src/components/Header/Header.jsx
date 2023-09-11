import { useSelector } from 'react-redux';
import { selectorCartProducts } from '../../redux/cart/cartSlice';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartModal from '../CartModal/CartModal';

const Header = () => {
  const { products } = useSelector(selectorCartProducts);
  const total = products.reduce((sum, item) => sum + item.quantity, 0);
  const [cartIsVisible, setCartIsVisible] = useState(false);

  function handleClickOpenCart() {
    setCartIsVisible(!cartIsVisible);
  }

  return (
    <header className="flex justify-between px-5 py-4 md:px-20 sm:px-10 bg-slate-600 text-white">
      <Link to="/">
        <h1 className="text-2xl m font-bold tracking-wide">Tênis</h1>
      </Link>
      <nav>
        <ul className="flex gap-1 sm:gap-10">
          <ul className="flex">
            <Link
              to={'/account/login'}
              className={
                'text-lg font-bold px-2 tracking-normal cursor-pointer rounded hover:text-black hover:bg-white active:bg-opacity-75 select-none '
              }
            >
              Entrar
            </Link>
            <span className="font-bold text-white">|</span>
            <Link
              to={'/account/register'}
              className={
                'text-lg font-bold px-2 tracking-normal cursor-pointer rounded hover:text-black hover:bg-white active:bg-opacity-75 select-none'
              }
            >
              Criar Conta
            </Link>
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
      <CartModal
        isVisible={cartIsVisible}
        setCartIsVisible={setCartIsVisible}
      />
    </header>
  );
};

export default Header;
