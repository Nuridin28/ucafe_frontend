import hero from "../../assets/png/hero.jpg";
type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="px-16 py-8 flex items-center justify-between">
      <div className="w-1/2">
        <p className="text-7xl text-grayDark">Your Food court at university</p>
        <div className="border-2 rounded-lg text-center mt-20 border-yellow px-6 py-5 w-fit">
          <p className="text-grayDark text-xl font-semibold">Takeout</p>
          <p className="text-grayDark text-base ">Grab and go</p>
        </div>
      </div>
      <div className="w-1/2">
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
}
