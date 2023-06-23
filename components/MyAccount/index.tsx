import Subtitle from '../Subtitle';

const MyAccount = () => (
  <div className="sm:py-12 py-6 px-4">
    <Subtitle text="Mi cuenta" />
    <ul className="text-secondary-500 text-base flex flex-col justify-start gap-y-2">
      <li>Información personal</li>
      <li>Direcciones</li>
      <li>Mascotas</li>
      <li>Órdenes</li>
      <li>Agenda</li>
    </ul>
  </div>
);

export default MyAccount;
