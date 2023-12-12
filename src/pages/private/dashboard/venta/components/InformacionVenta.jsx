import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { FaAddressCard, FaRegIdCard } from "react-icons/fa";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { postVentasData } from "../../../../../services/ventasService";
import { getSucursalData } from "../../../../../services/sucuralService";

export const InformacionVenta = ({
  setVentaCreada,
  generarVenta,
  setInfoVenta
}) => {
  const [sucursales, setSucursales] = useState([]);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const metodoPago = [
    { label: "Efectivo", value: "efectivo" },
    { label: "Tarjeta", value: "tarjeta" },
    { label: "Transferencia", value: "transferencia" },
    { label: "Cheque", value: "cheque" }
  ];

  useEffect(() => {
    fetchSucursales();
  }, []);

  const fetchSucursales = async () => {
    try {
      const response = await getSucursalData();
      const sucursales = response.map(sucursal => {
        return {
          label: sucursal.nombre,
          value: sucursal.sucursalId
        };
      });
      setSucursales(sucursales);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async data => {
    generarVenta(data);
  };

  // Get current date in the format YYYY-MM-DD
  const currentDate = new Date().toLocaleDateString("en-CA");
  const idVendedor = "1";

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputText
          readOnly
          placeholder="Fecha actual"
          value={currentDate}
          className="w-full"
          {...register("fechaActual", {
            required: "Este campo es requerido"
          })}
        />
        {errors.fechaActual &&
          <p className="text-red-500">
            {errors.fechaActual.message}
          </p>}

        <div className="hidden">
          <span className="p-inputgroup-addon">
            <FaAddressCard />
          </span>
          <InputText
            readOnly
            value={idVendedor}
            placeholder="codigo vendedor"
            {...register("codigoVendedor", {
              required: "Este campo es requerido"
            })}
          />
        </div>
        {errors.codigoVendedor &&
          <p className="text-red-500">
            {errors.codigoVendedor.message}
          </p>}

        <div className="grid grid-cols-2 gap-4">
          <InputText
            placeholder="Nombre cliente"
            {...register("nombreCliente", {
              required: "Este campo es requerido"
            })}
          />

          <InputText
            placeholder="Apellido cliente"
            {...register("apellidoCliente", {
              required: "Este campo es requerido"
            })}
          />
        </div>

        <div className="p-inputgroup flex-1">
          <span className="p-inputgroup-addon">
            <FaRegIdCard />
          </span>
          <InputText
            placeholder="# identificacion"
            {...register("identificacion", {
              required: "Este campo es requerido",
              pattern: {
                value: /^\d+$/,
                message: "Ingresa solo números"
              }
            })}
          />
        </div>
        {errors.identificacion &&
          <p className="text-red-500">
            {errors.identificacion.message}
          </p>}

        <div className="p-inputgroup flex-1">
          <span className="p-inputgroup-addon">
            <BsFillTelephonePlusFill />
          </span>
          <InputText
            placeholder="Telefono"
            {...register("telefono", {
              required: "Este campo es requerido",
              pattern: {
                value: /^\d+$/,
                message: "Ingresa solo números"
              }
            })}
          />
        </div>
        {errors.telefono &&
          <p className="text-red-500">
            {errors.telefono.message}
          </p>}

        <div className="p-inputgroup flex-1">
          <span className="p-inputgroup-addon">
            <MdEmail />
          </span>
          <InputText
            placeholder="Correo"
            {...register("correo", { required: "Este campo es requerido" })}
          />
        </div>
        {errors.correo &&
          <p className="text-red-500">
            {errors.correo.message}
          </p>}

        <div>
          <label htmlFor="tipoPago" className="text-lg text-gray-600">
            Tipo de pago
          </label>
          <select
            name="metodoPago"
            id="metodoPago"
            {...register("metodoPago", { required: "Este campo es requerido" })}
            className="border border-gray-300 w-full py-4 p-2.5 text-gray-400 text-md rounded-lg focus:outline-none focus:border-blue-500"
          >
            {metodoPago.map(option =>
              <option
                key={option.value}
                value={option.value}
                className="text-lg text-gray-600"
              >
                {option.label}
              </option>
            )}
          </select>
          {errors.tipoPago &&
            <p className="text-red-500">
              {errors.tipoPago.message}
            </p>}
        </div>

        <div>
          <label htmlFor="sucursal" className="text-lg text-gray-600">
            Sucursal
          </label>
          <select
            name="sucursal"
            id="sucursal"
            {...register("sucursal", { required: "Este campo es requerido" })}
            className="border border-gray-300 w-full py-4 p-2.5 text-gray-400 text-md rounded-lg focus:outline-none focus:border-blue-500"
          >
            {sucursales.map(option =>
              <option
                key={option.value}
                value={option.value}
                className="text-lg text-gray-600"
              >
                {option.label}
              </option>
            )}
          </select>
          {errors.sucursal &&
            <p className="text-red-500">
              {errors.sucursal.message}
            </p>}
        </div>

        <div className="w-full flex justify-center items-center">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 text-2xl rounded"
          >
            Generar factura
          </button>
        </div>
      </form>
    </div>
  );
};
