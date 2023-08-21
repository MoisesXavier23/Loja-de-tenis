import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/cart/cartSlice';

/* eslint-disable react/prop-types */
const ProductsItems = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleBuyClick() {}

  const handleAddToCartClick = () => {
    dispatch(addToCart(product));
  };

  function handleClickProduct() {
    navigate(`/produto/${product.id}`);
  }

  return (
    <div className="bg-zinc-50 max-w-max p-5 rounded-md drop-shadow-md shadow-xl">
      <div className="cursor-pointer" onClick={handleClickProduct}>
        <div
          style={{ backgroundImage: `url(${product.imageUrl})` }}
          className={`w-52 h-56 overflow-hidden rounded-xl bg-no-repeat bg-cover bg-center`}
        ></div>
        <div className="font-mono flex justify-between items-center px-2 py-2">
          <h2 className="font-bold text-xl text-slate-600">{product.name}</h2>
          <p className="font-semibold text-sky-800">R$ {product.price}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <button
          className="text-cyan-500 text-base font-semibold tracking-wide bg-transparent hover:bg-cyan-50 active:bg-cyan-700 active:text-white active:transition-none
            transition-colors duration-500 rounded border-dashed border-2 border-cyan-500 py-1 mb-2"
          onClick={handleAddToCartClick}
        >
          Adicionar ao Carrinho
        </button>
        <button
          className="text-white text-lg font-semibold tracking-wide bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-900 active:text-white active:transition-none transition-colors duration-500 rounded py-2"
          onClick={handleBuyClick}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductsItems;
