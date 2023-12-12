import React, { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {
  getInventarioRepuestoService,
  getInventarioVehiculoService
} from "../../services/inventarioService";

export const ModalSelectorProductos = ({
  visible,
  onClose,
  tipoProducto,
  setProductos,
  productos
}) => {
  const cerrarModal = () => {
    onClose();
  };

  return (
    <Dialog header="Seleccionar productos" visible={visible} onHide={onClose}>
      <div className="space-y-2">
        <span className="font-bold">
          {tipoProducto}
        </span>
        <TablaProductos
          setProductos={setProductos}
          productos={productos}
          tipoProducto={tipoProducto}
          cerrarModal={cerrarModal}
        />
      </div>
    </Dialog>
  );
};

const TablaProductos = ({
  setProductos,
  productos,
  tipoProducto,
  cerrarModal
}) => {
  const [productosInventario, setProductosInventario] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(
    () => {
      const getProductos = async () => {
        try {
          const response = await fetchTypeProducts(tipoProducto);
          setProductosInventario(response);

          // Marca los productos existentes como seleccionados
          const productosSeleccionados = response.filter(producto =>
            productos.some(
              p => p.id === producto.id && p.nombre === producto.nombre
            )
          );
          setSelectedProducts(productosSeleccionados);
        } catch (error) {
          console.log(error);
        }
      };

      getProductos();
    },
    [productos, tipoProducto]
  );

  const fetchTypeProducts = async tipoProducto => {
    var data = [];
    if (tipoProducto === "vehiculos") {
      data = getInventarioVehiculoService();
      console.log(data);
    } else if (tipoProducto === "repuestos") {
      data = getInventarioRepuestoService();
    }
    return data;
  };

  const bodyImg = rowData => {
    return <img src={rowData.img} alt={rowData.nombre} width="100" />;
  };

  const submit = () => {
    // Filtra los productos seleccionados para evitar duplicados
    const productosSeleccionadosUnicos = selectedProducts.filter(producto => {
      return !productos.find(
        p => p.id === producto.id && p.nombre === producto.nombre
      );
    });

    // Combina los productos existentes con los nuevos productos seleccionados
    const nuevosProductos = [...productos, ...productosSeleccionadosUnicos];
    setProductos(nuevosProductos);

    cerrarModal();
  };

  const bodyCantidad = (rowData) => {
    return (
      <div className="flex justify-center">
        <span className={`${rowData.cantidad > 0 ? 'bg-green-600' : 'bg-red-600'} px-4 text-white rounded-xl font-semibold`}>{rowData.cantidad}</span>
      </div>
    );
  }

  const colums = {
    vehiculos: [
      { field: "id", header: "ID" },
      { field: "nombre", header: "Nombre" },
      { field: "img", header: "Imagen", body: bodyImg },
      { field: "marca", header: "Marca" },
      { field: "modelo", header: "Modelo" },
      { field: "color", header: "Color" },
      { field: "precio", header: "Precio" },
      { field: "cantidad", header: "Cantidad", body: bodyCantidad}
    ],
    repuestos: [
      { field: "id", header: "ID" },
      { field: "nombre", header: "Nombre" },
      { field: "img", header: "Imagen", body: bodyImg },
      { field: "categoria", header: "Categoria" },
      { field: "fecha", header: "Fecha" },
      { field: "precio", header: "Precio" },
      { field: "cantidad", header: "Cantidad", body: bodyCantidad }
    ]
  };

  const isSelectable = (data) => data.cantidad > 0;

  const isRowSelectable = (event) => (event.data ? isSelectable(event.data) : true);

  return (
    <div className="text-center space-y-6">
      <DataTable
        value={productosInventario}
        className="p-datatable-sm"
        selectionMode="multiple"
        selection={selectedProducts}
        onSelectionChange={e => setSelectedProducts(e.value)}
        isDataSelectable={isRowSelectable}
        dataKey="id"
      >
        <Column selectionMode="multiple" headerStyle={{ width: "3rem" }} />
        {colums[tipoProducto].map((column, index) =>
          <Column
            key={index}
            field={column.field}
            header={column.header}
            body={column.body}
            filter
            sortable
          />
        )}
      </DataTable>

      <button
        onClick={submit}
        className="bg-green-600 p-4 text-white font-bold text-xl rounded-lg hover:bg-green-800"
      >
        Agregar
      </button>
    </div>
  );
};
