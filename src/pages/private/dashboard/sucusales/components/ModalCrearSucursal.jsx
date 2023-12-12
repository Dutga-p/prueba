import React, { useState } from 'react'
import { InputForm, ModalComponent } from '../../../../../components';
import { useForm } from 'react-hook-form';
import { ModalSuccess } from '../../../../../components/modales/ModalSuccess';
import { ModalError } from '../../../../../components/modales/ModalError';
import { postSucursalData } from '../../../../../services/sucuralService';

export const ModalCrearSucursal = ({ visible, onClose, data = {}, setActualizar}) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [errorModalMessage, setErrorModalMessage] = useState('');
    const [successModalVisible, setSuccessModalVisible] = useState(false);
    const [successModalMessage, setSuccessModalMessage] = useState('');

    const onSubmit = async (data) => {
        console.log(data)
        try{
            const response = await postSucursalData(data);
            setSuccessModalMessage('La operación se realizó con éxito');
            setSuccessModalVisible(true);
            setActualizar(response);
        } catch (error) {
            var mensajeError = "";
            for (const property in error.response.data) {
                mensajeError += property + ": " + error.response.data[property] + "\n";
            }
            setErrorModalMessage(mensajeError);
            setErrorModalVisible(true);
        }
    };

    const closeModalSucess = () => {
        setSuccessModalVisible(false);
        onClose();
    };

    const closeModalError = () => {
        setErrorModalVisible(false);
    };
    
    return (
        <>
            <ModalSuccess visible={successModalVisible} onClose={closeModalSucess} successMessage={successModalMessage} />
            <ModalError visible={errorModalVisible} onClose={closeModalError} errorMessage={errorModalMessage} />

            <ModalComponent titulo="Crear Sucursal" visibleModal={visible} onClose={onClose}>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                    <InputForm
                        name="nombre"
                        placeholder="nombre"
                        label="Nombre"
                        registerProps={register("nombre", { 
                            required: "Este campo es requerido"
                        })}
                        type="text"
                        defaultValue={data?.nombre || ''}
                        errors={errors}
                    />
                    <InputForm
                        name="direccion"
                        placeholder="Cra 1 # 1 - 1"
                        label="Direccion"
                        registerProps={register("direccion", { 
                            required: "Este campo es requerido"
                        })}
                        type="text"
                        defaultValue={data?.direccion || ''}
                        errors={errors}
                    />
                    <InputForm
                        name="telefono"
                        placeholder="3216294051"
                        label="Telefono"
                        registerProps={register("telefono", { 
                            required: "Este campo es requerido",
                            pattern: {
                                value: /^[0-9]*$/,
                                message: "Solo se permiten números"
                            }
                        })}
                        type="text"
                        defaultValue={data?.telefono || ''}
                        errors={errors}
                    />
                    <InputForm
                        name="ciudad"
                        placeholder="Cali"
                        label="ciudad"
                        registerProps={register("ciudad", { 
                            required: "Este campo es requerido"
                        })}
                        type="text"
                        defaultValue={data?.ciudad || ''}
                        errors={errors}
                    />
                    <div
                        className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
                    >
                        <button className="font-semibold text-gray-600" onClick={onClose}>
                            Cancelar
                        </button>
                        <button type="submit" className="px-4 py-2 text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded">
                            Crear
                        </button>
                    </div>
                </form>
            </ModalComponent>
        </>
    )
}
