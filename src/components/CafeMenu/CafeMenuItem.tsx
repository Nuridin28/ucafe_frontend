import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { cart } from "../../constants/constants";
type Props = {
  img: string;
  title: string;
  descr: string;
  price: number;
};

export default function CafeMenuItem({ img, title, descr, price }: Props) {
  const clickOrder = (
    img: string,
    title: string,
    descr: string,
    price: number
  ) => {
    cart.push({ img, title, descr, price });
    console.log(cart);
  };
  return (
    <div className="py-4 sm:py-8 px-4 sm:px-16 border border-gray rounded-2xl mt-4 shadow-lg">
      <div className="flex flex-col sm:flex-row gap-10">
        <img className="sm:w-1/2 w-full rounded-lg" src={img} alt="photo" />
        <div className="text-left text-base">
          <p className="text-grayDark font-bold">{title}</p>
          <p className="mt-2 text-grayDark font-medium">{descr}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p>{price} T</p>
        <div
          onClick={() => clickOrder(img, title, descr, price)}
          className="cursor-pointer"
        >
          <AddShoppingCartIcon />
        </div>
      </div>
    </div>
  );
}
