import Image from '../components/Image/Image';
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
      <main className="bg-gray-100 py-[50px] xl:py-[78px] flex flex-col items-center justify-center gap-5">
        <section className="max-w-[1080px] w-full">
          <Image />
        </section>
        <Order sequence={sequence} setSequence={setSequence} />
        <section className="px-[2px] sm:px-2 flex flex-wrap justify-center gap-2 sm:gap-4 xl:gap-7">
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
