import React from 'react'
import { Button } from 'primereact/button';
import { exportCSV } from '../../utils';
import { PiFileCsvDuotone } from 'react-icons/pi';

export const BotonExportarCSV = ({ dt }) => {

    /** exporta todos los datos */
    const handleExportCSV = () => {
        exportCSV(dt.current, false);
    };

    return (
        <Button severity="primary" raised rounded size='large' onClick={() => handleExportCSV()} aria-label="Filter">
            <PiFileCsvDuotone/>
        </Button>
    )
}
