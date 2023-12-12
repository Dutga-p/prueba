import React from 'react'
import ImgEliminar from '../../assets/img/delete-trash-svgrepo-com.svg'

const BotonEliminar = ({ accion }) => {
    return (
        <button onClick={accion}>
            <img src={ImgEliminar} alt="Eliminar" />
        </button>
    )
}

export default BotonEliminar