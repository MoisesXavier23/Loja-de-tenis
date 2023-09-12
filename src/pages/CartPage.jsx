import { useSelector } from 'react-redux';
import CartItem from '../components/CartModal/CartItem';
import {
  selectorCartProducts,
  selectorProductsTotalPrice,
  selectorProductsTotalitems,
} from '../redux/cart/cartSlice';
import CustomButton from '../components/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import Head from '../Head';

const CartPage = () => {
  const { products } = useSelector(selectorCartProducts);
  const totalProductsPrice = useSelector(selectorProductsTotalPrice);
  const totalProductsItemsInCart = useSelector(selectorProductsTotalitems);
  const navigate = useNavigate();

  function handleHome() {
    navigate('/');
  }

  return (
    <main className="px-3 md:px-0 md:w-4/5 mx-auto pt-5 md:pt-16 md:grid grid-cols-[2.3fr_1fr] gap-10">
      <Head title={'Carrinho'} />
      <section>
        {totalProductsItemsInCart ? (
          products.map((product) => (
            <CartItem product={product} key={product.id} />
          ))
        ) : (
          <h2 className="text-xl text-center mt-28 opacity-75">
            Você não possui nenhum item no carrinho
          </h2>
        )}
      </section>
      <section className="h-max flex flex-col md:gap-5 bg-slate-300 border-t border-black md:border-none md:bg-transparent fixed bottom-[-1px] left-0 w-full md:relative">
        <div className="md:bg-slate-300 rounded p-2 md:p-5 flex flex-col items-start">
          <h2 className="font-bold text-2xl text-black">Total</h2>
          <p className="font-semibold text-black md:my-5">
            Quantidade de itens:
            <span className="absolute right-8">{totalProductsItemsInCart}</span>
          </p>
          <p className="font-bold text-base">
            Preço total:
            <span className="text-lg absolute right-8">
              R$: {totalProductsPrice}
            </span>
          </p>
        </div>
        <div className="md:bg-slate-300 md:rounded p-1 md:p-5 flex justify-center">
          {totalProductsItemsInCart ? (
            <CustomButton
              // onClick={handleBuyPage}
              className={`text-white text-center font-semibold tracking-wider hover:opacity-75 active:bg-blue-800 bg-blue-500 rounded-xl py-3 md:py-5 w-full`}
            >
              Finalizar Compra
            </CustomButton>
          ) : (
            <CustomButton
              onClick={handleHome}
              className={`text-white text-center font-semibold tracking-wider hover:opacity-75 active:bg-blue-800 bg-blue-500 rounded-xl py-3 md:py-5 w-full`}
            >
              Voltar para o inicio
            </CustomButton>
          )}
        </div>
      </section>
    </main>
  );
};

export default CartPage;
