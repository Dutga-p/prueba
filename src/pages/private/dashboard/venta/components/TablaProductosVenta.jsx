import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import BotonEliminar from "../../../../../components/botones/BotonEliminar";

export const TablaProductosVenta = ({ productos, onCantidadChange, onDeleteProduct }) => {

  const bodyCantidad = (rowData) => {
    return (
      <div className="p-inputgroup flex-1">
        <button
          className="bg-red-600 p-2 text-white font-bold text-lg"
          onClick={() => onCantidadChange(rowData, -1)}
        >
          -
        </button>
        <span className="p-2">{rowData.cantidadVenta || 1}</span>
        <button
          className="bg-green-600 p-2 text-white font-bold text-lg"
          onClick={() => onCantidadChange(rowData, 1)}
        >
          +
        </button>
      </div>
    );
  };

  const bodyImg = (rowData) => {
    return <img src={rowData.img} alt={rowData.nombre} width="100" />;
  };

  const bodySubtotal = (rowData) => {
    return <span>{rowData.subtotalVenta || rowData.precio}</span>;
  };

  return (
    <DataTable
      value={productos}
      scrollable scrollHeight="500px"
      className="p-datatable-striped p-datatable-gridlines"
    >
      <Column field="id" header="ID"></Column>
      <Column field="nombre" header="Nombre"></Column>
      <Column field="precio" header="Precio"></Column>
      <Column field="img" header="Imagen" body={bodyImg}></Column>
      <Column field="cantidad" header="Cantidad" body={bodyCantidad}></Column>
      <Column field="subtotal" header="Subtotal" body={bodySubtotal}></Column>
      <Column
          header='Eliminar'
          body={(rowData) => {
            return (<BotonEliminar accion={() => onDeleteProduct(rowData)}/>);
          }}
        />
    </DataTable>
  );
};
