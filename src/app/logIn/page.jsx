"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import validation from "./validations/validations";
import Background from "public/asset/login.jpg";
import Authentication from "@/Components/Authentication/Authentication";

export default function LogIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    setErrors(validation({ ...form, [property]: value }));
  };
  return (
    <div className="h-screen w-full   pt-0.5">
      <div className=" absolute z-10 w-full h-full bg-black opacity-10"></div>
      <Image
        src={Background}
        alt="background"
        width={0}
        height={0}
        className="absolute h-full object-cover"
      />
      <div
        className="relative z-20
            ">
        <div className="flex justify-center items-center h-screen ">
          <div className="bg-black bg-opacity-30 p-5 rounded border border-white">
            <div className=" flex items-center justify-center">
              <div className="container mx-8 my-20">
                <h1 className="text-white text-center text-6xl mb-10">Logo</h1>
              </div>
            </div>

            <form>
              <div className="flex flex-col mt-3">
                <label htmlFor="email" className="text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  className={`bg-black bg-opacity-30 p-2 border ${
                    error.email ? "border-red-500" : "border-white"
                  } mt-3  text-white`}
                />
                {error.email && <p className="text-red-500">{error.email}</p>}
              </div>

              <div className="flex flex-col mt-3">
                <label htmlFor="password" className="text-white">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  onChange={handleChange}
                  className="bg-black bg-opacity-30 p-2 border border-white  text-white "
                />
              </div>

              <button
                type="submit"
                className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light">
                Login
              </button>
              <Authentication />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
