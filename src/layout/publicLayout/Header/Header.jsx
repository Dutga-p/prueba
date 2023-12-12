import { useState } from 'react';
import { PiListFill, PiXFill } from "react-icons/pi";

import { ListMenu } from './components/ListMenu'
import imgLogo from '../../../assets/img/logo.png'

import { SelectIdioma } from '../../../components'
import { BotonIniciarSesion } from './components/BotonIniciarSesion';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className='py-5 px-2'>
      <nav className="md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <span className="flex gap-2 items-center text-2xl font-[Poppins] cursor-pointer">
            <img src={imgLogo} alt="logo-inge" className="h-14 inline" />
            <h1 className="text-white lg:text-[30px] md:text-[20px] text-[20px]">
              Concesionario<span className="font-bold text-[#D16527]"> JJ</span>
            </h1>
          </span>

          {/* Boton para abrir menu mobile */}
          <span
            className="text-3xl cursor-pointer mx-2 md:hidden block transition-transform duration-300 ease-in-out transform hover:scale-110 text-[#F5F5F5]"
            onClick={toggleMenu}
          >
            {showMenu ? <PiXFill /> : <PiListFill />}
          </span>
        </div>

        <ul
          className={`text-[#F5F5F5] md:flex md:items-center z-900 md:z-auto md:static absolute max-md:bg-[#1d1d1f] w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${showMenu ? 'opacity-100 top-[80px]' : 'left-[-1000px]'
            } transition-all ease-in duration-300`}
        >
          <ListMenu />
          <div className='mx-4 flex flex-col gap-4 md:hidden'>
            <SelectIdioma />
            <BotonIniciarSesion />
          </div>
        </ul>
        <div className='mx-4 flex gap-4 max-md:hidden'>
            <SelectIdioma />
            <BotonIniciarSesion />
          </div>
      </nav>
    </header>
  );
};
