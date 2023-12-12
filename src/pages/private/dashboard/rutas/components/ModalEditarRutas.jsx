import React, { useState } from 'react'
import { InputForm, ModalComponent } from '../../../../../components';
import { useForm } from 'react-hook-form';
import { putRutasData } from '../../../../../services';
import { ModalSuccess } from '../../../../../components/modales/ModalSuccess';
import { ModalError } from '../../../../../components/modales/ModalError';

export const ModalEditarRutas = ({ visible, onClose, data = {}, setActualizar}) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [errorModalMessage, setErrorModalMessage] = useState('');
    const [successModalVisible, setSuccessModalVisible] = useState(false);
    const [successModalMessage, setSuccessModalMessage] = useState('');

    const onSubmit = async (dataForm) => {
        try{
            const response = await putRutasData(data.idRuta, dataForm);
            setSuccessModalMessage('Ruta editada correctamente');
            setSuccessModalVisible(true);
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
        setActualizar(Math.random());
    };

    const closeModalError = () => {
        setErrorModalVisible(false);
    };

    return (
        <>
            <ModalSuccess visible={successModalVisible} onClose={closeModalSucess} successMessage={successModalMessage} />
            <ModalError visible={errorModalVisible} onClose={closeModalError} errorMessage={errorModalMessage} />

            <ModalComponent titulo="Editar Ruta" visibleModal={visible} onClose={onClose}>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                    <InputForm
                        name="nombreRuta"
                        placeholder="/ruta"
                        label="Ruta"
                        registerProps={register("nombreRuta", { 
                            required: "Este campo es requerido",
                            pattern: {
                                value: /^\/[a-zA-Z]+$/,
                                message: "Solo se permiten letras y debe iniciar con /"
                            }
                        })}
                        type="text"
                        defaultValue={data?.nombreRuta || ''}
                        errors={errors}
                    />
                    <InputForm
                        name="descripcion_Ruta"
                        placeholder="Nombre"
                        label="Nombre"
                        registerProps={register("descripcion_Ruta", { 
                            required: "Este campo es requerido"
                        })}
                        type="text"
                        defaultValue={data?.descripcion_Ruta || ''}
                        errors={errors}
                    />
                    <div
                        className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
                    >
                        <button className="font-semibold text-gray-600" onClick={onClose}>
                            Cancelar
                        </button>
                        <button type="submit" className="px-4 py-2 text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded">
                            Editar
                        </button>
                    </div>
                </form>
            </ModalComponent>
        </>
    )
}
