import React from 'react';

import toyotalogo from '../../assets/img/toyotalogo.png';
import bmwlogo from '../../assets/img/bmwlogo.png';
import jaguarlogo from '../../assets/img/jaguarlogo.png';
import fordlogo from '../../assets/img/fordlogo.png';
import hondalogo from '../../assets/img/hondalogo.png';
import dodgelogo from '../../assets/img/dodgelogo.png';

export const CarouselMarcas = () => {

  const marcasData = [
    { title: 'Toyota', image: toyotalogo },
    { title: 'BMW', image: bmwlogo },
    { title: 'Jaguar', image: jaguarlogo },
    { title: 'Ford', image: fordlogo },
    { title: 'Honda', image: hondalogo },
    { title: 'Dodge', image: dodgelogo }
  ];

  const itemsCards = marcasData.map((item, index) => {
    return (
      <div className='border border-zinc-500' key={index}>
        <img src={item.image} className='card-img-top' alt={item.title} />
      </div>
    )
  });

  return (
    <div className='flex gap-4'>
      {itemsCards}
    </div>
  )
};