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
    role: "",
    fullName: "",
    email: "",
    birthdate: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    role: "",
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
    const role = localStorage.getItem("role");
    const formWithRol = { ...form, role: role };
    try {
      await axios.post("/user/register", formWithRol);
      router.push("/checkemail");
    } catch (error) {
      console.log("Error during form submission:", error);
      setBackendError(
        /* error.response.data.error ||  */ "Something went wrong"
      );
    }
  };
  const handleRoleSelect = (selectedRole) => {
    setForm({ ...form, role: selectedRole });
    setError({ ...error, role: "" });
  };
  const checkRoleError = () => {
    if (!form.role) {
      setError({ ...error, role: "Please select a role" });
    } else {
      setError({ ...error, role: "" });
    }
  };
  const handleConfirmPassword = (event) => {
    handleChange(event);
    checkRoleError();
    setError((prevError) => ({
      ...prevError,
      role: prevError.role, // Mantener el estado actual del error de rol
      confirmPassword: validations({
        ...form,
        confirmPassword: event.target.value,
      }).confirmPassword,
    }));
  };
  const hasErrorsOrEmptyFields = () => {
    return (
      error.role ||
      error.fullName ||
      error.email ||
      error.birthdate ||
      error.password ||
      error.confirmPassword ||
      !form.role ||
      !form.fullName ||
      !form.email ||
      !form.birthdate ||
      !form.password ||
      !form.confirmPassword
    );
  };
  return (
    <div className="py-20 flex justify-center items-center ">
      <div className="p-4  md:shadow-cards max-w-md rounded-xl">
        <NavigationButtons currentPage={"/register"} />
        <div className="flex justify-center mt-10">
          <label htmlFor="fullName" className="text-orangeMedium  ">
            Choose your role
          </label>
        </div>
        <div className="flex justify-center items-center gap-3 rounded-xl py-2">
          <SelectWay onRoleSelect={handleRoleSelect} />
        </div>
        {error.role && (
          <p className="text-redError text-xs py-1 m-0 text-center">
            {error.role}
          </p>
        )}

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
                className="absolute  transform top-2.5 right-2 text-orangeMedium ">
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
                onChange={handleConfirmPassword}
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
                className="absolute   transform top-2.5 right-2   text-orangeMedium ">
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
              className={`w-full h-10 border text-white bg-primar rounded mt-2 mb-5 ${
                hasErrorsOrEmptyFields() ? "bg-gray-600" : ""
              }`}
              onClick={handleSubmit}
              disabled={hasErrorsOrEmptyFields()}>
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
