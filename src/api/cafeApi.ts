import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
} from "../helpers/api.request.ts";
import { Cafe } from "../types/types.ts";

class CafeApi {
  constructor() {}

  async getAllCafes(): Promise<Cafe[]> {
    try {
      const cafes = await getRequest("cafes");
      return cafes;
    } catch (error) {
      console.error("Ошибка при получении кафе:", error);
      throw error;
    }
  }

  async createCafe(
    name: string,
    description: string,
    phone: string,
    logoUrl: string
  ) {
    try {
      const data = await postRequest("cafes", {
        name,
        description,
        phone,
        logoUrl,
      });

      console.log("Кафе создано:", data);
      return data;
    } catch (error) {
      console.error("Ошибка при создании кафе:", error);
      throw error;
    }
  }

  async updateCafe(
    cafeId: string,
    name: string,
    description: string,
    phone: string,
    logoUrl: string
  ) {
    try {
      const data = await putRequest(`cafes/${cafeId}`, {
        name,
        description,
        phone,
        logoUrl,
      });

      console.log("Кафе обновлено:", data);
      return data;
    } catch (error) {
      console.error("Ошибка при обновлении кафе:", error);
      throw error;
    }
  }

  async deleteCafe(cafeId: string) {
    try {
      await deleteRequest(`cafes/${cafeId}`);
      console.log("Кафе удалено");
    } catch (error) {
      console.error("Ошибка при удалении кафе:", error);
      throw error;
    }
  }
}

export const cafeApi = new CafeApi();
