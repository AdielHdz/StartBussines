"use client";
import { useState, useEffect } from "react";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import Authentication from "../../Components/Authentication/Authentication";
import NavigationButtons from "../NavigationButtons/NavigationButtons";
import SelectWay from "../SelectWay/SelectWay";
import validations from "./formValidations";
import axios from "axios";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    rol: "",
    fullName: "",
    email: "",
    birthdate: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    rol: "",
    fullName: "",
    email: "",
    birthdate: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [backendError, setBackendError] = useState("");

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    setError(validations({ ...form, [property]: value }));
  };
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const rol = localStorage.getItem("rol");
    const formWithRol = { ...form, rol: rol };

    if (
      error.fullName ||
      error.email ||
      error.birthdate ||
      error.password ||
      error.confirmPassword
    ) {
      return;
    }

    try {
      await axios.post("/user", formWithRol);

      const loginResponse = await axios.post("/user/login", formWithRol);

      const loginData = loginResponse.data;
      localStorage.setItem(
        "token_DealUp",
        loginData.userRegistered.accessToken
      );
      localStorage.setItem("idSession", loginData.userRegistered.data.id);
      localStorage.setItem("fullName", loginData.userRegistered.data.fullName);
      localStorage.setItem("avatar", loginData.userRegistered.data.avatar);
      localStorage.setItem("savedEmail", loginData.userRegistered.data.email);

      localStorage.setItem(
        "userData",
        JSON.stringify({
          fullName: loginData.userRegistered.data.fullName,
          email: loginData.userRegistered.data.email,
          rol: loginData.userRegistered.data.rol,
          address: loginData.userRegistered.data.address,
          password: loginData.userRegistered.data.password,
          gender: loginData.userRegistered.data.gender,
          birthdate: loginData.userRegistered.data.birthdate,
          phone: loginData.userRegistered.data.phone,
          country: loginData.userRegistered.data.country,
          avatar: loginData.userRegistered.data.avatar,
          status: loginData.userRegistered.data.status,
          thirdPartyCreated: loginData.userRegistered.data.thirdPartyCreated,
        })
      );

      alert("Welcome");
      router.push("/home");
    } catch (error) {
      console.log("Error during form submission:", error);
      setBackendError(error.response.data.error || "Something went wrong");
    }
  };

  return (
    <div className="py-20 flex justify-center items-center ">
      <div className="p-4  md:shadow-cards max-w-md rounded-xl">
        <NavigationButtons currentPage={"/register"} />
        <div className="flex justify-center items-center gap-3 rounded-xl py-2">
          <SelectWay />
        </div>
        <form className="max-w-md   flex flex-col gap-2">
          <div className="flex flex-col gap-1 mt-3">
            <label htmlFor="fullName" className="text-orangeMedium  ">
              Full Name
            </label>
            <input
              name="fullName"
              type="text"
              onChange={handleChange}
              className={`pl-1 h-12 border-2 rounded-md outline-none  ${
                error.fullName ? "border-redError" : " border-grayLightMedium "
              }  text-darkViolet font-medium text-sm placeholder:text-sm placeholder:font-light w-full`}
            />
            {error.fullName && (
              <p className=" text-redError text-xs py-1 m-0">
                {error.fullName}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1  mt-3">
            <label htmlFor="email" className="text-orangeMedium  ">
              Email
            </label>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              className={`pl-1 h-12 border-2 rounded-md outline-none  ${
                error.email ? "border-redError" : " border-grayLightMedium "
              }  text-darkViolet font-medium text-sm placeholder:text-sm placeholder:font-light w-full`}
            />
            {error.email && (
              <p className=" text-redError text-xs py-1 m-0">{error.email}</p>
            )}
          </div>
          <div className="flex flex-col gap-1  mt-3">
            <label htmlFor="birthdate" className="text-orangeMedium  ">
              Birthday
            </label>
            <input
              name="birthdate"
              type="date"
              onChange={handleChange}
              className={`pl-1 h-12 border-2 rounded-md outline-none  ${
                error.birthdate ? "border-redError" : " border-grayLightMedium "
              }  text-darkViolet font-medium text-sm placeholder:text-sm placeholder:font-light w-full`}
            />
            {error.birthdate && (
              <p className=" text-redError text-xs py-1 m-0">
                {error.birthdate}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1  mt-3">
            <label htmlFor="password" className="text-orangeMedium  ">
              Password
            </label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
                className={`pl-1 h-12 border-2 rounded-md outline-none  ${
                  error.password
                    ? "border-redError"
                    : " border-grayLightMedium "
                }  text-darkViolet font-medium text-sm placeholder:text-sm placeholder:font-light w-full`}
              />
              {error.password && (
                <p className=" text-redError text-xs py-1 m-0">
                  {error.password}
                </p>
              )}
              <button
                type="button"
                onClick={handlePassword}
                className="absolute  transform top-2.5 right-2 text-orangeMedium "
              >
                {showPassword ? (
                  <AiFillEyeInvisible className="text-3xl " />
                ) : (
                  <AiFillEye className="text-3xl " />
                )}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-1  mt-3">
            <label htmlFor="confirmPassword" className="text-orangeMedium  ">
              Confirm Password
            </label>
            <div className="relative">
              <input
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
                className={`pl-1 h-12 border-2 rounded-md outline-none  ${
                  error.confirmPassword
                    ? "border-redError"
                    : " border-grayLightMedium "
                }  text-darkViolet font-medium text-sm placeholder:text-sm placeholder:font-light w-full`}
              />
              {error.confirmPassword && (
                <p className=" text-redError text-xs py-1 m-0">
                  {error.confirmPassword}
                </p>
              )}
              <button
                type="button"
                onClick={handlePassword}
                className="absolute   transform top-2.5 right-2   text-orangeMedium "
              >
                {showPassword ? (
                  <AiFillEyeInvisible className="text-3xl " />
                ) : (
                  <AiFillEye className="text-3xl " />
                )}
              </button>
            </div>
          </div>
          <div className="h-12">
            {backendError && (
              <p className="text-redError text-xs py-1 m-0">{backendError}</p>
            )}
            <button
              className=" w-full h-10 border text-white bg-primar rounded mt-2 mb-5"
              onClick={handleSubmit}
            >
              Register
            </button>
          </div>
        </form>
        <Authentication />
      </div>
    </div>
  );
};

export default RegisterForm;
