import React from 'react'
import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
    <div className='w-full min-h-screen md:h-screen bg-[#0b0b0b] flex items-center justify-center px-5 py-5'>
      <Outlet />
    </div>
  )
}
