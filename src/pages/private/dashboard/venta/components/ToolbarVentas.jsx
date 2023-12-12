import { Button } from "primereact/button";
import { BotonExportarCSV, ToolbarComponent } from "../../../../../components";
import { useNavigate } from "react-router-dom";

export const ToolbarVentas = ({ dt, setActualizar }) => {
    
    const startContent = () => {
        const navigate = useNavigate();

        const crearVenta = () => {
            navigate('/postventa');
        }

        return (
            <Button label="Crear venta" severity="success" raised onClick={crearVenta}/>
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