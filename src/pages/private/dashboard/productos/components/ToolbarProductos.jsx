import React from 'react'
import { BotonExportarCSV, ToolbarComponent } from '../../../../../components';
import BotonCrearProductos from './BotonCrearProductos';

export const ToolbarProductos = ({ dt, setActualizar, tipoProducto }) => {
    
    const startContent = () => {
        return (

            <BotonCrearProductos setActualizar={setActualizar} tipoProducto={tipoProducto}/>
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
