import axios from "axios";
import { apiUrl } from "./apiUrl";

export const getSucursalData = async () => {
    const api = `${apiUrl}/api/sucursal`;
  
    try{
      const response = await axios.get(api);
      return response.data;
    } catch(error){
      throw error;
    }
  };
  
  export const postSucursalData = async (data) => {
    const api = `${apiUrl}/api/sucursal/`;
    try{
      const response = await axios.post(api, data);
      return response.data;
    } catch(error){
      throw error;
    }
  };

  export const putSucursalesData = async (id, data) => {
    const api = `${apiUrl}/api/sucursal/${id}/`;
    try{
      const response = await axios.put(api, data);
      return response.data;
    } catch(error){
      throw error;
    }
  }