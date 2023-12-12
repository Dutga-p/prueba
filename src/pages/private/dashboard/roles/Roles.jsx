import React from 'react'
import { TablaRoles } from './components/TablaRoles';

export const Roles = () => {

    return (
      <div className='space-y-6'> 
      <div className='flex flex-col sm:flex-row justify-between p-2'>
        <h1 className='text-white text-[1.8rem] mb-2'>Roles</h1>
      </div>

      <TablaRoles />
    </div>
    )
  }
  