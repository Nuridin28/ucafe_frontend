import { useEffect, useState } from "react";
import img from "../../../../assets/png/sandwitch.jpg";
import { FoodItem, Order } from "../../../../types/types";
import { foodItemApi } from "../../../../api/foodItemApi";

type OrderItemProps = {
  order: Order;
};

type OrderFoodItem = FoodItem & {
  quantity: number;
  price: number;
};

export default function OrderItem({ order }: OrderItemProps) {
  const [foodItems, setFoodItems] = useState<OrderFoodItem[]>([]);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const items = await Promise.all(
          order.items.map(async (item) => {
            const foodItem = await foodItemApi.getFoodItemById(item.foodItem);
            return {
              ...foodItem,
              quantity: item.quantity,
              price: item.price,
            };
          })
        );
        setFoodItems(items);
      } catch (error) {
        console.error("Ошибка при получении блюд:", error);
      }
    };

    fetchFoodItems();
  }, [order]);

  return (
    <div>
      {foodItems.map((item) => (
        <div
          key={item._id}
          className="flex items-center mb-4 border p-4 rounded-lg shadow-md"
        >
          <img
            src={item.imageUrl || img}
            alt={item.name}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div className="flex-grow">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600">Количество: {item.quantity}</p>
            <p className="text-gray-600">Цена за штуку: {item.price}₸</p>
            <p className="text-gray-800 font-semibold">
              Общая сумма: {item.price * item.quantity}₸
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
