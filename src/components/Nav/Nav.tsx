import { useState } from "react";
import person from "../../assets/svg/person.svg";
import cart from "../../assets/svg/cart.svg";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center md:px-16 px-4 py-4 border-b border-lightGray relative">
      <div className="text-lg font-bold text-gray">UCAFE</div>
      <div className="flex items-center gap-12">
        <div className="flex gap-2">
          <Link to="/cart" className="flex items-center gap-2">
            <img src={cart} alt="cart" className="h-6 w-6" />0
          </Link>
        </div>

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

        {isOpen && (
          <div className="absolute top-full right-4 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-4">
            <Link to="/auth/login" className="flex items-center gap-2">
              <img src={person} alt="profile" className="h-6 w-6" />
              Log in
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
