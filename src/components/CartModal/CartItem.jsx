import { useDispatch } from 'react-redux';
import {
  decreaseProductItem,
  increaseProductItem,
  removeProductItem,
} from '../../redux/cart/cartSlice';
import { useNavigate } from 'react-router-dom';
import { BsFillTrashFill } from 'react-icons/bs';

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
    <li
      key={product.id}
      className="border border-color-[#646464] rounded-[7px] bg-white shadow-lg p-[10px] list-none relative"
    >
      <div className="grid grid-cols-[109px_1fr] gap-[10px]">
        <div
          onClick={handleClickProduct}
          style={{ backgroundImage: `url(${product.imageUrl})` }}
          className={`w-full h-[109px] bg-no-repeat bg-cover bg-center cursor-pointer`}
        />
        <div className="grid grid-cols-[3fr_0.2fr]">
          <div className="flex flex-col justify-between relative">
            <h2
              onClick={handleClickProduct}
              className="font-bold text-[18px] md:text-lg xl:text-[20px] leading-4 cursor-pointer"
            >
              {product.name}
            </h2>
            <ul className="text-[12px] list-none leading-4">
              <li className="">Ref: {product.id}</li>
              <li className="">Vendido e entregue por: Zaphira</li>
              <li className="">
                Cor:{' '}
                {Array.isArray(product.color)
                  ? product.color.join(', ')
                  : product.color}
              </li>
            </ul>
            <p
              onClick={handleClickProduct}
              className="text-[14px] sm:text-[12px] xl:text-[14px] font-semibold cursor-pointer"
            >
              R$ {product.price} por unidade
            </p>
          </div>
          <div className="grid grid-rows-[.2fr_1fr] justify-self-end">
            <button
              onClick={handleRemoveItemClick}
              className="text-[16px] p-1 bg-red-500 text-white rounded-md cursor-pointer shadow-lg active:bg-opacity-75 justify-self-end"
            >
              <BsFillTrashFill />
            </button>
            <div className="self-end">
              <p className="font-bold text-[16px] sm:text-[14px] md:text-[12px] xl:text-[14px] text-end whitespace-nowrap">
                R$: {product.price * product.quantity}
              </p>
              <div className="flex items-center gap-1 justify-self-end">
                <div
                  onClick={handleDecreaseItemClick}
                  className="text-[18px] font-bold cursor-pointer select-none"
                >
                  -
                </div>
                <div className="bg-white px-2 py-0  border border-black rounded shadow">
                  {product.quantity}
                </div>
                <div
                  onClick={handleIncreaseItemClick}
                  className="text-[18px] font-bold cursor-pointer select-none"
                >
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
