import React from 'react'

import bgllantas from '../../../assets/img/bgllantas.png'
import kitTools from '../../../assets/img/kit-tools.png'
import { useTranslation } from 'react-i18next';
import { BotonConsultarVehiculo } from '../../../components/botones/BotonConsultarVehiculo';
import { CarouselMarcas } from '../../../components/carousel/CarouselMarcas';

export const Inicio = () => {

  const { t } = useTranslation();

  const backgroundStyles = {
    backgroundImage: `url(${bgllantas})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="w-full h-full">
      <div className="w-full flex items-center justify-center p-10" style={backgroundStyles}>
        <div className="md:w-1/2 space-y-8">
          <p className="text-[#dedede] text-6xl">{t('home.pageTitle')}</p>
          <p className="text-[#dedede]">
            {t('home.pageDescription')}
          </p>
          <BotonConsultarVehiculo>
            <i className='fa fa-car'></i> Consultar vehiculo
          </BotonConsultarVehiculo>
        </div>

        <div className="w-1/2 md:flex hidden items-center justify-center ">
          <img src={kitTools} alt="car" className="w-[500px]" />
        </div>
      </div>

      <CarouselMarcas />
    </div>
  );
};