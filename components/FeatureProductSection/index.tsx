import Image from 'next/image';
import Heading from '../Heading';
import PawIconContainer from '../../containers/PawIconContainer';
import Product from '../Product';

const FeatureProductSection = ({ text, orientation }) => {
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
      <Heading text={text} />
      <div className={`flex justify-between ${orientation}`}>
        <Image
          src="/cat.png"
          alt="Cat"
          width={440}
          height={1000}
          className="md:mt-4 hidden mt-12 md:block md:w-4/6 h-full object-cover"
        />
        <div className="w-full mt-12 md:mt-4 grid pl-12 mx-auto place-items-center gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {productsArray.map((item) => (
            <Product key={item.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureProductSection;
