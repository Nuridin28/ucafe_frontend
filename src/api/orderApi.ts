import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
} from "../helpers/api.request.ts";
import { Order } from "../types/types.ts";

class OrderApi {
  constructor() {}

  async getAllOrders(): Promise<Order[]> {
    try {
      const orders = await getRequest("orders", true);
      return orders;
    } catch (error) {
      console.error("Ошибка при получении заказов:", error);
      throw error;
    }
  }

  async getOrderById(orderId: string) {
    try {
      const order = await getRequest(`orders/${orderId}`, true);
      return order;
    } catch (error) {
      console.error("Ошибка при получении заказа:", error);
      throw error;
    }
  }

  async getOrdersByCafe(cafeId: string) {
    try {
      const orders = await getRequest(`orders/cafe/${cafeId}`, true);
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
      const data = await postRequest(
        "orders",
        { cafeId, items, totalPrice },
        true
      );

      console.log("Заказ создан:", data);
      return data;
    } catch (error) {
      console.error("Ошибка при создании заказа:", error);
      throw error;
    }
  }

  async updateOrderStatus(orderId: string, status: string) {
    try {
      const data = await putRequest(`orders/${orderId}`, { status }, true);

      console.log("Статус заказа обновлён:", data);
      return data;
    } catch (error) {
      console.error("Ошибка при обновлении статуса заказа:", error);
      throw error;
    }
  }

  async deleteOrder(orderId: string) {
    try {
      await deleteRequest(`orders/${orderId}`, true);
      console.log("Заказ удалён");
    } catch (error) {
      console.error("Ошибка при удалении заказа:", error);
      throw error;
    }
  }

  async getCafeOrders(cafeId: string, orderStatus: string): Promise<Order[]> {
    try {
      const orders = await getRequest(
        `orders/cafe/${cafeId}/status/${orderStatus}`,
        true
      );
      return orders;
    } catch (error) {
      console.error("Ошибка при получении заказов кафе:", error);
      throw error;
    }
  }
}

export const orderApi = new OrderApi();
