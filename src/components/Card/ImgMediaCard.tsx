import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {
  id: number;
  title: string;
  descr: string;
  img: string;
};

export default function ImgMediaCard({ id, title, descr, img }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/cafe/${id}`);
  };

  return (
    <div
      className="shadow-2xl rounded-2xl text-black text-center cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative w-full pb-[56.25%]">
        <img
          src={img}
          alt="logo"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="p-4">
        <div>{title}</div>
        <div>{descr}</div>
      </div>
      <div className="flex justify-center w-full p-4">
        <Button
          size="large"
          variant="outlined"
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        >
          Make Order
        </Button>
      </div>
    </div>
  );
}
