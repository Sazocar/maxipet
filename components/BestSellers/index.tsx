import PawIconContainer from '../../containers/PawIconContainer';
import Heading from '../Heading';
import Product from '../Product';

const BestSellers = () => {
  const product = {
    image: '/chiot.png',
    title: '1st Choice Puppy Chiot',
    icon: <PawIconContainer />,
    price: 9.99,
  };

  const productsArray = new Array(5)
    .fill(product)
    .map((_, index) => ({ id: index + 1 }));

  return (
    <section className="mx-auto w-5/6 my-20">
      <Heading text="Productos Populares" />
      <div className="grid my-4 mx-auto place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 w-full max-w-screen-xl">
        {productsArray.map((item) => (
          <Product key={item.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
