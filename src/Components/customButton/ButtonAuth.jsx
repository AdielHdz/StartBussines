"use client";
import { useRouter } from "next/navigation";

const ButtonAuth = ({ text, doThis, rute, form, disabled }) => {
  const router = useRouter();
  return (
    <button
      onClick={(event) => doThis(event, form)}
      disabled={disabled}
      className={`bg-primar ${
        disabled
          ? "opacity-50 cursor-not-allowed bg-grayLightMedium"
          : "bg-primar hover:bg-orangeMedium"
      } text-whites rounded-sm     hover:text-whites transition duration-300 w-full h-full `}
    >
      {text}
    </button>
  );
};

export default ButtonAuth;
