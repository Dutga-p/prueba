import React, { useState } from 'react'
import { PiPlusBold } from 'react-icons/pi';
import { BotonComponent } from '../../../../../components';
import { ModalRoles } from './ModalRoles';

const BotonCrearRoles = ({setActualizar}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const abrirModal = () => {
        setModalVisible(true);
    };

    return (
        <>
            <div className="flex flex-wrap gap-2">
                <BotonComponent accion={abrirModal} tipo="success">
                    <PiPlusBold className="mr-2" />
                    Crear Rol
                </BotonComponent>
            </div>

            {modalVisible && (
                <ModalRoles
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    setActualizar={setActualizar}
                />
            )}
        </>
    )
}

export default BotonCrearRoles