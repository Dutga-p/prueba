import { useForm } from 'react-hook-form';
import { InputForm, ModalComponent } from '../../../../../components';
import { postRolesData } from '../../../../../services/rolesService';
import { useState } from 'react';
import { ModalSuccess } from '../../../../../components/modales/ModalSuccess';
import { ModalError } from '../../../../../components/modales/ModalError';
import { postVehiculoData } from '../../../../../services/productoService';


export const ModalCrearVehiculo = ({ visible, onClose, data = {}, setActualizar}) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [errorModalMessage, setErrorModalMessage] = useState('');
    const [successModalVisible, setSuccessModalVisible] = useState(false);
    const [successModalMessage, setSuccessModalMessage] = useState('');

    const onSubmit = async (data) => {
        console.log(data)
        try{
            const response = await postVehiculoData(data);
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

            <ModalComponent titulo="Crear Repuesto" visibleModal={visible} onClose={onClose}>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                    <InputForm
                        name="marca"
                        placeholder="Toyota, BMW, etc."
                        label="Marca"
                        registerProps={register("marca", { required: "Debes digitar una marca" })}
                        type="text"
                        defaultValue={data?.marca || ''}
                        errors={errors}
                    />
                    <InputForm
                        name="nombre"
                        placeholder="toyota txl, bmw x6, etc."
                        label="Nombre"
                        registerProps={register("nombre", { required: "Debes digitar un nombre" })}
                        type="text"
                        defaultValue={data?.nombre || ''}
                        errors={errors}
                    />
                    <InputForm
                        name="precio"
                        placeholder="121000"
                        label="precio"
                        registerProps={register("precio", { required: "Debes digitar un precio" })}
                        type="number"
                        defaultValue={data?.precio || ''}
                        errors={errors}
                    />
                    <InputForm
                        name="img"
                        placeholder="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.motor.es%2Fnoticias%2Ftoyota-l"
                        label="img"
                        registerProps={register("img", { required: "Debes digitar una img" })}
                        type="text"
                        defaultValue={data?.img || ''}
                        errors={errors}
                    />
                    <InputForm
                        name="color"
                        placeholder="negro, blanco, etc"
                        label="color"
                        registerProps={register("color", { required: "Debes digitar un color" })}
                        type="text"
                        defaultValue={data?.color || ''}
                        errors={errors}
                    />
                    <InputForm
                        name="modelo"
                        placeholder="2023, 2022, 2021"
                        label="modelo"
                        registerProps={register("modelo", { required: "Debes digitar un modelo" })}
                        type="number"
                        defaultValue={data?.modelo || ''}
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
