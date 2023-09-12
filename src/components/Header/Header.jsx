import { useSelector } from 'react-redux';
import { selectorCartProducts } from '../../redux/cart/cartSlice';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartModal from '../CartModal/CartModal';

const Header = () => {
  const { products } = useSelector(selectorCartProducts);
  const total = products.reduce((sum, item) => sum + item.quantity, 0);
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleClickOpenCart() {
    setCartIsVisible(!cartIsVisible);
  }

  return (
    <header className="flex justify-between items-center px-5 py-4 md:px-20 sm:px-10 bg-slate-600 text-white relative">
      <div className="flex">
        <button
          className="relative sm:hidden sm:invisible"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          <div className="block w-5 relative transform -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
                menuIsOpen ? 'rotate-45' : '-translate-y-1.5'
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
                menuIsOpen && 'opacity-0'
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
                menuIsOpen ? '-rotate-45' : 'translate-y-1.5'
              }`}
            ></span>
          </div>
        </button>
        {menuIsOpen && (
          <div className="bg-white w-full absolute top-14 left-0 z-40 sm:hidden sm:invisible">
            <nav>
              <ul className="flex flex-col text-center gap-2">
                <Link
                  to={'/account/login'}
                  className={
                    'border-b-2 border-black text-lg text-black font-bold py-4 tracking-normal cursor-pointer active:bg-opacity-75 select-none'
                  }
                  onClick={() => setMenuIsOpen(!menuIsOpen)}
                >
                  Entrar
                </Link>
              </ul>
            </nav>
          </div>
        )}

        <Link to="/">
          <h1 className="text-lg md:text-2xl font-bold tracking-wide">Tênis</h1>
        </Link>
      </div>
      <nav>
        <ul className="flex gap-1 sm:gap-10">
          <li className="invisible hidden sm:flex sm:visible">
            <Link
              to={'/account/login'}
              className={
                'text-sm md:text-lg font-bold px-2 tracking-normal cursor-pointer rounded hover:text-black hover:bg-white active:bg-opacity-75 select-none '
              }
            >
              Entrar
            </Link>
          </li>
          <li
            onClick={handleClickOpenCart}
            className={
              cartIsVisible
                ? 'text-sm md:text-lg text-black font-bold tracking-normal bg-white rounded hover:text-black hover:text-opacity-50 hover:bg-white px-2 cursor-pointer select-none z-50'
                : 'text-sm md:text-lg font-bold px-2 tracking-normal cursor-pointer rounded hover:text-black hover:bg-white active:bg-opacity-75 select-none'
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
