"use client";
import { useRouter } from "next/navigation";

const ButtonAuth = ({ text, doThis, rute, form }) => {
  const router = useRouter();
  return (
    <button
      onClick={(event) => doThis(event, form)}
      className="bg-primar text-whites rounded-sm   hover:bg-orangeMedium  hover:text-whites transition duration-300 w-full h-full  "
    >
      {text}
    </button>
  );
};

export default ButtonAuth;
