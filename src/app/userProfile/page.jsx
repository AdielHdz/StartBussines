import React from "react";
import Image from "next/image";
import Background from "public/asset/login.jpg";

export default function userProfile() {
  return (
    <div className="flex flex-col items-center h-full w-full   pt-0.5 ">
      <div className=" justify-center items-center h-screen w-96 max-lg:w-110 p-4">
        <Image
          className="w-32 h-32 rounded-full shadow-lg "
          alt="Avatar"
          src={Background}
        />
        <div className="flex flex-col mt-3">
          <label htmlFor="" className="text-labelRed">
            Name
          </label>
          <input type="text" className="rounded bg-grayLight h-10" />
        </div>

        <div className="flex flex-col mt-3">
          <label htmlFor="" className="text-labelRed">
            Email
          </label>
          <input type="email" className="rounded bg-grayLight h-10" />
        </div>

        <div className="flex flex-col mt-3">
          <label htmlFor="" className="text-labelRed">
            Phone
          </label>
          <input type="phone" className="rounded bg-grayLight h-10" />
        </div>

        <div className="flex flex-col mt-3">
          <label htmlFor="" className="text-labelRed">
            Birthdate
          </label>
          <input type="date" className="rounded bg-grayLight h-10" />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="" className="text-labelRed">
            Addres
          </label>
          <input type="addres" className="rounded bg-grayLight h-10" />
        </div>
      </div>
    </div>
  );
}
