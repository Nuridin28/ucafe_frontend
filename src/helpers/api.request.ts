import axios from "axios";

const API_URL:string = import.meta.env.VITE_API_URL;


export const postRequest = async (url:string, data: { [key: string]: string }) => {
    try {
        const response = await axios.post(`${API_URL}/${url}`, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
