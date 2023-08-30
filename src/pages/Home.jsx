import productsData from '../components/Products/data';
import ProductsCard from '../components/Products/ProductsCard';
import Head from '../Head';

const Home = () => {
  return (
    <main className="mx-auto py-16 px-5 flex flex-wrap justify-center gap-4">
      <Head title={''} />
      {productsData.map((product) => (
        <ProductsCard product={product} key={product.id} />
      ))}
    </main>
  );
};

export default Home;
