import React from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import "./NavigationButtons.css";
import Image from "next/image";
const NavigationButtons = ({ currentPage }) => {
  const isSignUp = currentPage === "/register";
  const isSignIn = currentPage === "/logIn";

  return (
    <div className=" ">
      <div className="relative w-full flex">
        <Link
          href="/"
          className="absolute pl-2 h-full flex justify-start items-center "
        >
          <FiArrowLeft className="text-3xl text-primar hover:text-orangeMedium " />
        </Link>
        <div className="flex items-center justify-center">
          <Image
            src="/asset/DealUp.png"
            alt="logo"
            className=" w-1/2"
            width={2000}
            height={2000}
          />
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 ">
        <Link
          href="/register"
          className={`${
            isSignUp
              ? "font-medium no-underline text-darkGray cursor-default"
              : "font-normal text-sm text-second hover:text-orangeMedium "
          } `}
        >
          Sign Up
        </Link>
        <span className="text-darkGray">/</span>
        <Link
          href="/logIn"
          className={`${
            isSignIn
              ? "font-medium no-underline text-darkGray cursor-default"
              : "font-normal text-sm text-second hover:text-orangeMedium"
          }  `}
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default NavigationButtons;
