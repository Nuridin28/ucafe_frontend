type Props = {
  img: string;
  text: string;
};

export default function BenefitCard({ img, text }: Props) {
  return (
    <div className="flex gap-4 items-center">
      <img src={img} alt="" />
      <p>{text}</p>
    </div>
  );
}
