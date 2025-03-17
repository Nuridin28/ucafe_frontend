import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useCartStore } from "../../app/cartStore";
import { IMenuItem } from "../../types/types";

export default function Cart() {
  const items = useCartStore((state) => state.items);

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
    <div className="flex flex-col items-center my-8 gap-10 justify-center text-3xl lg:px-80 px-10">
      <ShoppingCartCheckoutIcon />
      <div className="flex flex-col gap-4 w-full">
        <div>
          <ul>
            {groupedItems.map((item, id) => (
              <li key={id} className="flex gap-4 items-center">
                <div className="w-32 h-32 flex items-center rounded-lg">
                  <img src={item.img} alt="img" />
                </div>
                {item.name} - {item.price} T - {item.quantity} шт.
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center mt-4">
            <p>Total:</p>
            <p>{totalPrice} T</p>
          </div>
        </div>

        {groupedItems.length > 0 ? (
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
            Order
          </button>
        ) : (
          <p className="text-orange font-bold">Cart is empty</p>
        )}
      </div>
    </div>
  );
}
