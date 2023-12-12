import React from 'react'
import { TablaVentas } from './components/TablaVentas';

export const VentasPage = () => {

  return (
    <div className='space-y-6'> 
      <div className='flex flex-col sm:flex-row justify-between p-2'>
        <h1 className='text-white text-[1.8rem] mb-2'>VENTAS</h1>
      </div>
      <TablaVentas />
    </div>
  )
}
