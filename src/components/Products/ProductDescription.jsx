/* eslint-disable react/prop-types */
export const ProductDescription = ({ product }) => {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="font-semibold text-[20px] md:text-[28px] opacity-50">
        Descrição
      </h2>
      <p className="text-[14px] md:text-[16px] text-justify">
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
