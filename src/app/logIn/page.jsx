"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import validation from "./validations/validations";
import Background from "public/asset/login.jpg";
import Authentication from "@/Components/Authentication/Authentication";
import CustomButton from "@/Components/customButton/CustomButton";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import NavigationButtons from "@/Components/NavigationButtons/NavigationButtons";

export default function LogIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setErrors] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    setErrors(validation({ ...form, [property]: value }));
  };

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-screen w-full   pt-0.5 ">
      <div className=" absolute z-10 w-full h-full bg-black opacity-10"></div>
      <Image
        src={Background}
        alt="background"
        width={0}
        height={0}
        className="absolute h-full w-full object-cover"
      />
      <div
        className="relative z-20
            ">
        <NavigationButtons currentPage="/logIn" />
        <div className="flex justify-center items-center h-screen">
          <div className=" bg-black bg-opacity-30 p-5 rounded border border-white  ">
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
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    onChange={handleChange}
                    className="bg-black bg-opacity-30 p-2 border border-white  text-white "
                  />
                  <button
                    type="button"
                    onClick={handlePassword}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white">
                    {showPassword ? (
                      <AiFillEye className="w-6 h-6" />
                    ) : (
                      <AiFillEyeInvisible className="w-6 h-6" />
                    )}
                  </button>
                </div>
              </div>

              <CustomButton text="Login" color="blue" />

              <Authentication />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
