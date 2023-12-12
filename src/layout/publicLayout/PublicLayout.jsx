import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header/Header'

export const PublicLayout = () => {
  return (
    <div className='min-h-screen xl:px-52 flex flex-col bg-cover bg-center font-chakra bg-[#121212]'>
      <Header />
      <Outlet />
    </div>
  )
}
