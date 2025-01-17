import { useEffect } from "react";
import ImgMediaCard from "../Card/ImgMediaCard";
import { cafes } from "../../constants/constants";
import { useNavigate, useLocation, Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type Props = {};

export default function CafeList({}: Props) {
  const navigate = useNavigate();
  const location = useLocation();

  const isCafePage = location.pathname === "/cafe";
  const displayedCafes = isCafePage ? cafes : cafes.slice(0, 3);

  const redirect = () => {
    navigate("/cafe");
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    window.scrollTo(0, 0);
    const resetScrollBehavior = () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
    return resetScrollBehavior;
  }, [location.pathname]);

  return (
    <div className="md:px-16 px-4 py-4">
      <div className="flex justify-between items-center">
        {isCafePage && (
          <div className="flex items-center p-8 cursor-pointer">
            <Link to={"/"}>
              <ArrowBackIcon />
            </Link>
          </div>
        )}
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
