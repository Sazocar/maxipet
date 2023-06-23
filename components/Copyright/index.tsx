import AvilaIcon from '../../icons/AvilaIcon';
import DogHouse from '../../icons/DogHouse';
import Tree from '../../icons/Tree';

const Copyright = () => (
  <section>
    <div className="flex justify-between items-end px-32">
      <DogHouse />
      <Tree />
    </div>
    <div className="bg-primary-300 w-full items-center gap-x-4 py-2 justify-center flex px-8">
      <span className="text-white text-xs">
        Copyright © 2021 Maxi Pet. Todos los Derechos Reservados. Desarrollado
        por Avila Tek{' '}
      </span>
      <AvilaIcon />
    </div>
  </section>
);

export default Copyright;
