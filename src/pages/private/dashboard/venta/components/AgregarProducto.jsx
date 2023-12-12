import React, { useState } from "react";

import { FaBarcode, FaClipboardList } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { FaCartPlus } from "react-icons/fa6";
import { ModalSelectorProductos } from "../../../../../components/modales/ModalSelectorProductos";

export const AgregarProducto = ({ setProductos, productos}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tipoProducto, setTipoProducto] = useState("vehiculos");

  const tipoProductos = [
    { label: "Vehiculos", value: "vehiculos" },
    { label: "Repuestos", value: "repuestos" },
  ];

  const abrirModal = () => {
    setModalVisible(true);
  };

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <>
    <ModalSelectorProductos visible={modalVisible} onClose={() => setModalVisible(false)} productos={productos} tipoProducto={tipoProducto} setProductos={setProductos}/>
    <div>
      <div className="flex flex-col xs:flex-row gap-4 py-4">
        <div className="p-inputgroup flex-1">
          <span className="p-inputgroup-addon">
            <FaClipboardList />
          </span>
          <select
            name="tipoProducto"
            id="tipoProducto"
            onChange={(e) => setTipoProducto(e.target.value)}
            className="border border-gray-300 w-full py-4 p-2.5 text-gray-400 text-md rounded-r-lg focus:outline-none focus:border-blue-500"
          >
            {tipoProductos.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="text-lg text-gray-600"
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <button
            onClick={abrirModal}
            className="bg-green-600 p-2 flex gap-2 items-center rounded-lg text-white text-2xl hover:bg-green-700 active:bg-green-400"
        >
            <FaCartPlus /> 
            <span>Agregar productos</span>
        </button>
        
      </div>
    </div>
    </>
  );
};
