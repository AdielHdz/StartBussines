"use client";
import { useRouter } from "next/navigation";

const ButtonInvest = ({ text, doThis, rute }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => doThis(router, rute)}
      className="bg-primar text-whites rounded-sm  hover:bg-whites hover:border-2 border-orangeMedium hover:text-orangeMedium transition-shadow duration-300 w-full h-full py-2 "
    >
      {text}
    </button>
  );
};

export default ButtonInvest;
