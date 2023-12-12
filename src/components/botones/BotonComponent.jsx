import React from 'react'
import { Button } from 'primereact/button';

const BotonComponent = ({ children, accion, tipo }) => {
  return (
    <Button severity={tipo} raised onClick={accion} className='font-inter'>
      {children}
    </Button>
  )
}

export default BotonComponent;