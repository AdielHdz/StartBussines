import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
export default function Authentication() {
  return (
    <div>
      <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
        <p className="mx-4 mb-0 text-center  dark:text-neutral-200">Or</p>
      </div>
      <p className="mx-4 mt-[-17px] text-center dark:text-neutral-200">Continue with</p>

      <div className="flex justify-center items-center  mt-8">
        <button className="mb-3 flex  items-center justify-center rounded bg-white px-5 pb-2 pt-2.5 text-center text-xs font-medium uppercase leading-normal text-red-500 shadow-sm transition duration-150 ease-in-out hover:bg-white hover:shadow-md focus:bg-white focus:shadow-md focus:outline-none focus:ring-0 active:bg-white active:shadow-md dark:shadow-sm dark:hover:shadow-md dark:focus:shadow-md dark:active:shadow-md mr-5">
          <FcGoogle size={25} />
        </button>
        <button className="mb-3 flex  items-center justify-center rounded bg-white px-5 pb-2 pt-2.5 text-center text-xs font-medium uppercase leading-normal text-blue-500 shadow-sm transition duration-150 ease-in-out hover:bg-white hover:shadow-md focus:bg-white focus:shadow-md focus:outline-none focus:ring-0 active:bg-white active:shadow-md dark:shadow-sm dark:hover:shadow-md dark:focus:shadow-md dark:active:shadow-md">
          <BsFacebook size={25} />
        </button>
      </div>
    </div>
  );
}
