import React from 'react';
import { BotonExportarCSV, ToolbarComponent } from '../../../../../components';
import BotonCrearUsuario from './BotonCrearUsuario';


export const ToolbarUsuarios = ({ dt, setActualizar }) => {
    const startContent = () => {
        return (
            <BotonCrearUsuario setActualizar={setActualizar}/>
        );
    };

    const endContent = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <BotonExportarCSV dt={dt} />
            </div>
        );
    };

    return (
        <>
            <ToolbarComponent startContent={startContent} endContent={endContent} />
        </>
    );
};
