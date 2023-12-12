import React from 'react'
import { TablaUsuarios } from './components/TablaUsuarios';


export const Usuarios = () => {
  return (
    <div className='space-y-6'>
      <div className='flex flex-col sm:flex-row justify-between p-2'>
        <h1 className='text-white text-[1.8rem] mb-2'>Usuarios</h1>
      </div>

      <TablaUsuarios />
    </div>
  )
}
