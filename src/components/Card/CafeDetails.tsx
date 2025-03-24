import { Link, useLocation, useParams } from "react-router-dom";
import { cafes } from "../../constants/constants";
import CafeMenu from "../CafeMenu/CafeMenu";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
export default function CafeDetails() {
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    window.scrollTo(0, 0);
    const resetScrollBehavior = () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
    return resetScrollBehavior;
  }, [location.pathname]);

  const { id } = useParams();
  const cafe = cafes.find((cafe) => cafe.id === Number(id));

  if (!cafe) {
    return <div>Cafe not found</div>;
  }

  const categories = [
    "All",
    "Sandwich",
    "Pizza",
    "Tea",
    "Coffee",
    "Candy",
    "Others",
  ];

  return (
    <div className="">
      <div className="p-6 flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <div className="flex justify-center items-center bg-background rounded-full p-4">
            <Link to="..">
              <ChevronLeftIcon />
            </Link>
          </div>
          <div>Restaurant View</div>
        </div>
        <div className="flex justify-center items-center bg-background rounded-full p-4">
          <Link to="/cafes">
            <DotsHorizontalIcon />
          </Link>
        </div>
      </div>

      <div className="p-6 mt-6">
        <div className="text-black font-bold text-xl">{cafe.title}</div>
        <div className="text-gray font-normal text-sm mt-2">{cafe.descr}</div>
      </div>

      <div className="pl-6 overflow-x-auto scrollbar-none">
        <div className="flex gap-2 mt-8 flex-nowrap">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => setSelectedCategory(category.toLowerCase())}
              className={`cursor-pointer whitespace-nowrap transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md active:scale-95 ${
                category.toLowerCase() === selectedCategory
                  ? "bg-primary text-white shadow-lg"
                  : "text-black bg-transparent border-2 border-[#EDEDED]"
              } rounded-3xl px-5 py-3`}
              style={{ animation: `fadeIn 0.5s ease ${index * 0.05}s both` }}
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      <div>
        <CafeMenu id={Number(id)} category={selectedCategory} />
      </div>
    </div>
  );
}
