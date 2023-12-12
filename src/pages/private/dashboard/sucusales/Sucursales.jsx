import React from 'react'
import { TablaSucursales } from './components/TablaSucursales';

export const Sucursales = () => {

    return (
      <div className='space-y-6'> 
      <div className='flex flex-col sm:flex-row justify-between p-2'>
        <h1 className='text-white text-[1.8rem] mb-2'>Sucursales</h1>
      </div>

      <TablaSucursales />
    </div>
    )
  }
  