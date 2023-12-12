import React, { useEffect, useState } from "react";

import { GiShop } from "react-icons/gi";

import { FaCartPlus } from "react-icons/fa6";

import { TablaProductosVenta } from "./components/TablaProductosVenta";
import { TotalProductosVenta } from "./components/TotalProductosVenta";
import { InformacionVenta } from "./components/InformacionVenta";
import { AgregarProducto } from "./components/AgregarProducto";
import { ModalError } from "../../../../components/modales/ModalError";

export const Venta = () => {
  const [productos, setProductos] = useState([]);
  const [ventaCreada, setVentaCreada] = useState(false);
  const [modalError, setModalError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const generarVenta = data => {
    if (productos.length === 0) {
      setErrorMessage("No hay productos agregados");
      setModalError(true);
      return;
    }

    console.log(data);
    console.log("Generando venta");
  };

  const handleCantidadChange = (rowData, change) => {
    console.log(rowData);
    setProductos(prevProductos =>
      prevProductos.map(
        product =>
          product.id === rowData.id && product.nombre === rowData.nombre
            ? {
                ...product,
                cantidadVenta: Math.max(
                  (product.cantidadVenta || 1) + change,
                  1
                ),
                subtotalVenta:
                  Math.max((product.cantidadVenta || 1) + change, 1) *
                  product.precio
              }
            : product
      )
    );
  };

  const handleDeleteProduct = rowData => {
    setProductos(prevProductos =>
      prevProductos.filter(
        product =>
          product.id !== rowData.id || product.nombre !== rowData.nombre
      )
    );
  };

  return (
    <div className="space-y-6">
      {modalError &&
        <ModalError
          errorMessage={errorMessage}
          visible={modalError}
          onClose={() => setModalError(false)}
        />}
      <div>
        <header className="text-center py-2 my-4 text-5xl w-full font-bold text-white">
          <h1>SISTEMA VENTAS</h1>
        </header>
        <div className="flex flex-col xl:flex-row gap-4">
          <section
            className={` xl:w-3/6 bg-white rounded-md shadowContainer card p-6`}
          >
            <header className="flex text-2xl font-semibold gap-2 py-2">
              <p>POS Terminal </p>
              <GiShop />
            </header>
            <hr />

            <main>
              <AgregarProducto
                setProductos={setProductos}
                productos={productos}
              />
              <hr />

              <section className="space-y-2 py-2">
                <p className="font-semibold text-lg">
                  Lista de productos agregados
                </p>
                <TablaProductosVenta
                  productos={productos}
                  onCantidadChange={handleCantidadChange}
                  onDeleteProduct={handleDeleteProduct}
                />
                <TotalProductosVenta productos={productos} />
              </section>
            </main>
          </section>

          <section
            className={`xl:w-3/6 bg-white rounded-md shadowContainer card p-6 h-full`}
          >
            <header className="flex text-2xl font-semibold gap-2 py-2">
              <p>Datos Cliente </p>
              <GiShop />
            </header>
            <hr />
            <main className="py-4">
              <InformacionVenta
                setVentaCreada={setVentaCreada}
                generarVenta={generarVenta}
              />
            </main>
          </section>
        </div>
      </div>
    </div>
  );
};
