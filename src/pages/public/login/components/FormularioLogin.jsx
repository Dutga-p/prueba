import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { PiUserLight, PiLockKeyFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../../../services';

export const FormularioLogin = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log('Datos del formulario:', data);
        try {
            const response = await postLogin(data);
            console.log(response);

            if (response.status === 200) {
                navigate('/ventas');
            }
        } catch (error) {
            console.log(error);
           alert(error.response.data.message);
        } finally {
            reset();
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-8 w-full text-center'>
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                    <PiUserLight className='text-2xl text-gray-400' />
                </div>
                <input
                    type='text'
                    name='usuario'
                    id="usuario"
                    {...register("usuario", { required: true })}
                    className={`block pl-10 text-lg appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white transition duration-500 ease-in-out ${errors.password?.type === 'required' && 'border-red-500'}`}
                    placeholder={t('login.username')}
                />
            </div>
                {errors.usuario && <span className='text-red-500'>{t('login.usernameRequired')}</span>}

            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                    <PiLockKeyFill className='text-2xl text-gray-400' />
                </div>
                <input
                    type='password'
                    id="password"
                    name='password'
                    {...register("password", { required: true })}
                    className={`block pl-10 text-lg appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white transition duration-500 ease-in-out ${errors.password?.type === 'required' && 'border-red-500'}`}
                    placeholder={t('login.password')}
                />
            </div>
                {errors.password && <span className='text-red-500'>{t('login.passwordRequired')}</span>}

            <button className="transition duration-500 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
                {t('login.login')}
            </button>
        </form>
    )
}
