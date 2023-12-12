import React from 'react'

/** Abre la modal para consultar el estado de un vehiculo por su placa */
export const BotonConsultarVehiculo = ({children}) => {
    return (
        <button
            type="button"
            className="border border-orange-500 bg-orange-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-orange-600 focus:outline-none focus:shadow-outline uppercase"
        >
            {children}
        </button>
    )
}
