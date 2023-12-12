import axios from "axios";
import { apiUrl } from "./apiUrl";

export const getRolesData = async () => {
  const api = `${apiUrl}/roles/roles`;

  try{
    const response = await axios.get(api);
    return response.data;
  } catch(error){
    throw error;
  }
};

export const postRolesData = async (data) => {
  const api = `${apiUrl}/roles/roles/`;
  try{
    const response = await axios.post(api, data);
    return response.data;
  } catch(error){
    throw error;
  }
};

export const putRolesData = async (id, data) => {
  const api = `${apiUrl}/roles/roles/${id}/`;
  try{
    const response = await axios.put(api, data);
    return response.data;
  } catch(error){
    throw error;
  }
}