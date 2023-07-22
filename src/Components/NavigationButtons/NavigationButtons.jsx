import React from "react";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./NavigationButtons.css";
const NavigationButtons = ({ currentPage }) => {
  const isSignUp = currentPage === "/register";
  const isSignIn = currentPage === "/logIn";

  return (
    <div className="grid ">
      <div>
        <Link href="/">
          <AiOutlineArrowLeft size={34} className="text-white" />
        </Link>
      </div>
      <div className="" id="signUpcontene">
        <Link href="/register">
          <span
            className={`${
              isSignUp
                ? "font-bold border-b-2 border-white text-white"
                : "font-normal"
            } text-gray-300 hover:text-white hover:border-white py-2 px-2`}>
            Sign Up
          </span>
        </Link>
        <span className="text-white"> / </span>
        <Link href="/logIn">
          <span
            className={`${
              isSignIn
                ? "font-bold border-b-2 border-white text-gray-300"
                : "font-normal"
            } text-gray-300 hover:text-white hover:border-white py-2 px-4`}>
            Sign In
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NavigationButtons;
