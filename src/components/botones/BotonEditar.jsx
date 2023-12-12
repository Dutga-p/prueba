import React from 'react'
import ImgEditar from '../../assets/img/pencil-svgrepo-com.svg'

const BotonEditar = ({ accion }) => {
    return (
        <button onClick={accion}>
            <img src={ImgEditar} alt="Editar" />
        </button>
    )
}

export default BotonEditar;
