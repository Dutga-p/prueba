import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { DataTableComponent, Column } from "../../../../../components";
import { ToolbarSucursales } from "./ToolbarSucursales";
import { getSucursalData } from "../../../../../services/sucuralService";
import { BotonEditarSucursal } from "./BotonEditarSucursal";

export const TablaSucursales = () => {
  const [sucursales, setSucursales] = useState([]); 
  const [actualizar, setActualizar] = useState('');

  useEffect(() => {
    const getSucursales = async () => {
      try {
        const resp = await getSucursalData();
        setSucursales(resp);
      } catch (error) {
        console.log(error);
      }
    };
    getSucursales();
  }, [actualizar]);

  const [TableComponent, dt] = DataTableComponent();

  const columns = [
    { field: "sucursalId", header: "Id" },
    { field: "nombre", header: "Nombre" },
    { field: "direccion", header: "Direccion" },
    { field: "telefono", header: "Telefono" },
    { field: "ciudad", header: "Ciudad" },
  ];

  return (
    <div className="bg-white rounded-md shadowContainer card p-6">
      <ToolbarSucursales dt={dt} setActualizar={setActualizar}/>

      <TableComponent columns={columns} data={sucursales}>
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
          body={rowData => <BotonEditarSucursal data={rowData} setActualizar={setActualizar} />}
        />
      </TableComponent>
    </div>
  );
};