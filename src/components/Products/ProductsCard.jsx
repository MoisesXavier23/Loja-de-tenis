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
    <div className="w-[150px] sm:w-[175px] xl:w-[250px] grid">
      <Link to={'/produto/' + product.id}>
        <div className="cursor-pointer">
          <div
            style={{ backgroundImage: `url(${product.imageUrl})` }}
            className={`w-full h-[140px] xl:h-[225px] bg-no-repeat bg-cover bg-center`}
          ></div>
          <div className="grid grid-rows-[1fr, 0.5fr] pb-2">
            <h2 className="font-semibold text-sm md:text-base xl:text-[18px]">
              {product.name}
            </h2>
            <p className="font-bold text-sm xl:text-[18px]">
              R$ {product.price}
            </p>
          </div>
        </div>
      </Link>
      <div className="flex flex-col self-end">
        <button
          className="text-xs md:text-sm xl:text-[16px] font-semibold tracking-wide bg-transparent hover:bg-cyan-50 active:bg-cyan-700 active:text-white active:transition-none transition-colors duration-500 border-dashed border-2 border-black rounded-md py-1 xl:py-[5px] mb-[2px]"
          onClick={handleAddToCartClick}
        >
          Adicionar ao Carrinho
        </button>
        <button
          className="text-white text-xs md:text-sm xl:text-[16px] font-semibold tracking-wide bg-black hover:opacity-75 active:opacity-75 active:transition-none transition-colors duration-500 rounded-md py-1 xl:py-[5px]"
          onClick={handleBuyClick}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductsItems;
