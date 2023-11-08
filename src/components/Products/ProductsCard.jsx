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

  return (
    <div className="bg-white border border-slate-200 rounded-md shadow-2xl w-[calc(100%-55vw)] sm:w-[195px] xl:w-[200px] p-1">
      <div className="w-full grid">
        <Link to={'/produto/' + product.id} className="w-full">
          <div className="cursor-pointer w-full">
            <div
              style={{ backgroundImage: `url(${product.imageUrl})` }}
              className={`w-full h-[140px] xl:h-[200px] bg-no-repeat bg-cover bg-center`}
            ></div>
            <h2 className="font-semibold text-base xl:text-[16px] h-[50px] mt-1">
              {product.name}
            </h2>
          </div>
        </Link>
        <p className="font-bold text-right text-sm xl:text-[16px] mb-2">
          R$ {product.price}
        </p>
        <div className="flex flex-col self-end">
          <button
            className="text-xs md:text-sm xl:text-[14px] font-semibold tracking-wide bg-transparent hover:bg-cyan-50 active:bg-cyan-700 active:text-white active:transition-none transition-colors duration-500 border-dashed border-2 border-black rounded-md py-1 xl:py-[5px] mb-[2px]"
            onClick={handleAddToCartClick}
          >
            Adicionar ao Carrinho
          </button>
          <button
            className="text-white text-xs md:text-sm xl:text-[14px] font-semibold tracking-wide bg-black hover:opacity-75 active:opacity-75 active:transition-none transition-colors duration-500 rounded-md py-1 xl:py-[10px]"
            onClick={handleBuyClick}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsItems;
