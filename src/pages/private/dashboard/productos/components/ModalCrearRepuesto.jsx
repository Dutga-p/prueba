import { useForm } from 'react-hook-form';
import { InputForm, ModalComponent } from '../../../../../components';
import { postRolesData } from '../../../../../services/rolesService';
import { useEffect, useState } from 'react';
import { ModalSuccess } from '../../../../../components/modales/ModalSuccess';
import { ModalError } from '../../../../../components/modales/ModalError';
import { getCategoriasData, postRepuestoData } from '../../../../../services/productoService';


export const ModalCrearRepuesto = ({ visible, onClose, data = {}, setActualizar}) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [errorModalMessage, setErrorModalMessage] = useState('');
    const [successModalVisible, setSuccessModalVisible] = useState(false);
    const [successModalMessage, setSuccessModalMessage] = useState('');
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const getCategorias = async () => {
            try {
                const response = await getCategoriasData();
                const categorias = response.map(categoria => {
                    return {
                        label: categoria.tipoRepuesto,
                        value: categoria.id
                    };
                });
                setCategorias(categorias);
            } catch (error) {
                console.log(error);
            }
        }

        getCategorias();
    }, []);

    const onSubmit = async (data) => {
        console.log(data)
        try{
            const response = await postRepuestoData(data);
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
                        name="descripcion"
                        placeholder="Nombre"
                        label="Nombre"
                        registerProps={register("descripcion", { required: "Debes digitar un nombre" })}
                        type="text"
                        defaultValue={data?.descripcion || ''}
                        errors={errors}
                    />
                    <InputForm
                        name="precio"
                        placeholder="121000"
                        label="Precio"
                        registerProps={register("precio", { required: "Debes digitar un precio" })}
                        type="number"
                        defaultValue={data?.precio || ''}
                        errors={errors}
                    />
                    <InputForm
                        name="fechaFabriacion"
                        placeholder="Fecha de fabricación"
                        label="fechaFabriacion"
                        registerProps={register("fechaFabriacion", { required: "Debes digitar una fecha" })}
                        type="text"
                        defaultValue={data?.fechaFabriacion || ''}
                        errors={errors}
                    />
                    <InputForm
                        name="img"
                        placeholder="Url de la imagen"
                        label="Imagen"
                        registerProps={register("img", { required: "Debes digitar una url" })}
                        type="text"
                        defaultValue={data?.img || ''}
                        errors={errors}
                    />
                    <select
                        name="Categoria"
                        id="nombreRepuesto"
                        {...register("nombreRepuesto", { required: "Este campo es requerido" })}
                        className="border border-gray-300 w-full py-4 p-2.5 text-gray-400 text-md rounded-lg focus:outline-none focus:border-blue-500"
                    >
                        {categorias.map(option =>
                        <option
                            key={option.value}
                            value={option.value}
                            className="text-lg text-gray-600"
                        >
                            {option.label}
                        </option>
                        )}
                    </select>
                    
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
