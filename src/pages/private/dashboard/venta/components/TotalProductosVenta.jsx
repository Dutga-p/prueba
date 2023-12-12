import React from "react";
import { FaCartPlus, FaRegEdit } from "react-icons/fa";

export const TotalProductosVenta = ({ productos }) => {
  const totalProductos = productos.length;
  const totalPagar = productos.reduce((acc, product) => acc + ((product.subtotalVenta || product.precio) || 0), 0);

  return (
    <section className="bg-gray-300 rounded-lg text-center">
      <div className="p-4 flex flex-col xl:flex-row justify-between gap-2">
        <div className="w-full lg:w-auto mb-4 lg:mb-0">
          <p className="font-semibold">Articulos:</p>
          <p>{totalProductos}</p>
        </div>

        <div className="w-full lg:w-auto">
          <p className="font-semibold">Total a pagar:</p>
          <p className="text-center font-bold text-xl text-green-800">{totalPagar}</p>
        </div>
      </div>
    </section>
  );
};
