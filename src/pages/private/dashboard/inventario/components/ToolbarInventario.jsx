import React from 'react'
import { BotonExportarCSV, ToolbarComponent } from '../../../../../components';

export const ToolbarInventario = ({ dt, setActualizar, tipoProducto }) => {
    
    // const startContent = () => {
    //     return (

    //         <BotonCrearProductos setActualizar={setActualizar} tipoProducto={tipoProducto}/>
    //     );
    // };


    const endContent = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <BotonExportarCSV dt={dt} />
            </div>
        );
    };

    return (
        <ToolbarComponent endContent={endContent} />
    )
}
