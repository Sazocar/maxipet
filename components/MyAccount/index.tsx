import Subtitle from '../Subtitle';

const MyAccount = () => (
  <div className="flex flex-col">
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
