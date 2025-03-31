type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export default function Button({
  children,
  className = "",
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`rounded-lg text-sm font-normal px-3 py-2 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
