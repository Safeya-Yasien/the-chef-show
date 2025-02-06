import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface IInputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  showPasswordToggle?: boolean;
  error?: string;
  register: UseFormRegisterReturn;
}

const InputField = ({
  label,
  type,
  placeholder,
  showPasswordToggle,
  error,
  register,
}: IInputFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-[10px] relative">
      <label className="font-light text-[16px] capitalize">{label}</label>

      {/* Input Wrapper */}
      <div className="relative">
        <input
          {...register}
          type={showPasswordToggle && showPassword ? "text" : type}
          placeholder={placeholder}
          className="border border-[#C19F74] p-[10px] pr-12 bg-transparent text-white placeholder-[#6F6F6F] outline-none w-full"
          aria-label={label}
        />

        {/* Show/Hide Password Button */}
        {showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-4 flex items-center justify-center"
            aria-label={`Toggle ${label}`}
          >
            {showPassword ? (
              <AiFillEyeInvisible className="text-white text-xl" />
            ) : (
              <AiFillEye className="text-white text-xl" />
            )}
          </button>
        )}
      </div>

      {/* Display error message */}
      {error && <p className="text-red-500 -mt-3">{error}</p>}
    </div>
  );
};

export default InputField;
