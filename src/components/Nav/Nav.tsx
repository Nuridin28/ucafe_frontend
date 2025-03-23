import { useState } from "react";
import person from "../../assets/svg/person.svg";
import { Link } from "react-router-dom";
import CartIcon from "../../assets/icons/cart.icon";
import { useCartStore } from "../../app/cartStore";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const count = useCartStore((state) => state.items.length);

  return (
    <div className="flex justify-between items-center md:px-16 px-4 py-4 relative">
      <div className="flex items-center justify-between w-full">
        <button
          className="flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div
            className={`h-1 w-6 rounded bg-gray transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-6 rounded bg-gray transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`h-1 w-6 rounded bg-gray transform transition-transform duration-300 ease-in-out ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          ></div>
        </button>
        <div className="flex gap-2 bg-darkBlue rounded-full p-3 relative">
          <Link to="/cart" className="flex items-center gap-2 text-white">
            <CartIcon />
          </Link>

          <div className="bg-orange text-base font-bold text-white px-2 py-[3px] rounded-full absolute top-[-10%] right-0 h-6 w-6 flex justify-center items-center">
            {count}
          </div>
        </div>

        {isOpen && (
          <div className="absolute top-full left-4 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-4">
            <Link
              onClick={logout}
              to="/auth/login"
              className="flex items-center gap-2"
            >
              <img src={person} alt="profile" className="h-6 w-6" />
              Logout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
