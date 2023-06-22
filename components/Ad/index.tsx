import Image from 'next/image';

const Ad = ({ image }) => (
  <Image
    src={image}
    alt="ad"
    width={1200}
    height={1200}
    className="w-screen my-20 h-full px-12 object-cover"
  />
);

export default Ad;
