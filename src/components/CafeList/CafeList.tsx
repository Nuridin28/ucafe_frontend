import ImgMediaCard from "../Card/ImgMediaCard";
import { cafes } from "../../constants/constants";
import { useNavigate, useLocation } from "react-router-dom";

type Props = {};

export default function CafeList({}: Props) {
  const navigate = useNavigate();
  const location = useLocation();

  const isCafePage = location.pathname === "/cafe";
  const displayedCafes = isCafePage ? cafes : cafes.slice(0, 3);

  const redirect = () => {
    navigate("/cafe");
  };

  return (
    <div className="md:px-16 px-4 py-4">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold">Restaurants</p>
        {!isCafePage && (
          <button
            onClick={redirect}
            className="text-gray bg-lightBlue text-base px-6 py-3 rounded-xl hover:bg-slate-200"
          >
            Show all
          </button>
        )}
      </div>
      <div className="mt-4 grid lg:grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr_1fr] grid-cols-[1fr] gap-8">
        {displayedCafes.map((cafe) => (
          <ImgMediaCard
            key={cafe.id}
            id={cafe.id}
            title={cafe.title}
            descr={cafe.descr}
            img={cafe.img}
          />
        ))}
      </div>
    </div>
  );
}
