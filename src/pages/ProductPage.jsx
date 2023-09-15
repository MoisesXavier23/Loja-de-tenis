import { useNavigate, useParams } from 'react-router-dom';
import products from '../components/Products/data';
import Product from '../components/Products/Product';
import { ProductDescription } from '../components/Products/ProductDescription';
import Head from '../Head';
import CustomButton from '../components/CustomButton/CustomButton';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart/cartSlice';

const ProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const product = products.find((product) => product.id === id && product);

  function handleBuyClick() {
    dispatch(addToCart(product));
    navigate(`/cart`);
  }

  return (
    <>
      <Head title={'Produto'} />
      <main className="px-[20px] md:px-[50px] xl:px-[100px] xl:w-4/5 mx-auto pt-[60px] md:pt-[80px] pb-[80px] flex flex-col md:grid gap-4 md:gap-7 relative">
        <Product product={product} />
        <div className="w-full h-[1px] bg-[#D6D6D6]"></div>
        <ProductDescription product={product} />
        <section className="h-max flex flex-col md:gap-5 bg-white border-t md:border-none border-[#D6D6D6] md:hidden md:invisible fixed bottom-[-1px] left-0 w-full md:relative">
          <CustomButton
            onClick={handleBuyClick}
            className="text-[16px] md:text-[14px] xl:text-[16px] text-white text-center font-semibold tracking-wider hover:opacity-75s bg-black md:rounded-[7px] py-2 md:mb-[20px] w-full"
          >
            Comprar
          </CustomButton>
          <CustomButton
            onClick={handleBuyClick}
            className="text-[14px] md:text-[14px] xl:text-[16px] text-center font-semibold tracking-wider hover:opacity-75s bg-white md:rounded-[7px] py-1 md:mb-[20px] w-full"
          >
            Adicionar ao carrinho
          </CustomButton>
        </section>

        {/* <h2 className="font-semibold text-2xl opacity-50">Avaliações</h2>
        <div>Recomendação</div> */}
      </main>
    </>
  );
};

export default ProductPage;
