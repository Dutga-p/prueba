import React from 'react'
import { TablaProductos } from './components/TablaProductos'

export const ProductosPage = () => {
    

    return (
      <div className='space-y-6'> 
      <div className='flex flex-col sm:flex-row justify-between p-2'>
        <h1 className='text-white text-[1.8rem] mb-2'>Productos</h1>
      </div>

        <TablaProductos />
    </div>
    )
  }
  