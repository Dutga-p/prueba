import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export const ListMenu = ({ titulo, rutas = [] }) => {

    const location = useLocation();

    return (
        <div>
            <h1 className='text-[#8A99AF] font-bold text-[16px] py-4 uppercase'>{titulo}</h1>
            <ul>
                {
                    rutas.map((ruta, index) => (
                        <li key={index}>
                            <Link
                                to={ruta.ruta} 
                                className={`${location.pathname === ruta.ruta ? 'bg-gradient-to-r from-indigo-500 to-blue-500 font-bold text-white' : ''} flex items-center text-gray-400 hover:bg-[#1E2A47] p-2 rounded-md cursor-pointer`}
                            >
                                <span className='text-[1rem] font-[Feather]'>{ruta.icono}</span>
                                <span className='ml-2 text-[1rem] font-bold'>{ruta.titulo}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}





