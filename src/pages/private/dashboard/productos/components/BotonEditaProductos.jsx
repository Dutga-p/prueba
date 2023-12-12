import React, { useState } from 'react'
import { BotonEditar } from '../../../../../components';
import {ModalEditarRepuesto} from './ModalEditarRepuesto';
import {ModalEditarVehiculo} from './ModalEditarVehiculo';

const BotonEditaProductos = ({ data, setActualizar, tipoProducto }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const abrirModal = () => {
        setModalVisible(true);
    };

    return (
        <>
            <BotonEditar accion={abrirModal} />

            {modalVisible && tipoProducto === 'repuesto' && (
                <ModalEditarRepuesto
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    setActualizar={setActualizar}
                    data={data}
                />
            )}

            {modalVisible && tipoProducto === 'vehiculo' && (
                <ModalEditarVehiculo
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    setActualizar={setActualizar}
                    data={data}
                />
            )}
        </>
    )
}

export default BotonEditaProductos