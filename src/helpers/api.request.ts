import axios from "axios";

const API_URL: string = import.meta.env.VITE_API_URL;

export const postRequest = async (url: string, data: { [key: string]: string }) => {
    try {
        console.log(API_URL);
        const response = await axios.post(`${API_URL}/${url}`, data);

        if (response.status >= 200 && response.status < 300) {
            return response.data;
        } else {
            throw new Error(`Ошибка с кодом: ${response.status}`);
        }
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            return error.response?.data || { message: "Что-то пошло не так" };
        } else if (error instanceof Error) {
            return { message: error.message };
        } else {
            return { message: "Что-то пошло не так" };
        }
    }
};
