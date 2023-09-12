/* eslint-disable react/prop-types */
export const ProductDescription = ({ product }) => {
  return (
    <section className="border-t-2 py-5 md:px-5 flex flex-col gap-5">
      <h2 className="font-semibold text-2xl md:text-4xl opacity-50">
        Descrição
      </h2>
      <p className="md:text-xl text-justify">
        {product.description.map((desc) => desc)}
      </p>
      {/* <ul>
        {product.tags.map((items, index) => (
          <li key={index}>
            <span className="font-semibold">Nome: </span> {items.name}
          </li>
        ))}
      </ul> */}
    </section>
  );
};
