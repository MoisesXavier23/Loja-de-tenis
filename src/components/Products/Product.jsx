import { useNavigate } from 'react-router-dom';
import CustomButton from '../CustomButton/CustomButton';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/cartSlice';

/* eslint-disable react/prop-types */
const Product = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleBuyClick() {
    dispatch(addToCart(product));
    navigate(`/cart`);
  }

  return (
    <section className="md:grid md:grid-cols-[1fr_1fr] justify-center">
      <div
        style={{ backgroundImage: `url(${product.imageUrl})` }}
        className={`w-full h-52 sm:h-64 md:h-full bg-no-repeat bg-contain bg-center`}
      />
      <div className="pt-3 md:p-10 grid gap-5">
        <h2 className="font-bold text-xl md:text-3xl text-slate-600">
          {product.name}
        </h2>
        <p className="text-justify md:text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          iusto. A saepe eveniet laboriosam doloribus corporis, illum quod aut
          aliquam repudiandae magnam corrupti, alias ducimus incidunt.
          Praesentium hic atque aliquid.
        </p>
        <p className="font-semibold text-xl md:text-3xl text-sky-800">
          R$ {product.price}
        </p>
        <CustomButton
          onClick={handleBuyClick}
          className={
            'text-white text-lg md:text-2xl font-semibold tracking-wide bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-900 active:text-white active:transition-none transition-colors duration-500 rounded py-3 md:py-1 w-full justify-self-end'
          }
        >
          Comprar
        </CustomButton>
      </div>
    </section>
  );
};

export default Product;
