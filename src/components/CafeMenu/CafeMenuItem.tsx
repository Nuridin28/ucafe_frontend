import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useCartStore } from "../../app/cartStore";

type Props = {
  img: string;
  title: string;
  descr: string;
  price: number;
  type: string;
};

export default function CafeMenuItem({
  img,
  title: name,
  descr,
  price,
  type,
}: Props) {
  const { addItem, items } = useCartStore();

  const clickOrder = () => {
    addItem({ name, img, type, descr, price });
  };

  return (
    <div className="py-4 sm:py-8 px-4 sm:px-16 border border-gray rounded-2xl mt-4 shadow-lg">
      <div className="flex flex-col sm:flex-row gap-10">
        <img className="sm:w-1/2 w-full rounded-lg" src={img} alt="photo" />
        <div className="text-left text-base">
          <p className="text-grayDark font-bold">{name}</p>
          <p className="mt-2 text-grayDark font-medium">{descr}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p>{price} T</p>
        <div onClick={clickOrder} className="cursor-pointer">
          {items.some((item) => item.name === name) ? (
            <button>{items.filter((item) => item.name === name).length}</button>
          ) : (
            <div>
              <button>+</button>
              <AddShoppingCartIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
