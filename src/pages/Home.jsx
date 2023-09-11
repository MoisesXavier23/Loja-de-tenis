import productsData from '../components/Products/data';
import ProductsCard from '../components/Products/ProductsCard';
import Head from '../Head';

const Home = () => {
  return (
    <main className="py-16 px-1 flex flex-wrap justify-center gap-1 sm:gap-3">
      <Head title={''} />
      {productsData.map((product) => (
        <ProductsCard product={product} key={product.id} />
      ))}
    </main>
  );
};

export default Home;
