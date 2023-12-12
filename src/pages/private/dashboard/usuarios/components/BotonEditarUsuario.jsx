import React, { useState } from 'react'
import { BotonEditar } from '../../../../../components';
import { putUserData } from '../../../../../services';
import { ModalEditarUsuario } from './ModalEditarUsuario';



const BotonEditarUsuario = ({data}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const abrirModalCrearUsuario = () => {
        setModalVisible(true);
    };

    return (
        <>
            <BotonEditar accion={abrirModalCrearUsuario} />

            {modalVisible && (
                <ModalEditarUsuario
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    data={data}
                />
            )}
        </>
    )
}

export default BotonEditarUsuario;
