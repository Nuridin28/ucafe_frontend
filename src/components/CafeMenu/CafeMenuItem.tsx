import { useCartStore } from "../../app/cartStore";
import { PlusIcon } from "@radix-ui/react-icons";
import MultipleItemChoose from "./MultipleItemChoose";
import { Link } from "react-router-dom";

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
  const { addItem, removeItem, items } = useCartStore();

  const itemCount = items.filter((item) => item.name === name).length;

  const handleCountChange = (change: string) => {
    if (change === "minus") {
      removeItem(name);
    } else {
      addItem({ name, img, type, descr, price });
    }
  };

  return (
    <div className="py-1 sm:py-8 w-full  px-2 sm:px-16 rounded-2xl mt-4 flex flex-col justify-between h-full shadow-2xl">
      <Link to={"details/" + 2}>
        <div className="flex flex-col sm:flex-row sm:gap-10 gap-2">
          <div className="relative w-full pb-[65%]">
            <img
              src={img}
              alt="logo"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="text-left text-base">
            <p className="text-grayDark font-bold text-sm">{name}</p>
          </div>
        </div>
      </Link>

      <div className="flex flex-col items-center gap-4 mt-4">
        <p>{price} T</p>
        <div className="cursor-pointer">
          {itemCount > 0 ? (
            <MultipleItemChoose
              count={itemCount}
              handleCountChange={handleCountChange}
            />
          ) : (
            <div
              onClick={() => handleCountChange("plus")}
              className="bg-primary flex items-center justify-center rounded-full p-2 text-white"
            >
              <PlusIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
