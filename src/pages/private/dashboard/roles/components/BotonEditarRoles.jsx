import React, { useState } from 'react'
import { ModalRoles } from './ModalRoles';
import { BotonEditar } from '../../../../../components';
import { ModalEditarRoles } from './ModalEditarRoles';


const BotonEditarRoles = ({ data, setActualizar }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const abrirModal = () => {
        setModalVisible(true);
    };

    return (
        <>
            <BotonEditar accion={abrirModal} />

            {modalVisible && (
                <ModalEditarRoles
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    data={data}
                    setActualizar={setActualizar}
                />
            )}
        </>
    )
}

export default BotonEditarRoles