import React from 'react';
import { NavLink } from 'react-router-dom';
import { rutaInicio } from '../../../../router/rutas';
import { useTranslation } from 'react-i18next';

const rutasPagina = [
  {
    titulo: 'home',
    ruta: rutaInicio,
    icono: "fa fa-home",
  },
  {
    titulo: 'information',
    ruta: '',
    icono: "fa fa-info-circle",
  },
];

const ListaDeRutas = ({ rutas }) => {
  const {t} = useTranslation();

  return (
    <ul className='flex max-md:block'>
      {rutas.map((ruta, index) => (
        <li key={index} className="mx-4 my-6 md:my-0">
          <NavLink
            to={ruta.ruta}
            className="flex gap-2 items-center text-2xl hover:text-[#D16527] hover:underline duration-500"
          >
            <i className={ruta.icono}></i>
            {t(`${ruta.titulo}.title`)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export const ListMenu = () => {
  return <ListaDeRutas rutas={rutasPagina} />;
};