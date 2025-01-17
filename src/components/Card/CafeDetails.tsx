import { Link, useLocation, useParams } from "react-router-dom";
import { cafes } from "../../constants/constants";
import CafeMenu from "../CafeMenu/CafeMenu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect } from "react";

export default function CafeDetails() {
  const location = useLocation();

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

  return (
    <>
      <div className="p-8 text-[36px] text-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center p-8 cursor-pointer">
            <Link to={"/"}>
              <ArrowBackIcon />
            </Link>
          </div>
          <h1 className="m-0">{cafe.title}</h1>
        </div>
        {/* <div className="flex flex-col justify-center items-center">
          <img src={cafe.img} alt={cafe.title} className="rounded-2xl my-4" />
          <p>{cafe.descr}</p>
        </div> */}
        <CafeMenu id={cafe.id} />
      </div>
    </>
  );
}
