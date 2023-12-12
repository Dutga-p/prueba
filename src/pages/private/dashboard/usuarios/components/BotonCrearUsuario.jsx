import React, { useState } from 'react'
import { PiPlusBold } from 'react-icons/pi';
import { BotonComponent } from '../../../../../components';
import { ModalUsuarios } from './ModalUsuarios';

const BotonCrearUsuario = ({setActualizar}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const abrirModalCrearUsuario = () => {
        setModalVisible(true);
    };

    return (
        <>
            <div className="flex flex-wrap gap-2">
                <BotonComponent accion={abrirModalCrearUsuario} tipo="success">
                    <PiPlusBold className="mr-2" />
                    Crear Usuario
                </BotonComponent>
            </div>

            {modalVisible && (
                <ModalUsuarios
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    setActualizar={setActualizar}
                />
            )}
        </>
    )
}

export default BotonCrearUsuario