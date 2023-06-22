import Category from '../Category';
import Heading from '../Heading';

const CategorySection = () => {
  const categories = [
    {
      id: 0,
      image: '/category.png',
      text: 'Perros',
    },
    {
      id: 1,
      image: '/category.png',
      text: 'Gatos',
    },
    {
      id: 2,
      image: '/category.png',
      text: 'Peces',
    },
    {
      id: 3,
      image: '/category.png',
      text: 'Roedores',
    },
    {
      id: 4,
      image: '/category.png',
      text: 'Reptiles',
    },
    {
      id: 5,
      image: '/category.png',
      text: 'Aves',
    },
  ];

  return (
    <section className="mx-auto w-3/4 my-20">
      <Heading text="Una gran variedad de categorias" />
      <div className="grid my-4 mx-auto place-items-center gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-full max-w-screen-xl">
        {categories.map((item) => (
          <Category key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
