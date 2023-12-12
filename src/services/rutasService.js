import axios from "axios";
import { apiUrl } from "./apiUrl";

export const getRutasData = async () => {
  const api = `${apiUrl}/rutas/rutas`;

  try{
    const response = await axios.get(api);
    return response.data;
  } catch(error){
    throw error;
  }
};

export const postRutasData = async (data) => {
  const api = `${apiUrl}/rutas/rutas/`;
  try{
    const response = await axios.post(api, data);
    return response.data;
  } catch(error){
    throw error;
  }
};

export const putRutasData = async (id, data) => {
  const api = `${apiUrl}/rutas/rutas/${id}/`;
  try{
    const response = await axios.put(api, data);
    return response.data;
  } catch(error){
    throw error;
  }
}