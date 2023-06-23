import AboutUs from '../components/AboutUs';
import Information from '../components/Information';
import MyAccount from '../components/MyAccount';
import Support from '../components/Support';

const Footer = () => (
  <div className="bg-background-200 mx-auto gap-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    <AboutUs />
    <MyAccount />
    <Information />
    <Support />
  </div>
);

export default Footer;
