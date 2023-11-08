import { useSelector } from 'react-redux';
import { selectorCartProducts } from '../../redux/cart/cartSlice';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartModal from '../CartModal/CartModal';
import { useEffect } from 'react';
import { BsCart4 } from 'react-icons/bs';

const Header = () => {
  const { products } = useSelector(selectorCartProducts);
  const total = products.reduce((sum, item) => sum + item.quantity, 0);
  const [cartIsVisible, setCartIsVisible] = useState(false);

  // const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    if (windowSize.innerWidth <= 640) {
      setCartIsVisible(false);
    }
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowSize.innerWidth]);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  function handleClickOpenCart() {
    setCartIsVisible(!cartIsVisible);
  }

  return (
    <header className="w-full flex justify-center items-center py-[5px] bg-white border-b border-black px-3 sm:px-0 sm:pr-5 fixed z-50">
      {/* <div className="flex">
        <button
          className="relative sm:hidden sm:invisible"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          <div className="block w-5 relative">
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
          <div className="bg-white w-full absolute top-[39px] left-0 z-50 sm:hidden sm:invisible">
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
      </div> */}
      <Link to="/" className="">
        <h1
          style={{ fontFamily: 'Lily Script One' }}
          className="text-xl xl:text-2xl font-bold text-center tracking-wider"
        >
          Zaphira
        </h1>
      </Link>
      <nav>
        <ul className="">
          {/* <li className="invisible hidden sm:flex sm:visible">
            <Link
              to={'/account/login'}
              className={
                'text-sm xl:text-lg font-bold px-2 tracking-normal cursor-pointer rounded hover:text-black hover:bg-white active:bg-opacity-75 select-none '
              }
            >
              Entrar
            </Link>
          </li> */}
          {windowSize.innerWidth <= 640 ? (
            <Link
              to="/cart"
              className={
                'text-base xl:text-lg font-bold tracking-normal cursor-pointer rounded hover:text-black hover:bg-white select-none flex justify-center items-center gap-1 absolute top-[.35rem] right-2'
              }
            >
              <BsCart4 /> ({total})
            </Link>
          ) : (
            <li
              onClick={handleClickOpenCart}
              className={
                cartIsVisible
                  ? 'text-sm xl:text-lg text-black font-bold tracking-normal bg-white rounded hover:text-black hover:text-opacity-50 hover:bg-white px-2 cursor-pointer select-none z-50 absolute top-[.3rem] right-5'
                  : 'text-sm xl:text-lg font-bold px-2 tracking-normal cursor-pointer rounded hover:text-black hover:bg-white active:bg-opacity-75 select-none absolute top-[.3rem] right-5'
              }
            >
              Carrinho ({total})
            </li>
          )}
        </ul>
      </nav>
      {windowSize.innerWidth >= 640 && (
        <CartModal
          isVisible={cartIsVisible}
          setCartIsVisible={setCartIsVisible}
        />
      )}
    </header>
  );
};

export default Header;
