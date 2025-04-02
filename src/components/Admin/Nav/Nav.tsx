import {
  BellIcon,
  HamburgerMenuIcon,
  PersonIcon,
  TokensIcon,
} from "@radix-ui/react-icons";

interface NavProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Nav = ({ currentPage, onPageChange }: NavProps): JSX.Element => {
  const buttons = [
    { icon: TokensIcon, alt: "home" },
    { icon: HamburgerMenuIcon, alt: "menu" },
    { icon: BellIcon, alt: "bell" },
    { icon: PersonIcon, alt: "person" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-10">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`flex justify-center items-center rounded-full p-3 transition duration-200 ease-in-out 
              ${
                currentPage === button.alt
                  ? "bg-primary text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
          onClick={() => onPageChange(button.alt)}
          aria-label={button.alt}
        >
          <button.icon />
        </button>
      ))}
    </div>
  );
};

export default Nav;
