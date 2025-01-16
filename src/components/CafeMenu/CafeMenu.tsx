import { cafes } from "../../constants/constants";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

type Props = { id: number };

export default function CafeMenu({ id }: Props) {
  const cafeMenu = cafes.find((cafe) => cafe.id === Number(id))?.menu;
  return (
    <div className="text-black text-3xl">
      {cafeMenu?.map((item) => (
        <div>
          <div className="flex items-center gap-40 justify-center">
            <p>{item.name}</p>
            <div className="flex items-center gap-4">
              <p>{item.price} тг</p>
              <div className="cursor-pointer">
                <AddShoppingCartIcon />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
