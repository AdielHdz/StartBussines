"use client";
import { useRouter } from "next/navigation";

const ButtonAuth = ({ text, doThis, rute }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => doThis(router, rute)}
      className="bg-primar text-whites rounded-sm   hover:bg-orangeMedium  hover:text-whites transition duration-300 w-full h-full  "
    >
      {text}
    </button>
  );
};

export default ButtonAuth;
