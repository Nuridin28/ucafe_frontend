import { useEffect, useState } from "react";
import { orderApi } from "../../../../api/orderApi";
import { Order } from "../../../../types/types";
import OrderItem from "../Order/OrderItem";

export default function RunningOrders() {
  const [orders, setOrders] = useState<Order[]>([]);

  const getOrders = async () => {
    try {
      const orders = await orderApi.getCafeOrders(
        "67e3845dc81465eeef78a96e",
        "new"
      );
      setOrders(orders);
    } catch (error) {
      console.error("Ошибка при получении заказов:", error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {}, [orders]);

  return (
    <div>
      {orders.length > 0 ? (
        <div className="flex flex-wrap justify-center">
          {orders.map((order) => (
            <OrderItem key={order._id} order={order} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl font-bold">Нет активных заказов</h1>
        </div>
      )}
    </div>
  );
}
