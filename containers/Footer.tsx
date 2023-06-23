import AboutUs from '../components/AboutUs';
import Information from '../components/Information';
import MyAccount from '../components/MyAccount';
import Support from '../components/Support';

const Footer = () => (
  <footer className="bg-background-200">
    <div className="grid my-4 px-12 gap-4 grid-cols-1 justify-between place-content-between sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
      <AboutUs />
      <MyAccount />
      <Information />
      <Support />
    </div>
  </footer>
);

export default Footer;
