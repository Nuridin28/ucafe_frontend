import axios from "axios";

const API_URL: string = import.meta.env.VITE_API_URL;

const getHeaders = (withAuth: boolean): Record<string, string> => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (withAuth) {
    const token = localStorage.getItem("token");
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }
  return headers;
};

export const getRequest = async (url: string, withAuth: boolean = false) => {
  try {
    const response = await axios.get(`${API_URL}/${url}`, {
      headers: getHeaders(withAuth),
    });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const postRequest = async (
  url: string,
  data: Record<string, any>,
  withAuth: boolean = false
) => {
  try {
    const response = await axios.post(`${API_URL}/${url}`, data, {
      headers: getHeaders(withAuth),
    });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const putRequest = async (
  url: string,
  data: Record<string, any>,
  withAuth: boolean = false
) => {
  try {
    const response = await axios.put(`${API_URL}/${url}`, data, {
      headers: getHeaders(withAuth),
    });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteRequest = async (url: string, withAuth: boolean = false) => {
  try {
    const response = await axios.delete(`${API_URL}/${url}`, {
      headers: getHeaders(withAuth),
    });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

const handleError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    return error.response?.data || { message: "Ошибка сервера" };
  } else if (error instanceof Error) {
    return { message: error.message };
  } else {
    return { message: "Неизвестная ошибка" };
  }
};
