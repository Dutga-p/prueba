import axios from "axios";
import { apiUrl } from "./apiUrl";

export const getVehiculosData = async () => {
  const api = `${apiUrl}/vehiculo/vehiculo`;

  try{
    const response = await axios.get(api);
    return response;
  } catch(error){
    throw error;
  }
};

export const getRepuestosData = async () => {
    const api = `${apiUrl}/repuesto/repuesto`;
  
    try{
      const response = await axios.get(api);
      return response;
    } catch(error){
      throw error;
    }
  };

  export const getCategoriasData = async () => {
    const api = `${apiUrl}/categoriarespuesto/categoriarespuesto`;
  
    try{
      const response = await axios.get(api);
      return response.data;
    } catch(error){
      throw error;
    }
  }

  export const postRepuestoData = async (data) => {
    const api = `${apiUrl}/repuesto/repuesto/`;
  
    try{
      const response = await axios.post(api, data);
      return response.data;
    } catch(error){
      throw error;
    }
  }

  export const postVehiculoData = async (data) => {
    const api = `${apiUrl}/vehiculo/vehiculo/`;
  
    try{
      const response = await axios.post(api, data);
      return response.data;
    } catch(error){
      throw error;
    }
  }

  export const putRepuestoData = async (id, data) => {
    const api = `${apiUrl}/repuesto/repuesto/${id}/`;
  
    try{
      const response = await axios.put(api, data);
      return response.data;
    } catch(error){
      throw error;
    }
  }

  export const putVehiculoData = async (id, data) => {
    const api = `${apiUrl}/vehiculo/vehiculo/${id}/`;
  
    try{
      const response = await axios.put(api, data);
      return response.data;
    } catch(error){
      throw error;
    }
  }