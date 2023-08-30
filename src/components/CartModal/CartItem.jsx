import { useDispatch } from 'react-redux';
import {
  decreaseProductItem,
  increaseProductItem,
  removeProductItem,
} from '../../redux/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

/* eslint-disable react/prop-types */
const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleIncreaseItemClick() {
    dispatch(increaseProductItem(product));
  }

  function handleDecreaseItemClick() {
    dispatch(decreaseProductItem(product));
  }

  function handleRemoveItemClick() {
    dispatch(removeProductItem(product));
  }

  function handleClickProduct() {
    navigate(`/produto/${product.id}`);
  }

  return (
    <li key={product.id} className="list-none mb-3 border-b-2 pb-3 relative">
      <div className="text-black grid grid-cols-[96px_1fr] gap-3">
        <div
          onClick={handleClickProduct}
          style={{ backgroundImage: `url(${product.imageUrl})` }}
          className={`w-24 h-24 bg-no-repeat bg-cover bg-center cursor-pointer`}
        />
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-between">
            <h2
              onClick={handleClickProduct}
              className="font-bold text-lg cursor-pointer"
            >
              {product.name}
            </h2>
            <p
              onClick={handleClickProduct}
              className="text-blue-800 font-semibold cursor-pointer"
            >
              R$: {product.price}
            </p>
          </div>
          <div className="justify-self-end">
            <button
              onClick={handleRemoveItemClick}
              className="font-bold text-xs p-1 bg-red-500 text-white rounded-md tracking-normal mb-5 cursor-pointer shadow-lg active:bg-opacity-75"
            >
              Remover
            </button>
            <div className="flex gap-2">
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
            <p className="font-semibold text-sm">
              R$: {product.price * product.quantity}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
