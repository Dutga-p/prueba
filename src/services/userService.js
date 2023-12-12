import axios from "axios";
import { apiUrl } from "./apiUrl";

/* traer los datos de todos los usuarios */
export const getUserData = async () => {
  const api = `${apiUrl}/usuario/usuario`;

  try {
    const response = await axios.get(api);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postUserData = async (data) => {
  const api = `${apiUrl}usuario/usuario/`;
  try {
    const response = await axios.post(api, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUserData = async (id) => {
  const api = `${apiUrl}usuario/usuario/${id}/`;
  try {
    const response = await axios.delete(api);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const putUserData = async (id, data) => {
  console.log(data);
  console.log(id);
  const api = `${apiUrl}usuario/usuario/${id}/`;
  try {
    const response = await axios.put(api, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postLogin = async (data) => {
  const api = `${apiUrl}/api/login/`;
  try {
    const params = new URLSearchParams();
    params.append("username", data.usuario);
    params.append("password", data.password);

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }

    const response = await axios.post(api, params, config);
    return response;
  } catch (error) {
    throw error;
  }
};
