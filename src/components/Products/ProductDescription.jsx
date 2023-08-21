/* eslint-disable react/prop-types */
export const ProductDescription = ({ product }) => {
  return (
    <section className="border-t-2 py-9 px-5 flex flex-col gap-5">
      <h2 className="font-semibold text-2xl opacity-50">Descrição</h2>
      <p>{product.description}</p>
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
