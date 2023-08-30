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
    <section className="grid grid-cols-[1.5fr_1fr] justify-center">
      <div
        style={{ backgroundImage: `url(${product.imageUrl})` }}
        className={`w-full bg-no-repeat bg-contain bg-center`}
      />
      <div className="p-5 flex flex-col items-start gap-10">
        <h2 className="font-bold text-3xl text-slate-600">{product.name}</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          iusto. A saepe eveniet laboriosam doloribus corporis, illum quod aut
          aliquam repudiandae magnam corrupti, alias ducimus incidunt.
          Praesentium hic atque aliquid.
        </p>
        <p className="font-semibold text-2xl text-sky-800">
          R$ {product.price}
        </p>
        <CustomButton
          onClick={handleBuyClick}
          className={
            'text-white text-lg font-semibold tracking-wide bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-900 active:text-white active:transition-none transition-colors duration-500 rounded py-2 w-full h-20'
          }
        >
          Comprar
        </CustomButton>
      </div>
    </section>
  );
};

export default Product;
