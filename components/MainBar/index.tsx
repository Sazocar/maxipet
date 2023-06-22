import NavIconGroup from '../../containers/NavIconGroup';
import MaxiPetLogo from '../../public/MaxiPetLogo';
import Search from '../Search';

const Frame = () => (
  <div className="flex justify-between px-12 py-4 items-center">
    <MaxiPetLogo />
    <Search />
    <NavIconGroup />
  </div>
);

export default Frame;
