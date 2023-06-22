import NavIconGroup from '../../containers/NavIconGroup';
import MaxiPetLogo from '../../public/MaxiPetLogo';
import Search from '../Search';

const Frame = () => (
  <div className="flex flex-col justify-between md:flex-row gap-y-4 px-12 py-4 items-center">
    <MaxiPetLogo />
    <Search />
    <NavIconGroup />
  </div>
);

export default Frame;
