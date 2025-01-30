import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { cart } from "../../constants/constants";
type Props = {};

export default function Cart({}: Props) {
  const price = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="flex flex-col items-center my-8 gap-10 justify-center text-3xl px-80">
      <ShoppingCartCheckoutIcon />
      <div className="flex flex-col gap-4">
        <div>
          <ul>
            {cart.map((item, id) => (
              <li key={id} className="flex gap-4 items-center">
                <div className="w-32 h-32 flex items-center rounded-lg">
                  <img src={item.img} alt="img" />
                </div>
                {item.title} - {item.price}
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center mt-4">
            <p>Total:</p>
            {price}
          </div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
          Order
        </button>
      </div>
    </div>
  );
}
