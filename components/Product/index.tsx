import AddButton from '../AddButton';

const Product = ({ product }) => {
  const { image, title, icon, price } = product;

  return (
    <article className="w-32 flex flex-col items-center">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      {icon}
      <span>$ {price}</span>
      <AddButton />
    </article>
  );
};

export default Product;
