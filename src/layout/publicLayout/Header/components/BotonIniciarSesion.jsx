import React from 'react'
import { Link } from 'react-router-dom';
import { rutaLogin } from '../../../../router/rutas';
import { PiSignInBold } from "react-icons/pi";
import { useTranslation } from 'react-i18next';

export const BotonIniciarSesion = () => {

    const {t} = useTranslation();

    return (
        <Link to={rutaLogin}>
            <button
                className="text-white font-[Poppins] font-bold flex items-center gap-2 duration-500 px-6 py-2 bg-[#D16527] hover:bg-[#C65A1B] rounded">
                {t('login.login')} <PiSignInBold />
            </button>
        </Link>
    )
}
