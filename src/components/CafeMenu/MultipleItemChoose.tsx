import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

type MultipleItemChooseProps = {
  count: number;
  handleCountChange: (value: string) => void;
};
export default function MultipleItemChoose({
  count,
  handleCountChange,
}: MultipleItemChooseProps) {
  return (
    <div className="bg-dark flex text-white items-center gap-4 rounded-full px-3 py-2">
      <div className="p-2" onClick={() => handleCountChange("minus")}>
        <MinusIcon />
      </div>
      <div>{count}</div>
      <div className="p-2" onClick={() => handleCountChange("plus")}>
        <PlusIcon />
      </div>
    </div>
  );
}
