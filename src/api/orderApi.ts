import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
} from "../helpers/api.request.ts";

class OrderApi {
  constructor() {}

  async getAllOrders() {
    try {
      const orders = await getRequest("orders");
      return orders;
    } catch (error) {
      console.error("Ошибка при получении заказов:", error);
      throw error;
    }
  }

  async getOrdersByCafe(cafeId: string) {
    try {
      const orders = await getRequest(`orders/cafe/${cafeId}`);
      return orders;
    } catch (error) {
      console.error("Ошибка при получении заказов кафе:", error);
      throw error;
    }
  }

  async createOrder(
    cafeId: string,
    items: { foodItemId: string; quantity: number }[],
    totalPrice: number
  ) {
    try {
      const data = await postRequest("orders", { cafeId, items, totalPrice });

      console.log("Заказ создан:", data);
      return data;
    } catch (error) {
      console.error("Ошибка при создании заказа:", error);
      throw error;
    }
  }

  async updateOrderStatus(orderId: string, status: string) {
    try {
      const data = await putRequest(`orders/${orderId}/status`, { status });

      console.log("Статус заказа обновлён:", data);
      return data;
    } catch (error) {
      console.error("Ошибка при обновлении статуса заказа:", error);
      throw error;
    }
  }

  async deleteOrder(orderId: string) {
    try {
      await deleteRequest(`orders/${orderId}`);
      console.log("Заказ удалён");
    } catch (error) {
      console.error("Ошибка при удалении заказа:", error);
      throw error;
    }
  }
}

export const orderApi = new OrderApi();
