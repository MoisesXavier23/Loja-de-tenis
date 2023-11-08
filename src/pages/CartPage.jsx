import { useSelector } from 'react-redux';
import CartItem from '../components/CartModal/CartItem';
import {
  selectorCartProducts,
  selectorProductsTotalPrice,
  selectorProductsTotalitems,
} from '../redux/cart/cartSlice';
import CustomButton from '../components/CustomButton/CustomButton';
import { Link } from 'react-router-dom';
import Head from '../Head';

const CartPage = () => {
  const { products } = useSelector(selectorCartProducts);
  const totalProductsPrice = useSelector(selectorProductsTotalPrice);
  const totalProductsItemsInCart = useSelector(selectorProductsTotalitems);

  return (
    <>
      {totalProductsItemsInCart > 0 ? (
        <main className="h-max pb-[350px] xl:pb-[200px] px-[10px] pt-[55px] md:pt-[100px] xl:px-[180px] md:grid grid-cols-[2.3fr_1fr] gap-10">
          <Head title={'Carrinho'} />
          <section className="flex flex-col gap-5">
            {products.map((product) => (
              <CartItem product={product} key={product.id} />
            ))}
          </section>
          <section className="h-max flex flex-col md:gap-5 bg-white border-t md:border-none border-[#D6D6D6] fixed bottom-[-1px] left-0 w-full md:relative">
            <div className="text-[14px] md:text-[12px] xl:text-[16px] text-black font-semibold md:border md:shadow-lg md:rounded-[7px] p-[20px] pb-[10px] flex flex-col items-start">
              <p className="">
                Subtotal ({totalProductsItemsInCart} item)
                <span className="absolute right-8">
                  R$: {totalProductsPrice}
                </span>
              </p>
              <div className="w-full h-[1px] bg-[#D6D6D6] my-[10px]"></div>
              <p className="">
                Adicionar cupom
                <span className="hover:text-blue absolute right-8">
                  Adcionar
                </span>
              </p>
              <div className="w-full h-[1px] bg-[#D6D6D6] my-[10px]"></div>
              <p className="flex items-center">
                Valor total:
                <span className="text-[16px] md:text-[14px] xl:text-[18px] font-bold text-[#20A1FF] absolute right-8">
                  R$: {totalProductsPrice}
                </span>
              </p>
            </div>
            <div className="md:p-[10px] xl:p-[20px] md:border md:shadow-lg md:rounded-[7px] flex justify-center">
              <div className="w-full">
                <CustomButton
                  // onClick={handleBuyPage}
                  className={`text-[16px] md:text-[14px] xl:text-[16px] text-white text-center font-semibold tracking-wider hover:opacity-75s bg-black md:rounded-[7px] py-3 md:mb-[20px] w-full`}
                >
                  Finalizar Compra
                </CustomButton>
                <CustomButton
                  className={`text-[16px] md:text-[14px] xl:text-[16px] text-center font-semibold tracking-wider hover:opacity-75s bg-white md:border md:border-black md:rounded-[7px] py-3 w-full`}
                >
                  Escolher mais Produtos
                </CustomButton>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <main className="h-screen px-[20px] md:px-[50px] pt-[200px] xl:pt-[250px] xl:px-[180px]">
          <Head title={'Carrinho'} />
          <section className="flex flex-col justify-center">
            <h2 className="text-center text-[16px] md:text-[20px] xl:text-[24px] mb-20 xl:mb-32">
              Você não tem nenhum produto no carrinho, volte para a página
              inicial para poder escolher-los
            </h2>
            <Link
              to={'/'}
              className="text-[12px] md:text-[14px] xl:text-[16px] text-white text-center font-semibold tracking-wider hover:opacity-75s bg-black rounded-[7px] py-3 md:mb-[20px] px-6 xl:w-1/2 self-center"
            >
              Voltar para a tela inicial
            </Link>
          </section>
        </main>
      )}
    </>
  );
};

export default CartPage;
