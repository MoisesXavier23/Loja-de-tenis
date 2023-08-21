import { useDispatch } from 'react-redux';
import {
  decreaseProductItem,
  increaseProductItem,
  removeProductItem,
} from '../../redux/cart/cartSlice';

/* eslint-disable react/prop-types */
const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  function handleIncreaseItemClick() {
    dispatch(increaseProductItem(product));
  }

  function handleDecreaseItemClick() {
    dispatch(decreaseProductItem(product));
  }

  function handleRemoveItemClick() {
    dispatch(removeProductItem(product));
  }

  return (
    <li
      key={product.id}
      className="list-none mb-3 border-b-2 pb-3 relative z-50"
    >
      <button
        onClick={handleRemoveItemClick}
        className="font-bold text-xs p-1 bg-red-500 text-white rounded-md tracking-normal cursor-pointer absolute right-4 shadow-lg z-50 active:bg-opacity-75"
      >
        Remover
      </button>
      <div className="text-black grid grid-cols-[96px_1fr] items-center gap-3">
        <div
          style={{ backgroundImage: `url(${product.imageUrl})` }}
          className={`w-24 h-24 overflow-hidden rounded-xl bg-no-repeat bg-cover bg-center`}
        />
        {/* <img src={product.imageUrl} alt="" className="w-24 h-24 rounded-xl" /> */}
        <div className="relative w-full">
          <h2 className="font-bold">{product.name}</h2>
          <p className="text-blue-800 font-semibold">R$ {product.price}</p>
          <div className="mt-5 flex gap-2">
            <div
              onClick={handleDecreaseItemClick}
              className="font-bold cursor-pointer select-none"
            >
              -
            </div>
            <div className="bg-white px-2 border border-black rounded shadow">
              {product.quantity}
            </div>
            <div
              onClick={handleIncreaseItemClick}
              className="font-bold cursor-pointer select-none"
            >
              +
            </div>
          </div>
          <p className="absolute bottom-0 right-5">
            R$ {product.price * product.quantity}
          </p>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
