import ImgMediaCard from "../Card/ImgMediaCard";
import { cafes } from "../../constants/constants";
type Props = {};

export default function CafeList({}: Props) {
  return (
    <div className="grid lg:grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr_1fr] grid-cols-[1fr] gap-8">
      {cafes.map((cafe) => (
        <ImgMediaCard
          id={cafe.id}
          title={cafe.title}
          descr={cafe.descr}
          img={cafe.img}
        />
      ))}
    </div>
  );
}
