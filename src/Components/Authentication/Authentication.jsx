import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
export default function Authentication() {
  return (
    <div>
      <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
        <p className="mx-4 mb-0 text-center  dark:text-neutral-200">Or</p>
      </div>
      <div className="flex justify-center items-center  ">
        {/*  facebook */}
        <button className="mb-3 flex w-1/4 items-center justify-center rounded bg-red-500 px-5 pb-2 pt-2.5 text-center text-xs font-medium uppercase leading-normal text-white shadow-sm transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-md focus:bg-red-600 focus:shadow-md focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-md dark:shadow-sm dark:hover:shadow-md dark:focus:shadow-md dark:active:shadow-md mr-5">
          <BiLogoGmail />
        </button>
        {/*  gmail */}
        <button className="mb-3 flex w-1/4 items-center justify-center rounded bg-blue-500 px-5 pb-2 pt-2.5 text-center text-xs font-medium uppercase leading-normal text-white shadow-sm transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-md focus:bg-blue-600 focus:shadow-md focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-md dark:shadow-sm dark:hover:shadow-md dark:focus:shadow-md dark:active:shadow-md">
          <BsFacebook />
        </button>
      </div>
    </div>
  );
}
