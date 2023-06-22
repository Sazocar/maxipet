import ArrowDown from '../../icons/ArrowDown';
import FacebookIcon from '../../icons/FacebookIcon';
import InstagramIcon from '../../icons/InstagramIcon';
import LocationIcon from '../../icons/LocationIcon';
import TwitterIcon from '../../icons/TwitterIcon';

const Details = () => (
  <div className="bg-primary-300 h-6 items-center gap-x-4 py-5 justify-end flex px-8">
    <section className="flex items-center gap-x-2 cursor-pointer">
      <LocationIcon />
      <p className="text-white text-xs text-light">Bello Monte</p>
      <ArrowDown />
    </section>
    <InstagramIcon />
    <TwitterIcon />
    <FacebookIcon />
  </div>
);

export default Details;
