import React from 'react';
import Car from '../../../../assets/img/car4.gif';
import logo from '../../../../assets/img/logo.png';

const ImageSection = () => {
  return (
    <div className="hidden lg:block w-3/5 py-10 px-10 flex-col text-center bg-cover bg-center" style={{ backgroundImage: `url(${Car})` }}>
      <div className='flex items-center gap-4'>
        <img src={logo} alt="logo" className='w-28' />
        <p className='text-white font-bold text-2xl'>Concesionario JJ</p>
      </div>
    </div>
  );
};

export default ImageSection;
