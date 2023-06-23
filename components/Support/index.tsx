import FacebookIcon from '../../icons/FacebookIcon';
import InstagramIcon from '../../icons/InstagramIcon';
import TwitterIcon from '../../icons/TwitterIcon';
import Subtitle from '../Subtitle';

const Support = () => (
  <div className="flex flex-col">
    <Subtitle text="Atención al cliente" />
    <ul className="text-secondary-500 text-base flex flex-col justify-start gap-y-2">
      <li>Bello Monte, calle XXXX, local 1</li>
      <li>(0212) 575 54 12</li>
      <li>soporte@maxipet.com</li>
      <li>Lunes a Viernes</li>
      <li>9:00 a.m. - 5:00 p.m.</li>
      <li className="flex justify-start gap-x-2">
        <InstagramIcon color="#867D77" />
        <TwitterIcon color="#867D77" />
        <FacebookIcon color="#867D77" />
      </li>
    </ul>
  </div>
);

export default Support;
