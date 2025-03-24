import { useCartStore } from "../../app/cartStore";
import { IMenuItem } from "../../types/types";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import MultipleItemChoose from "../CafeMenu/MultipleItemChoose";
import { Link } from "react-router-dom";

export default function Cart() {
  const items = useCartStore((state) => state.items);

  const { removeItem, addItem } = useCartStore();

  const handleItemCountChange = (item: IMenuItem, change: string) => {
    if (change === "minus") {
      removeItem(item.name);
    } else {
      addItem({
        name: item.name,
        img: item.img,
        type: item.type,
        descr: item.descr,
        price: item.price,
      });
    }
  };

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * (item.quantity ?? 1),
    0
  );

  const group = (items: IMenuItem[]) => {
    const groupedItems: IMenuItem[] = [];

    items.forEach((item) => {
      const found = groupedItems.find((i) => i.name === item.name);
      if (found) {
        if (found.quantity) {
          found.quantity += item.quantity ?? 1;
        } else {
          found.quantity = item.quantity ?? 1;
        }
      } else {
        groupedItems.push({ ...item, quantity: item.quantity ?? 1 });
      }
    });

    return groupedItems;
  };

  const groupedItems = group(items);

  return (
    <div className="flex flex-col gap-10 text-3xl lg:px-80 px-5 bg-dark text-white h-screen">
      <div className="flex items-center mt-4 justify-between">
        <div className="flex gap-4 items-center">
          <div className="flex justify-center items-center rounded-full p-2 bg-[#FFFFFF] bg-opacity-10 w-fit">
            <Link to={".."}>
              <ChevronLeftIcon width={40} height={40} />
            </Link>
          </div>
          <p>Cart</p>
        </div>

        {/* <div>DONE</div> */}
      </div>

      <div className="flex flex-col gap-4 w-full">
        <div>
          <ul>
            {groupedItems.map((item, id) => (
              <div key={id} className="flex gap-4 mt-4">
                <div className="relative w-[160px] h-[90px] flex-shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={item.img}
                    alt="item"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-base font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.price} T</p>
                  <div className="mt-2">
                    <MultipleItemChoose
                      count={item.quantity || 0}
                      handleCountChange={(change) =>
                        handleItemCountChange(item, change)
                      }
                      iconStyle="bg-[#FFFFFF] bg-opacity-10 rounded-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </ul>

          <div className="flex justify-between items-center mt-4">
            <p>Total:</p>
            <p>{totalPrice} T</p>
          </div>
        </div>

        {groupedItems.length > 0 ? (
          <button className="bg-primary text-white px-4 py-2 rounded mt-4">
            Order
          </button>
        ) : (
          <p className="text-primary font-bold">Cart is empty</p>
        )}
      </div>
    </div>
  );
}
