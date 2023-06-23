const Category = ({ item }) => {
  const { image, text } = item;

  return (
    <figure className="w-52 p-4 h-full flex flex-col items-center">
      <img src={image} alt={image} />
      <span className="mt-4">{text}</span>
    </figure>
  );
};

export default Category;
