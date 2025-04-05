import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav/Nav";
import { orderApi } from "../../api/orderApi";

const AdminPage = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const navigate = useNavigate();

  const [statsCards, setStatsCards] = useState([
    { value: "0", label: "RUNNING ORDERS", route: "running-orders" },
    { value: "0", label: "ORDER REQUEST", route: "order-request" },
    { value: "0", label: "READY", route: "completed-orders" },
    { value: "0", label: "CANCELLED", route: "cancelled" },
  ]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const orders = await orderApi.getAllOrders();

        const orderStats = {
          new: 0,
          in_progress: 0,
          done: 0,
          cancelled: 0,
        };

        orders.forEach((order) => {
          if (order.status in orderStats) {
            orderStats[order.status]++;
          }
        });

        setStatsCards([
          {
            value: orderStats.in_progress.toString(),
            label: "RUNNING ORDERS",
            route: "running-orders",
          },
          {
            value: orderStats.new.toString(),
            label: "ORDER REQUEST",
            route: "order-request",
          },
          {
            value: orderStats.done.toString(),
            label: "READY",
            route: "completed-orders",
          },
          {
            value: orderStats.cancelled.toString(),
            label: "CANCELLED",
            route: "cancelled",
          },
        ]);
      } catch (error) {
        console.error("Ошибка при получении заказов:", error);
      }
    }

    fetchOrders();
  }, []);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    navigate(`/admin/${page}`);
  };

  const handleOrderPageChange = (route: string) => {
    navigate(`/admin/${route}`);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {statsCards.map((card, index) => (
          <div
            onClick={() => handleOrderPageChange(card.route)}
            key={index}
            className="w-64 h-32 bg-white shadow-md m-4 p-4 rounded-lg cursor-pointer"
          >
            <div className="text-3xl font-bold">{card.value}</div>
            <div className="text-lg">{card.label}</div>
          </div>
        ))}
      </div>

      <Nav currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default AdminPage;
