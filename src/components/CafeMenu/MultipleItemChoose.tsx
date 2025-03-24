import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

type MultipleItemChooseProps = {
  count: number;
  handleCountChange: (value: string) => void;
  iconStyle?: string;
};
export default function MultipleItemChoose({
  count,
  handleCountChange,
  iconStyle,
}: MultipleItemChooseProps) {
  return (
    <div className="bg-dark flex text-white items-center gap-4 rounded-full px-3 py-2">
      <div
        className={`p-2 ${iconStyle}`}
        onClick={() => handleCountChange("minus")}
      >
        <MinusIcon />
      </div>
      <div>{count}</div>
      <div
        className={`p-2 ${iconStyle}`}
        onClick={() => handleCountChange("plus")}
      >
        <PlusIcon />
      </div>
    </div>
  );
}
