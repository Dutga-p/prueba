import React, { useState } from 'react'
import { Sidebar } from './Sidebar/Sidebar'
import { Header } from './Header/Header'
import { Outlet } from 'react-router-dom';

export const DashBoardLayout = () => {

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className='min-h-screen min-w-full flex font-inter'>
      <Sidebar showSidebar={showSidebar} />
      <div className='bg-[#F3F6FE] w-full'>
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <main className='min-h-screen lg:pl-[250px] pt-[80px]'>
          <div className='bg-gradient-to-r from-indigo-500 to-blue-500 pt-12 pb-[9.5rem]'></div>
          <div className='p-6 mt-[-12rem] space-y-8 h-full'>
            <div className='min-h-full min-w-full'>
              <Outlet />
            </div>
            <hr />
            <footer className='w-full justify-center text-gray-400 pb-4 row text-center space-y-2'>
              <p>Creado por <span className='text-indigo-500'>Juan Pablo Marin - Juan Camilo Silva - Alejandro Giron - Juan Camilo Agrace - David Ordoñez Marin</span></p>
              <p>Para <span className='text-indigo-500'>UNIVALLE</span></p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  )
}
