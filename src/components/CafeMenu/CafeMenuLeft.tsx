import { cafeMenuItems } from "../../constants/constants";

type Props = {};

export default function CafeMenuLeft({}: Props) {
  function capitalizeFirstLetter(str: string) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  return (
    <div>
      <ul>
        {cafeMenuItems.map((item, id) => (
          <li
            key={id}
            className="px-4 py-2 border-b-2 border-gray hover:border-grayDark"
          >
            <a href="">{capitalizeFirstLetter(item)}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
