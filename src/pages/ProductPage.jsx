import { useParams } from 'react-router-dom';
import products from '../components/Products/data';
import Product from '../components/Products/Product';
import { ProductDescription } from '../components/Products/ProductDescription';
import Head from '../Head';

const ProductPage = () => {
  const { id } = useParams();

  const product = products.find((product) => product.id === id && product);

  return (
    <main className="w-4/5 mx-auto pt-16 flex flex-col md:grid md:grid-rows-[500px_1fr_1fr_1fr] gap-7 z-50">
      <Head title={'Produto'} />
      <Product product={product} />
      <ProductDescription product={product} />
      {/* <h2 className="font-semibold text-2xl opacity-50">Avaliações</h2>
      <div>Recomendação</div> */}
    </main>
  );
};

export default ProductPage;
