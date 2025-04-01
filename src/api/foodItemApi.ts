import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
} from "../helpers/api.request.ts";

class FoodItemApi {
  constructor() {}

  async getAllFoodItems() {
    try {
      const foodItems = await getRequest("food-items");
      return foodItems;
    } catch (error) {
      console.error("Ошибка при получении всех блюд:", error);
      throw error;
    }
  }

  async getFoodItemById(foodId: string) {
    try {
      const foodItem = await getRequest(`food-items/${foodId}`);
      return foodItem;
    } catch (error) {
      console.error("Ошибка при получении блюда:", error);
      throw error;
    }
  }

  async getFoodItemsByCafe(cafeId: string) {
    try {
      const foodItems = await getRequest(`food-items/cafe/${cafeId}`);
      return foodItems;
    } catch (error) {
      console.error(
        `Ошибка при получении блюд для кафе с ID ${cafeId}:`,
        error
      );
      throw error;
    }
  }

  async createFoodItem(
    cafeId: string,
    name: string,
    description: string,
    price: number,
    imageUrl: string
  ) {
    try {
      const data = await postRequest(
        "food-items",
        {
          cafe: cafeId,
          name,
          description,
          price,
          imageUrl,
        },
        true
      );

      console.log("Блюдо создано:", data);
      return data;
    } catch (error) {
      console.error("Ошибка при создании блюда:", error);
      throw error;
    }
  }

  async updateFoodItem(
    foodId: string,
    name: string,
    description: string,
    price: number,
    imageUrl: string
  ) {
    try {
      const data = await putRequest(
        `food-items/${foodId}`,
        {
          name,
          description,
          price,
          imageUrl,
        },
        true
      );

      console.log("Блюдо обновлено:", data);
      return data;
    } catch (error) {
      console.error("Ошибка при обновлении блюда:", error);
      throw error;
    }
  }

  async deleteFoodItem(foodId: string) {
    try {
      await deleteRequest(`food-items/${foodId}`, true);
      console.log("Блюдо удалено");
    } catch (error) {
      console.error("Ошибка при удалении блюда:", error);
      throw error;
    }
  }
}

export const foodItemApi = new FoodItemApi();
