import React, { useState } from 'react'
import { BotonComponent } from '../../../../../components';
import { ModalRutas } from './ModalRutas';
import { PiPlusBold } from 'react-icons/pi';

export const BotonCrearRutas = ({setActualizar}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const abrirModal = () => {
        setModalVisible(true);
    };

    return (
        <>
            <div className="flex flex-wrap gap-2">
                <BotonComponent accion={abrirModal} tipo="success">
                    <PiPlusBold className="mr-2" />
                    Crear Ruta
                </BotonComponent>
            </div>

            {modalVisible && (
                <ModalRutas
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    setActualizar={setActualizar}
                />
            )}
        </>
    )
}