import img from "../../../../assets/png/sandwitch.jpg";
import Button from "../../../Common/Button";
export default function OrderItem() {
  return (
    <div className="flex justify-between items-center bg-white shadow-md gap-4 p-4 rounded-lg">
      <div className="w-1/2 flex items-center">
        <img src={img} alt="" />
      </div>
      <div className="w-1/2 flex flex-col justify-between items-start">
        <p>NAME</p>
        <p>ORDER ID</p>
        <p>PRICE</p>
        <Button className="border border-primary text-primary hover:bg-primary hover:text-white">
          DETAILS
        </Button>
        <div className="mt-2 flex flex-wrap justify-between items-center gap-2">
          <Button className="border border-primary text-primary hover:bg-primary hover:text-white">
            DONE
          </Button>
          <Button className="border border-primary text-primary hover:bg-primary hover:text-white">
            CANCEL
          </Button>
        </div>
      </div>
    </div>
  );
}
