import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
export default function Authentication() {
  return (
    <div className="flex flex-col gap-3 mt-3">
      <div>
        <div className=" flex items-center gap-2  justify-between ">
          <div className="w-full  h-0 border border-black "></div>
          <p className="  text-center m-0 text-blacks text-xs font-medium h-full inline-block">
            Or
          </p>
          <div className="w-full  h-0 border border-black "></div>
        </div>
        <p className="w-full text-center m-0 text-blacks text-xs font-medium h-full inline-block">
          continue with
        </p>
      </div>

      <div className="flex w-full gap-2 items-center justify-center">
        <div className=" flex items-center m-0 justify-center w-10  hover:shadow-cards transition duration-300 cursor-pointer rounded-lg h-10  mt-8">
          <FcGoogle className="inline-block text-3xl" />
        </div>
        <div className=" flex items-center m-0 justify-center w-10  hover:shadow-cards transition duration-300 cursor-pointer rounded-lg  h-10  mt-8">
          <BsFacebook className="inline-block text-blue-600 text-3xl" />
        </div>
      </div>
    </div>
  );
}
