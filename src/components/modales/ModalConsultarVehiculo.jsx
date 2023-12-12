import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { useTranslation } from 'react-i18next';
import { InputText } from "primereact/inputtext";
import ModalComponent from './ModalComponent';

export const ModalConsultarVehiculo = () => {
    const [visible, setVisible] = useState(false);
    const [placa, setPlaca] = useState('');
    const { t } = useTranslation();

    const openModal = () => {
        setVisible(true);
    };

    const closeModal = () => {
        setVisible(false);
    };
    return (
        <div>
            <button
                type="button"
                onClick={openModal}
                className="border border-orange-500 bg-orange-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-orange-600 focus:outline-none focus:shadow-outline uppercase"
            >
                <i className='fa fa-car'></i> {t('button.consultVehicle')}
            </button>
            <ModalComponent
                titulo="Consultar Vehículo"
                visibleModal={visible}
                onClose={closeModal}
            >
                <div className="card flex justify-content-center">
                    <span className="p-float-label">
                        <InputText id="username" value={placa} onChange={(e) => setValue(e.target.value)} />
                        <label htmlFor="username">Username</label>
                    </span>
                </div>

                <div>
                    <Button outlined onClick={closeModal}>Cerrar</Button>
                    <Button severity='success'>Confirmar</Button>
                </div>
            </ModalComponent>
        </div>
    );
};