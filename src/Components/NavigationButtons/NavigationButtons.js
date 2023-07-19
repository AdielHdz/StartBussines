import React from "react";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

const NavigationButtons = ({ currentPage }) => {
  const isSignUp = currentPage === "/register";
  const isSignIn = currentPage === "/logIn";

  return (
    <div className="flex">
      <Link href="/">
        <AiOutlineArrowLeft size={34} />
      </Link>
      <div className="flex items-center justify-center mt-4">
        <Link href="/register">
          <span>Sign Up /</span>
        </Link>
        <Link href="/logIn">
          <span>Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default NavigationButtons;
