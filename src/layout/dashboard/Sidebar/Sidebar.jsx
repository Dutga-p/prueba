import React from 'react'

import { ListMenu } from './components/ListMenu'

{ /* Iconos con react icons */ }
import { PiSquaresFourBold, PiUserBold, PiGearSixBold, PiEnvelopeOpenBold, PiBugBeetleBold, PiGitMergeBold } from "react-icons/pi";
import { RiLightbulbFlashLine, RiAdminLine } from "react-icons/ri";

import { rutaDash, rutaInventario, rutaProductos, rutaRoles, rutaRutas, rutaSucursales, rutaUsuarios, rutaVentas } from '../../../router/rutas';
import SelectIdioma from '../../../components/SelectIdioma';
import { FaBuilding } from 'react-icons/fa';
import { MdOutlineSpaceDashboard } from "react-icons/md";

const rutaPaginas = [
  {
    titulo: 'Dashboard',
    ruta: rutaDash,
    icono: <MdOutlineSpaceDashboard />
  },
  {
    titulo: 'Inventario',
    ruta: rutaInventario,
    icono: <RiLightbulbFlashLine />
  },
  {
    titulo: 'Ventas',
    ruta: rutaVentas,
    icono: <PiSquaresFourBold />
  },
  {
    titulo: 'Sucursales',
    ruta: rutaSucursales,
    icono: <FaBuilding />
  },
  {
    titulo: 'Productos',
    ruta: rutaProductos,
    icono: <PiSquaresFourBold />
  },
]

const rutaAdministracion = [
  {
    titulo: 'Usuarios',
    ruta: rutaUsuarios,
    icono: <PiUserBold />
  },
  {
    titulo: 'Roles',
    ruta: rutaRoles,
    icono: <RiAdminLine />
  },
  {
    titulo: 'Rutas',
    ruta: rutaRutas,
    icono: <PiGitMergeBold />
  },
]

const rutaConfiguracion = [
  {
    titulo: 'Configuracion',
    ruta: '',
    icono: <PiGearSixBold />
  },
]

const rutaSoporte = [
  {
    titulo: 'Reportar',
    ruta: '',
    icono: <PiBugBeetleBold />
  },
  {
    titulo: 'Soporte',
    ruta: '',
    icono: <PiEnvelopeOpenBold />
  }
]

export const Sidebar = ({ showSidebar }) => {
  return (
    <nav className={`bg-gradient-to-r from-slate-900 to-slate-800 overflow-y-scroll fixed z-40 lg:w-[250px] w-full h-full md:h-screen invisible-scrollbar
          top-0 flex flex-col justify-between pb-10 pt-[80px] ${showSidebar ? 'max-lg:left-0' : 'max-lg:-left-full'} transition-all duration-300`}>

      <div>
        <div className='pt-4 px-4 hidden max-lg:flex'>
          <SelectIdioma />
        </div>
        {/* LISTA DE ITEMS*/}
        <div className='h-4/6 px-6 space-y-6'>
          <ListMenu titulo='Paginas' rutas={rutaPaginas} />
          <ListMenu titulo='Administrador' rutas={rutaAdministracion} />
          <ListMenu titulo='Configuración' rutas={rutaConfiguracion} />
          <ListMenu titulo='Soporte' rutas={rutaSoporte} />
        </div>
      </div>
    </nav>
  )
}
