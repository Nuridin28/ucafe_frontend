import { cafes } from "../../constants/constants";
import CafeMenuItem from "./CafeMenuItem";
import CafeMenuLeft from "./CafeMenuLeft";

type Props = {
  id: number;
  category: string;
};

export default function CafeMenu({ id, category }: Props) {
  const cafeMenu = cafes.find((cafe) => cafe.id === Number(id))?.menu;

  const filteredMenu =
    category === "all"
      ? cafeMenu
      : cafeMenu?.filter((item) => item.type === category);

  return (
    <div className="flex p-8 rounded-xl mt-4">
      <div className="w-1/4 text-left hidden sm:flex">
        <CafeMenuLeft />
      </div>
      <div
        className={`text-black grid gap-2 w-full ${
          filteredMenu && filteredMenu.length === 1
            ? "grid-cols-1 "
            : "grid-cols-2"
        }`}
      >
        {filteredMenu?.map((item, index) => (
          <CafeMenuItem
            key={index}
            img={item.img}
            title={item.name}
            descr={item.descr}
            price={item.price}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
}
