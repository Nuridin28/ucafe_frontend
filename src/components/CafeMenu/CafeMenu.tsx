import { cafes } from "../../constants/constants";

type Props = { id: number };

export default function CafeMenu({ id }: Props) {
  const cafeMenu = cafes.find((cafe) => cafe.id === Number(id))?.menu;
  return (
    <div className="text-black text-3xl">
      {cafeMenu?.map((item) => (
        <div>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}
