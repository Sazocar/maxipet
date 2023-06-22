import HomeIcon from '../icons/HomeIcon';
import LocationIcon from '../icons/LocationIcon';
import ShoppingCartIcon from '../icons/ShoppingCartIcon';
import UserIcon from '../icons/UserIcon';

const NavIconGroup = () => (
  <div className="flex gap-x-2">
    <LocationIcon color="#000" />
    <HomeIcon />
    <UserIcon />
    <ShoppingCartIcon color="#000" />
  </div>
);
export default NavIconGroup;
