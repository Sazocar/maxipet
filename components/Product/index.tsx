import AddButton from '../AddButton';

const Product = ({ product }) => {
  const { image, title, icon, price } = product;

  return (
    <article className="flex flex-col items-center">
      <img src={image} alt={title} className="w-4/5 h-full" />
      <section className="flex w-52 flex-col gap-y-1 items-start mt-6 mb-3">
        <h3>{title}</h3>
        {icon}
        <span>$ {price}</span>
      </section>
      <AddButton />
    </article>
  );
};

export default Product;
