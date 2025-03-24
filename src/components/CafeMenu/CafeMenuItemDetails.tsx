import { useParams } from "react-router-dom";

export default function CafeMenuItemDetails() {
  const id = useParams();
  console.log(id);
  return <div>CafeMenuItemDetails</div>;
}
