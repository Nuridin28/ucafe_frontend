import { cafes } from "../../constants/constants";
import CafeMenuItem from "./CafeMenuItem";

import CafeMenuLeft from "./CafeMenuLeft";

type Props = { id: number };

export default function CafeMenu({ id }: Props) {
  const cafeMenu = cafes.find((cafe) => cafe.id === Number(id))?.menu;
  return (
    <div className="flex p-8 rounded-xl mt-4">
      <div className="w-1/4 text-left hidden sm:flex">
        <CafeMenuLeft />
      </div>
      <div className="text-black text-3xl sm:w-1/2 w-full">
        {cafeMenu?.map((item, id) => (
          <CafeMenuItem
            key={id}
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
