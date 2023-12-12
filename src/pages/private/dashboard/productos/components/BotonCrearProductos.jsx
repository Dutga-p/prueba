import React, { useState } from 'react'
import { PiPlusBold } from 'react-icons/pi';
import { BotonComponent } from '../../../../../components';
import { ModalCrearRepuesto } from './ModalCrearRepuesto';
import { ModalCrearVehiculo } from './ModalCrearVehiculo';
import { Button } from 'primereact/button';

const BotonCrearProductos = ({setActualizar, tipoProducto}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const abrirModal = () => {
        setModalVisible(true);
    };

    return (
        <>
            <div className="flex flex-wrap gap-2">
                <Button onClick={abrirModal} raised severity="success" className='font-inter' disabled={tipoProducto == null}>
                    <PiPlusBold className="mr-2" />
                    {tipoProducto === 'repuesto' ? 'Crear Repuesto' : 'Crear Vehículo'}
                </Button>
            </div>

            {modalVisible && tipoProducto === 'repuesto' && (
                <ModalCrearRepuesto
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    setActualizar={setActualizar}
                />
            )}

            {modalVisible && tipoProducto === 'vehiculo' && (
                <ModalCrearVehiculo
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    setActualizar={setActualizar}
                />
            )}
        </>
    )
}

export default BotonCrearProductos