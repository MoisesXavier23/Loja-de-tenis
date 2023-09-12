/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import {
  selectorCartProducts,
  selectorProductsTotalPrice,
  selectorProductsTotalitems,
} from '../../redux/cart/cartSlice';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { useEffect, useRef } from 'react';

const CartModal = ({ isVisible, setCartIsVisible }) => {
  const { products } = useSelector(selectorCartProducts);
  const totalProductsPrice = useSelector(selectorProductsTotalPrice);
  const totalProductsItemsInCart = useSelector(selectorProductsTotalitems);

  const modalRef = useRef();

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
  }, []);

  const handleClickOutside = (e) => {
    if (!modalRef.current.contains(e.target)) {
      setCartIsVisible(isVisible);
    }
  };

  return (
    <div
      ref={modalRef}
      className={`bg-white shadow-2xl rounded-xl rounded-tr-none absolute top-7 right-5 md:top-8 z-40 ${
        isVisible ? 'opacity-100' : 'opacity-0 hidden invisible'
      }`}
    >
      <div className="p-3 pb-1 border-b border-black">
        <h2 className="text-black font-bold">Seu Carrinho</h2>
      </div>
      <div className="w-96 h-80 max-h-80 p-3 overflow-auto">
        <nav>
          {products.map((product) => (
            <CartItem product={product} key={product.id} />
          ))}
        </nav>
      </div>
      <div className="text-black p-3 bg-white rounded-bl-xl rounded-br-xl border-gray-500 border-t-[1px] flex flex-col relative bottom-0">
        <h2 className="font-bold text-black">
          Preço Total:
          <span className="text-blue-950 absolute right-4">
            {totalProductsPrice}
          </span>
        </h2>
        <p className="font-semibold text-black">
          Quantidade total:
          <span className="absolute right-4">{totalProductsItemsInCart}</span>
        </p>
        <Link to="/cart">
          <button className="w-full py-3 bg-black text-white rounded mt-3 active:bg-opacity-75">
            Ir para o carrinho
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartModal;
