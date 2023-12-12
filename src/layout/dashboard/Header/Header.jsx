import React from 'react'

{/* ICONOS */ }
import { PiListBold, PiXBold } from "react-icons/pi";
import logo from '../../../assets/img/logo.png'

import { Avatar } from './components/Avatar';
import SelectIdioma from '../../../components/SelectIdioma';

const LogoHeader = () => {
  return (
    <div className="bg-slate-900 flex justify-center items-center text-2xl h-full sm:min-w-[250px]">
      <img src={logo} alt="logo" className='w-14 mr-2' />
      <h1 className='text-[20px] text-white'>Concesionario <span className='font-bold text-gray-400'>JJ</span></h1>
    </div>
  )
}

const BotonSidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div
      className={`text-[40px] cursor-pointer transition-transform duration-300 transform hover:scale-110 flex lg:hidden items-center
          ${showSidebar && 'fixed bottom-4 right-4 rounded-full p-3 z-50 bg-gradient-to-r from-indigo-500 to-blue-500'}`}
      onClick={() => setShowSidebar(!showSidebar)}
    >
      {showSidebar ? <PiXBold className='text-white' /> : <PiListBold />}
    </div>
  )
}

export const Header = ({ showSidebar, setShowSidebar }) => {
  return (
    <header className="bg-white max-lg:bg-slate-900 h-[80px] fixed w-full shadow-lg z-50">

      <div className='flex items-center justify-between h-full w-full max-lg:px-6 max-lg:text-white'>
        {/* BOTON SIDEBAR */}
        <BotonSidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

        {/* LOGO */}
        <LogoHeader />

        <div className='flex gap-6 mr-4'>
          <div className='hidden lg:flex'>
            <SelectIdioma color={'black'}/>
          </div>

          {/* AVATAR USUARIO */}
          <Avatar />
        </div>
      </div>
    </header>
  )
}

