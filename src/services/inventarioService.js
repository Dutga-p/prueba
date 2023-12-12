import axios from "axios";
import { apiUrl } from "./apiUrl";

export const getInventarioVehiculoService = async () => {
    const api = `${apiUrl}/api/inventariovehiculo`;
  
    try{
      const response = await axios.get(api);

      const data = response.data.map((vehiculo) => {
        return {
          id: vehiculo.vehiculo.vehiculoId,
          nombre: vehiculo.vehiculo.nombre,
          img: vehiculo.vehiculo.img,
          modelo: vehiculo.vehiculo.modelo,
          color: vehiculo.vehiculo.color,
          marca: vehiculo.vehiculo.marca,
          precio: vehiculo.vehiculo.precio,
          cantidad: vehiculo.cantidad,
        };
      });
      console.log(response.data)
      return data;
    } catch(error){
      throw error;
    }
  };

  export const getInventarioRepuestoService = async () => {
    const api = `${apiUrl}/api/inventariorepuesto`;
  
    try{
      const response = await axios.get(api);
      console.log(response.data)

      const data = response.data.map((repuesto) => {
        return {
            id: repuesto.repuesto.repuestoId,
            nombre: repuesto.repuesto.descripcion,
            img: repuesto.repuesto.img,
            fecha: repuesto.repuesto.fechaFabriacion,
            categoria: repuesto.repuesto.nombreRepuesto.tipoRepuesto,
            precio: repuesto.repuesto.precio,
            cantidad: repuesto.cantidad,
        };
      });

      return data;
    } catch(error){
      throw error;
    }
  };