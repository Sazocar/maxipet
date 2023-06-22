import { Carousel } from '@material-tailwind/react';

const Slider = () => (
  <Carousel className="h-96">
    <img src="/dog1.png" alt="1" className="h-full w-full object-cover" />
    <img
      src="https://images.pexels.com/photos/5255612/pexels-photo-5255612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="2"
      className="h-full w-full object-cover"
    />
    <img
      src="https://images.pexels.com/photos/5257628/pexels-photo-5257628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="3"
      className="h-full w-full object-cover"
    />
    <img
      src="https://images.pexels.com/photos/5255547/pexels-photo-5255547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="4"
      className="h-full w-full object-cover"
    />
  </Carousel>
);

export default Slider;
