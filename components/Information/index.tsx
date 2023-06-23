import Subtitle from '../Subtitle';

const Information = () => (
  <div className="flex flex-col">
    <Subtitle text="Información" />
    <ul className="text-secondary-500 text-base flex flex-col justify-start gap-y-2">
      <li>Formulario de contacto</li>
      <li>Preguntas frecuentes</li>
      <li>Términos y condiciones</li>
      <li>Políticas de privacidad</li>
    </ul>
  </div>
);

export default Information;
