import React from 'react'
import { BotonExportarCSV, ToolbarComponent } from '../../../../../components';
import BotonCrearRoles from './BotonCrearRoles';

export const ToolbarRoles = ({ dt, setActualizar }) => {
    
    const startContent = () => {
        return (
            <BotonCrearRoles setActualizar={setActualizar}/>
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
        <ToolbarComponent startContent={startContent} endContent={endContent} />
    )
}
