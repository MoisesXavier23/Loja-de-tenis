import { useSelector } from 'react-redux';
import CartItem from '../components/CartModal/CartItem';
import {
  selectorCartProducts,
  selectorProductsTotalPrice,
  selectorProductsTotalitems,
} from '../redux/cart/cartSlice';
import CustomButton from '../components/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { products } = useSelector(selectorCartProducts);
  const totalProductsPrice = useSelector(selectorProductsTotalPrice);
  const totalProductsItemsInCart = useSelector(selectorProductsTotalitems);
  const navigate = useNavigate();

  // Lógica para mostrar uma mensagem para quando não tiver nenhum item no carrinho
  // useEffect(() => {
  //   if (!totalProductsItemsInCart) navigate('/');
  // }, [totalProductsItemsInCart, navigate]);

  // if (totalProductsItemsInCart === 0) {
  //   setDisable(true);
  // }

  function handleBuyPage() {
    navigate('/buy');
  }

  function handleHome() {
    navigate('/');
  }

  return (
    <main className="w-4/5 mx-auto pt-16 grid grid-cols-[2.3fr_1fr] gap-10 z-50">
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
      <section className="h-max flex flex-col gap-5 relative">
        <div className="bg-slate-100 rounded p-5 flex flex-col items-start">
          <h2 className="font-bold text-2xl text-black">Total</h2>
          <p className="font-semibold text-black my-5">
            Quantidade de itens:
            <span className="absolute right-8">{totalProductsItemsInCart}</span>
          </p>
          <p className="font-bold text-base">
            Preço total:
            <span className="text-xl absolute right-8">
              R$ {totalProductsPrice}
            </span>
          </p>
        </div>
        <div className="bg-slate-100 rounded p-5 flex justify-center">
          {totalProductsItemsInCart ? (
            <CustomButton
              onClick={handleBuyPage}
              className={`text-white text-center font-semibold tracking-wider hover:opacity-75 active:bg-blue-800 bg-blue-500 rounded-xl py-5 w-full`}
            >
              Finalizar Compra
            </CustomButton>
          ) : (
            <CustomButton
              onClick={handleHome}
              className={`text-white text-center font-semibold tracking-wider hover:opacity-75 active:bg-blue-800 bg-blue-500 rounded-xl py-5 w-full`}
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
