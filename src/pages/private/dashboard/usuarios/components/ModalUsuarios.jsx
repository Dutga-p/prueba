import { useForm } from 'react-hook-form';
import { ModalComponent, SelectForm, InputForm } from '../../../../../components';
import { postUserData } from '../../../../../services/userService';
import { ModalError } from '../../../../../components/modales/ModalError';
import { useState } from 'react';
import { ModalSuccess } from '../../../../../components/modales/ModalSuccess';

export const ModalUsuarios = ({ visible, onClose, data = {}, setActualizar }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm(
        {
            defaultValues: {
                nombre: data?.nombre || '',
                email: data?.email || '',
                username: data?.usuario || '',
                password: data?.password || '',
            }
        }
        );
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [errorModalMessage, setErrorModalMessage] = useState('');
    const [successModalVisible, setSuccessModalVisible] = useState(false);
    const [successModalMessage, setSuccessModalMessage] = useState('');

    const onSubmit = async (data) => {
        try{
            const response = await postUserData(data);
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

            <ModalComponent titulo="Crear Usuario" visibleModal={visible} onClose={onClose}>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                    <p className='font-semibold'>Datos inicio sesion</p>
                    <hr />
                    <div className='grid grid-cols-2 gap-2 w-full'> 
                        <InputForm
                            name="username"
                            placeholder="Usuario"
                            label="Usuario"
                            registerProps={register("username", { required: "Este campo es requerido" })}
                            type="text"
                            defaultValue={data?.username || ''}
                            errors={errors}
                        />
                        <div>
                            <InputForm
                                name="password"
                                placeholder="******"
                                label="Contraseña"
                                registerProps={register("password", { required: "Este campo es requerido" })}
                                type="text"
                                defaultValue={data?.password || ''}
                                errors={errors}
                            />
                        </div>
                    </div>
                    <p className='font-semibold'>Datos usuario</p>
                    <hr />
                    <div className='grid grid-cols-2 gap-2 w-full'>
                        <InputForm
                            name="nombre"
                            placeholder="Nombre completo"
                            label="Nombre"
                            registerProps={register("nombre", { required: "Este campo es requerido" })}
                            type="text"
                            defaultValue={data?.nombre || ''}
                            errors={errors}
                        />
                        <InputForm
                            name="apellido"
                            placeholder="Apellido"
                            label="Apellido"
                            registerProps={register("apellido", { required: "Este campo es requerido" })}
                            type="text"
                            defaultValue={data?.apellido || ''}
                            errors={errors}
                        />
                    </div>
                    <InputForm
                        name="email"
                        placeholder="example@studiof.com.co"
                        label="Correo"
                        registerProps={register("email", { required: "Este campo es requerido" })}
                        type="email"
                        defaultValue={data?.email || ''}
                        errors={errors}
                    />
                    
                    <InputForm
                        name="direccion"
                        placeholder="cra 1 # 1 - 1"
                        label="Direccion"
                        registerProps={register("direccion", { required: "Este campo es requerido" })}
                        type="text"
                        defaultValue={data?.direccion || ''}
                        errors={errors}
                    />
                    <InputForm
                        name="telefono"
                        placeholder="+57 300 000 0000"
                        label="Telefono"
                        registerProps={register("telefono", {
                            required: "El campo es requerido",
                            pattern: {
                            value: /^[0-9+\s]+$/,
                            message: "Ingrese un número de teléfono válido",
                            },
                        })}
                        type="number"
                        defaultValue={data?.telefono || ''}
                        errors={errors}
                    />
                    <SelectForm
                        name="rol"
                        registerProps={register("rol", { required: "Este campo es requerido" })}
                        defaultValue={data?.rol !== undefined ? data.rol.toString() : ''}
                        options={[
                            { label: 'Admin', value: '1' },
                            { label: 'Vendedor', value: '2' },
                        ]}
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

