import Image from 'next/image';
import Heading from '../Heading';
import PawIconContainer from '../../containers/PawIconContainer';
import Product from '../Product';

const FeatureProductSection = () => {
  const product = {
    image: '/chiot.png',
    title: '1st Choice Puppy Chiot',
    icon: <PawIconContainer />,
    price: 9.99,
  };

  const productsArray = new Array(6)
    .fill(product)
    .map((_, index) => ({ id: index + 1 }));

  return (
    <section className="mx-auto w-5/6 my-20">
      <Heading text="Productos Destacados" />
      <div className="flex flex-row items-center justify-between">
        <Image
          src="/cat.png"
          alt="Cat"
          width={440}
          height={708}
          className="h-full object-cover"
        />
        <div className="w-full grid my-4 mx-auto place-items-center gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl">
          {productsArray.map((item) => (
            <Product key={item.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureProductSection;
