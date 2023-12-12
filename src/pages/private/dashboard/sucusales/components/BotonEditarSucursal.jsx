import React, { useState } from 'react'
import { BotonEditar } from '../../../../../components';
import { ModalEditarSucursal } from './ModalEditarSucursal';

export const BotonEditarSucursal = ({data, setActualizar}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const abrirModal = () => {
        setModalVisible(true);
    };

    return (
        <>
            <BotonEditar accion={abrirModal} />

            {modalVisible && (
                <ModalEditarSucursal
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    data={data}
                    setActualizar={setActualizar}
                />
            )}
        </>
    )
}