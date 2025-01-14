import { useParams } from "react-router-dom";
import { cafes } from "../../constants/constants";
import CafeMenu from "../CafeMenu/CafeMenu";

export default function CafeDetails() {
  const { id } = useParams();
  const cafe = cafes.find((cafe) => cafe.id === Number(id));

  if (!cafe) {
    return <div>Cafe not found</div>;
  }

  return (
    <div className="p-8 text-[36px] text-center">
      <h1 className="">{cafe.title}</h1>
      <img
        src={cafe.img}
        alt={cafe.title}
        className="rounded-2xl my-4 w-full"
      />
      <p>{cafe.descr}</p>
      <CafeMenu id={cafe.id} />
    </div>
  );
}
