import Heading from '../Heading';
import Service from '../Service';

const ServicesList = () => {
  const serviceArray = [
    {
      id: 0,
      image: '/category.png',
      service: 'Peluqueria',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde optio a eaque! Qui optio   vitae velit non atque voluptas odit labore fugiat suscipit praesentium architecto.',
    },
    {
      id: 1,
      image: '/category.png',
      service: 'Odontología',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde optio a eaque! Qui optio   vitae velit non atque voluptas odit labore fugiat suscipit praesentium architecto.',
    },
    {
      id: 2,
      image: '/category.png',
      service: 'Veterinario',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde optio a eaque! Qui optio   vitae velit non atque voluptas odit labore fugiat suscipit praesentium architecto.',
    },
    {
      id: 3,
      image: '/category.png',
      service: 'Entrenamiento',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde optio a eaque! Qui optio   vitae velit non atque voluptas odit labore fugiat suscipit praesentium architecto.',
    },
    {
      id: 4,
      image: '/category.png',
      service: 'Psicología canina',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde optio a eaque! Qui optio   vitae velit non atque voluptas odit labore fugiat suscipit praesentium architecto.',
    },
    {
      id: 5,
      image: '/category.png',
      service: 'Fiestas de cumpleaños',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde optio a eaque! Qui optio   vitae velit non atque voluptas odit labore fugiat suscipit praesentium architecto.',
    },
  ];

  return (
    <div className="mx-auto w-5/6 my-20">
      <Heading text="Nuestros Servicios" />
      <h2 className="my-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </h2>
      <div className="grid my-4 mx-auto place-items-center gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-screen-xl">
        {serviceArray.map((item) => (
          <Service key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
