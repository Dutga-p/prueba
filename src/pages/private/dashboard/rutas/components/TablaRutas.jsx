import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { DataTableComponent, Column } from "../../../../../components";
import { ToolbarRutas } from "./ToolbarRutas";
import { BotonEditarRuta } from "./BotonEditarRuta";
import { getRutasData } from "../../../../../services";

export const TablaRutas = () => {
  const [rutas, setRutas] = useState([]);
  const [actualizar, setActualizar] = useState('');

  useEffect(() => {
    const getRutas = async () => {
      try {
        const resp = await getRutasData();
        setRutas(resp);
      } catch (error) {
        console.log(error);
      }
    };
    getRutas();
  }, [actualizar]);

  const [TableComponent, dt] = DataTableComponent();

  const columns = [
    { field: "idRuta", header: "Id" },
    { field: "nombreRuta", header: "Ruta" },
    { field: "descripcion_Ruta", header: "Nombre" },
  ];

  return (
    <div className="bg-white rounded-md shadowContainer card p-6">
      <ToolbarRutas dt={dt} setActualizar={setActualizar}/>

      <TableComponent columns={columns} data={rutas}>
        {columns.map((column, index) =>
          <Column
            key={index}
            field={column.field}
            header={column.header}
            sortable
            filter
          />
        )}
        <Column
          header="Acciones"
          body={rowData => <BotonEditarRuta data={rowData} setActualizar={setActualizar} />}
        />
      </TableComponent>
    </div>
  );
};

TablaRutas.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
