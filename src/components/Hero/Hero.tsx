import hero from "../../assets/png/hero.jpg";
import { benefits } from "../../constants/constants";
import BenefitCard from "./BenefitCard";
type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="md:px-16 px-4 py-8 flex flex-col justify-between">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2 w-full">
          <img src={hero} alt="hero" />
        </div>
        <div className="md:w-1/2 w-full flex items-center md:items-start flex-col">
          <p className="md:text-7xl text-2xl font-bold text-grayDark ">
            Your Food court at university
          </p>
          <div className="border-2 rounded-lg text-center mt-20 border-yellow px-6 py-5 w-fit">
            <p className="text-grayDark text-xl font-semibold">Takeout</p>
            <p className="text-grayDark text-base ">Grab and go</p>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-11 mt-10">
        {benefits.map((benefit) => (
          <BenefitCard img={benefit.img} text={benefit.text} />
        ))}
      </div>
    </div>
  );
}
