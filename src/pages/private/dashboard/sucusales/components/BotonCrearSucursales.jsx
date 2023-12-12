import React, { useState } from 'react'
import { BotonComponent } from '../../../../../components';
import { ModalCrearSucursal } from './ModalCrearSucursal';
import { PiPlusBold } from 'react-icons/pi';

export const BotonCrearSucursales = ({setActualizar}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const abrirModal = () => {
        setModalVisible(true);
    };

    return (
        <>
            <div className="flex flex-wrap gap-2">
                <BotonComponent accion={abrirModal} tipo="success">
                    <PiPlusBold className="mr-2" />
                    Crear Sucursal
                </BotonComponent>
            </div>

            {modalVisible && (
                <ModalCrearSucursal
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    setActualizar={setActualizar}
                />
            )}
        </>
    )
}