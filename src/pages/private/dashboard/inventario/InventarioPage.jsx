import React from 'react'
import { TablaInventario } from './components/TablaInventario';

export const InventarioPage = () => {

    return (
      <div className='space-y-6'> 
      <div className='flex flex-col sm:flex-row justify-between p-2'>
        <h1 className='text-white text-[1.8rem] mb-2'>Inventario</h1>
      </div>

      <TablaInventario />
    </div>
    )
  }