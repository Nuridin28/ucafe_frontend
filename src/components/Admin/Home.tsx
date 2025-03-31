import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav/Nav";

const AdminPage = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const navigate = useNavigate();

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    navigate(`/${page}`);
  };

  const statsCards = [
    { value: "20", label: "RUNNING ORDERS" },
    { value: "05", label: "ORDER REQUEST" },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {statsCards.map((card, index) => (
          <div
            key={index}
            className="w-64 h-32 bg-white shadow-md m-4 p-4 rounded-lg"
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
