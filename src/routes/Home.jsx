import productsData from '../components/Products/data';
import ProductsCard from '../components/Products/ProductsCard';

const Home = () => {
  return (
    <main className="w-4/5 mx-auto py-16 flex flex-wrap justify-center gap-4">
      {productsData.map((product) => (
        <ProductsCard product={product} key={product.id} />
      ))}
    </main>
  );
};

export default Home;
