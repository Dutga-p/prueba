import { BotonExportarCSV, ToolbarComponent } from "../../../../../components";
import { BotonCrearRutas } from "./BotonCrearRutas";

export const ToolbarRutas = ({ dt, setActualizar }) => {
    
    const startContent = () => {
        return (
            <BotonCrearRutas setActualizar={setActualizar}/>
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