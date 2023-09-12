import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToCart, increaseProductItem } from '../../redux/cart/cartSlice';

/* eslint-disable react/prop-types */
const ProductsItems = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleBuyClick() {
    dispatch(addToCart(product));
    navigate(`/cart`);
  }

  const handleAddToCartClick = () => {
    dispatch(increaseProductItem(product));
  };
  // md:min-h-[452px]
  return (
    <div className="bg-zinc-50 w-36 md:w-56 p-2 md:p-5 drop-shadow-md shadow-xl grid grid-rows-1">
      <Link to={'/produto/' + product.id}>
        <div className="cursor-pointer flex flex-col justify-center items-center">
          <div
            style={{ backgroundImage: `url(${product.imageUrl})` }}
            className={`w-32 h-32 md:w-full md:h-56 bg-no-repeat bg-cover bg-center`}
          ></div>
          <div className="grid grid-rows-[1fr, 0.5fr] px-2 py-2">
            <h2 className="font-bold text-sm md:text-lg text-slate-600">
              {product.name}
            </h2>
            <p className="font-semibold text-sm md:text-lg text-sky-800 ">
              R$ {product.price}
            </p>
          </div>
        </div>
      </Link>
      <div className="flex flex-col ">
        <button
          className="text-cyan-500 text-sm md:text-base font-semibold tracking-wide bg-transparent hover:bg-cyan-50 active:bg-cyan-700 active:text-white active:transition-none
            transition-colors duration-500 rounded border-dashed border-2 border-cyan-500 py-1 mb-2"
          onClick={handleAddToCartClick}
        >
          Adicionar ao Carrinho
        </button>
        <button
          className="text-white text-sm md:text-lg font-semibold tracking-wide bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-900 active:text-white active:transition-none transition-colors duration-500 rounded py-2"
          onClick={handleBuyClick}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductsItems;
