import axios from "axios";
import { apiUrl } from "./apiUrl";

export const getVentasData = async () => {
  const api = `${apiUrl}/detalleventa/venta`;

  try {
    const response = await axios.get(api);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postVentasData = async (data) => {
  const api = `${apiUrl}/detalleventa/venta/`;
  try {
    const response = await axios.post(api, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const ventasGeneral = async (data) => {
  const api = `${apiUrl}/api/totales/`;
  try {
    const response = await axios.get(api, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};