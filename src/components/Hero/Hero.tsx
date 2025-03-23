import Input from "../Common/Input";

export default function Hero() {
  const data = {
    name: "Nursultan",
  };

  return (
    <div className="p-6">
      <p>Hey, {data.name}, Good Afternoon!</p>
      <Input type="text" placeholder="Search dishes, restaurants" />
    </div>
  );
}
