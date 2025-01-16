import { Link, useParams } from "react-router-dom";
import { cafes } from "../../constants/constants";
import CafeMenu from "../CafeMenu/CafeMenu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Cart from "../Cart/Cart";

export default function CafeDetails() {
  const { id } = useParams();
  const cafe = cafes.find((cafe) => cafe.id === Number(id));

  if (!cafe) {
    return <div>Cafe not found</div>;
  }

  return (
    <>
      <Cart />
      <div className="p-8 text-[36px] text-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center p-8 cursor-pointer">
            <Link to={"/"}>
              <ArrowBackIcon />
            </Link>
          </div>
          <h1 className="m-0">{cafe.title}</h1>
        </div>
        <img
          src={cafe.img}
          alt={cafe.title}
          className="rounded-2xl my-4 w-full"
        />
        <p>{cafe.descr}</p>
        <CafeMenu id={cafe.id} />
      </div>
    </>
  );
}
