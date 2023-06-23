const Service = ({ item }) => {
  const { image, service, description } = item;

  return (
    <article className="flex flex-col w-80">
      <img src={image} alt={service} className="w-32" />
      <h2 className="text-secondary-400 font-semibold">{service}</h2>
      <p className="text-secondary-500 text-sm">{description}</p>
    </article>
  );
};

export default Service;
