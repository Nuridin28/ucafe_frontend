import React from "react";

type InputProps = {
  type: string;
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
};
export default function Input({
  type,
  className,
  placeholder,
  onChange,
  value,
  disabled,
}: InputProps) {
  return (
    <>
      {type === "text" && (
        <div>
          <input
            type="text"
            className={`bg-inputBg rounded-xl w-full p-6 mt-4 ${className}`}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            disabled={disabled}
          />
        </div>
      )}
    </>
  );
}
