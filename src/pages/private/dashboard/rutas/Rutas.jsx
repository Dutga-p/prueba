import React from 'react'
import { TablaRutas } from './components/TablaRutas';
export const Rutas = () => {

    return (
      <div className='space-y-6'> 
      <div className='flex flex-col sm:flex-row justify-between p-2'>
        <h1 className='text-white text-[1.8rem] mb-2'>Rutas</h1>
      </div>

      <TablaRutas />
    </div>
    )
  }
  