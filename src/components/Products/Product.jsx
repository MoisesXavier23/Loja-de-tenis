import { useDispatch } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
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
    <section className="md:grid md:grid-cols-[1.5fr_1fr] h-max justify-center">
      <div
        style={{ backgroundImage: `url(${product.imageUrl})` }}
        className={`w-full sm:w-[400px] xl:w-[650px] h-[270px] md:h-[400px] xl:h-[500px] bg-no-repeat bg-cover bg-center mx-auto`}
      />
      <div className="text-[14px] md:text-[16px] text-black pt-3 md:pl-5 md:pt-0 md:pr-0 h-full xl:w-[400px] grid">
        <div>
          <h2 className="font-semibold text-xl md:text-[24px] xl:text-[28px] text-slate-600 mb-[10px] md:mb-[50px] xl:mb-[25px]">
            {product.name}
          </h2>
          <p className="text-[#D6D6D6]">R$ {product.price}</p>
          <p className="font-bold text-[18px] md:text-[22px] text-[#20A1FF]">
            R$ {product.price}
          </p>
          <p className="">
            até 12x de R$ {(product.price / 12).toFixed(2)} sem juros
          </p>
          <p className="">Vendido e entregue por: Zaphira</p>
          <p className="">
            <span className="font-bold">Cor: </span>
            {product.color > 2 ? product.color.join(', ') : product.color}
          </p>
        </div>
        <div className="h-max md:self-end xl:self-auto hidden invisible md:block md:visible">
          <CustomButton
            onClick={handleBuyClick}
            className="text-[16px] md:text-[14px] xl:text-[16px] text-white text-center font-semibold tracking-wider hover:opacity-75s bg-black md:rounded-[7px] py-2 md:mb-[5px] w-full"
          >
            Comprar
          </CustomButton>
          <CustomButton
            onClick={handleBuyClick}
            className="text-[14px] md:text-[14px] xl:text-[16px] text-center font-semibold tracking-wider hover:opacity-75s bg-white md:rounded-[7px] border border-black py-1 w-full"
          >
            Adicionar ao carrinho
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default Product;
