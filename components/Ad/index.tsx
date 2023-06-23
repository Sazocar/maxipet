import Image from 'next/image';

const Ad = ({ image }) => (
  <Image
    src={image}
    alt="ad"
    width={1200}
    height={1200}
    className="w-5/6 my-20 mx-auto h-full object-cover"
  />
);

export default Ad;
