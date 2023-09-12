import ImageSlider from '../components/ImageSlider/ImageSlider';
import Order from '../components/Order/Order';
import productsData from '../components/Products/data';
import ProductsCard from '../components/Products/ProductsCard';
import Head from '../Head';

import { useState } from 'react';

const Home = () => {
  const [sequence, setSequence] = useState('relevant');
  const sortedarray = [...productsData];

  return (
    <>
      <Head title={''} />
      <div className="w-full h-80">
        <ImageSlider productsData={productsData} />
      </div>
      <main className="mx-auto py-16 px-5 flex flex-wrap justify-center gap-4">
        <Order sequence={sequence} setSequence={setSequence} />
        <section className="flex flex-wrap justify-center gap-4">
          {sortedarray
            .sort((a, b) => {
              return sequence === 'asc'
                ? a.price - b.price
                : sequence === 'desc'
                ? b.price - a.price
                : b.avaliation - a.avaliation;
            })
            .map((product) => (
              <ProductsCard product={product} key={product.id} />
            ))}
        </section>
      </main>
    </>
  );
};

export default Home;
