"use client";
import { useRouter } from "next/navigation";

const ButtonAuth = ({ text, doThis, rute }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => doThis(router, rute)}
      className="bg-primar text-whites rounded-sm   hover:bg-whites hover:shadow-cards hover:text-orangeMedium transition duration-300 w-full h-full py-2 "
    >
      {text}
    </button>
  );
};

export default ButtonAuth;
