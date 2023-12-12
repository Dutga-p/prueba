import { BotonExportarCSV, ToolbarComponent } from "../../../../../components";
import { BotonCrearSucursales } from "./BotonCrearSucursales";

export const ToolbarSucursales = ({ dt, setActualizar }) => {
    
    const startContent = () => {
        return (
            <BotonCrearSucursales setActualizar={setActualizar}/>
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