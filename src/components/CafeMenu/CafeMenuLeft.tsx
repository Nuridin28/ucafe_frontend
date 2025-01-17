import { cafeMenuItems } from "../../constants/constants";

type Props = {};

export default function CafeMenuLeft({}: Props) {
  return (
    <div>
      <ul>
        {cafeMenuItems.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
