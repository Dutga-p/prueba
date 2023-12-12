import React, { useState } from 'react'
import { BotonEditar } from '../../../../../components';
import { ModalEditarRutas } from './ModalEditarRutas';

export const BotonEditarRuta = ({data, setActualizar}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const abrirModal = () => {
        setModalVisible(true);
    };

    return (
        <>
            <BotonEditar accion={abrirModal} />

            {modalVisible && (
                <ModalEditarRutas
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    data={data}
                    setActualizar={setActualizar}
                />
            )}
        </>
    )
}