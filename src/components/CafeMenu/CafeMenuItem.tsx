import { useCartStore } from "../../app/cartStore";
import { PlusIcon } from "@radix-ui/react-icons";
import MultipleItemChoose from "./MultipleItemChoose";

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
    <div className="py-4 sm:py-8 px-4 sm:px-16 border border-gray rounded-2xl mt-4 shadow-lg flex flex-col justify-between h-full">
      <div className="flex flex-col sm:flex-row sm:gap-10 gap-2">
        <img className="sm:w-1/2 w-full rounded-lg" src={img} alt="photo" />
        <div className="text-left text-base">
          <p className="text-grayDark font-bold text-sm">{name}</p>
        </div>
      </div>

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
