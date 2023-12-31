import Heading from '../Heading';

const Brands = () => (
  <section className="mx-auto w-5/6 my-20">
    <Heading text="Trabajamos con las mejores marcas" />
    <div className="flex flex-col mt-12 gap-y-6 items-center md:flex-row justify-evenly">
      <h2 className="w-full">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quam
        ipsum, ex eveniet eligendi dolorem
      </h2>
      <img
        src="/brand.png"
        alt="brand"
        className="w-32 mx-6 h-full object-cover"
      />
      <img
        src="/brand.png"
        alt="brand"
        className="w-32 mx-6 h-full object-cover"
      />
      <img
        src="/brand.png"
        alt="brand"
        className="w-32 mx-6 h-full object-cover"
      />
      <img
        src="/brand.png"
        alt="brand"
        className="w-32 mx-6 h-full object-cover"
      />
    </div>
  </section>
);

export default Brands;
