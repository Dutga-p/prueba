import { useForm } from 'react-hook-form';
import { InputForm, ModalComponent } from '../../../../../components';
import { putRolesData } from '../../../../../services/rolesService';
import { useState } from 'react';
import { ModalSuccess } from '../../../../../components/modales/ModalSuccess';
import { ModalError } from '../../../../../components/modales/ModalError';


export const ModalEditarRoles = ({ visible, onClose, data = {}, setActualizar}) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm(
        {
            defaultValues: {
                nombre: data?.rol || '',
            }
        }
    );
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [errorModalMessage, setErrorModalMessage] = useState('');
    const [successModalVisible, setSuccessModalVisible] = useState(false);
    const [successModalMessage, setSuccessModalMessage] = useState('');

    const onSubmit = async (dataForm) => {
        try{
            const response = await putRolesData(data.id, dataForm);
            setSuccessModalMessage('Rol editado correctamente');
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

            <ModalComponent titulo="Editar Rol" visibleModal={visible} onClose={onClose}>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                    <InputForm
                        name="rol"
                        placeholder="Nombre del rol"
                        label="Rol"
                        registerProps={register("rol", { required: "Debes digitar un nombre de rol" })}
                        type="text"
                        defaultValue={data?.rol || ''}
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
