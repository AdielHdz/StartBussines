"use client";
import React, { useEffect, useState } from "react";
import validation from "./validations/validations";
import AuthLogin from "../../Components/AuthLogin/AuthLogin";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import NavigationButtons from "../../Components/NavigationButtons/NavigationButtons";
import axios from "axios";
import { useRouter } from "next/navigation";
import ButtonAuth from "../../Components/customButton/ButtonAuth";
import Link from "next/link";

export default function LogIn() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setErrors] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorLogin, setErrorLogin] = useState("");

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
    setErrors(validation({ ...form, [property]: value }));
  };

  useEffect(() => {
    console.log(errorLogin);
  }, [errorLogin]);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClick = (event, form) => {
    event.preventDefault();
    console.log(form);

    axios
      .post("/user/login", form)
      .then((response) => {
        localStorage.setItem(
          "token_DealUp",
          response.data.userRegistered.accessToken
        );
        localStorage.setItem("idSession", response.data.userRegistered.data.id);
        localStorage.setItem(
          "fullName",
          response.data.userRegistered.data.fullName
        );
        localStorage.setItem(
          "avatar",
          response.data.userRegistered.data.avatar
        );
        localStorage.setItem("role", response.data.userRegistered.data.role);
        localStorage.setItem(
          "savedEmail",
          response.data.userRegistered.data.email
        );

        localStorage.setItem(
          "userData",
          JSON.stringify({
            fullName: response.data.userRegistered.data.fullName,
            email: response.data.userRegistered.data.email,
            role: response.data.userRegistered.data.role,
            address: response.data.userRegistered.data.address,
            password: response.data.userRegistered.data.password,
            gender: response.data.userRegistered.data.gender,
            birthdate: response.data.userRegistered.data.birthdate,
            phone: response.data.userRegistered.data.phone,
            country: response.data.userRegistered.data.country,
            avatar: response.data.userRegistered.data.avatar,
            status: response.data.userRegistered.data.status,
            thirdPartyCreated:
              response.data.userRegistered.data.thirdPartyCreated,
          })
        );
        router.push("/home");
      })
      .catch((error) => {
        console.log("Email or password does not match!");
        setErrorLogin("Email or password does not match!");
      });
  };

  return (
    <div className="h-screen flex items-center justify-center p-2 ">
      <div
        className="w-full md:max-w-registerMd max-w-registerXs md:shadow-cards bg-whites rounded-xl 
            "
      >
        <NavigationButtons currentPage="/logIn" />
        <form className=" flex flex-col gap-3 p-2 rounded-xl ">
          <div className="flex flex-col gap-1 ">
            <label htmlFor="email" className="text-darkGray  ">
              Email
            </label>
            <div>
              <input
                value={form.email}
                type="email"
                name="email"
                placeholder="Type here..."
                onChange={handleChange}
                className={`pl-1 h-12 border-2 rounded-md outline-none  ${
                  error.email ? "border-redError" : " border-grayLightMedium "
                }  text-darkViolet font-medium text-sm placeholder:text-sm placeholder:font-light w-full`}
              />
              {error.email && (
                <p className=" text-redError text-xs py-1 m-0">{error.email}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1 ">
            <label htmlFor="password" className="text-darkGray  ">
              Password
            </label>
            <div className="relative">
              <input
                value={form.password}
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Type here..."
                onChange={handleChange}
                className={`pl-1 h-12 border-2 rounded-md outline-none   border-grayLightMedium 
                text-darkViolet font-medium text-sm placeholder:text-sm placeholder:font-light w-full`}
              />
              <div
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
              >
                {showPassword ? (
                  <AiFillEye
                    className="text-xl text-blacks"
                    onClick={handlePassword}
                  />
                ) : (
                  <AiFillEyeInvisible
                    className="text-xl text-blacks"
                    onClick={handlePassword}
                  />
                )}
              </div>
            </div>
            {errorLogin && errorLogin && (
              <p className=" text-redError text-xs py-1 m-0">{errorLogin}</p>
            )}
          </div>
          <div className="h-12 w-full">
            <ButtonAuth text={"Login"} doThis={handleClick} form={form} />
          </div>

          <AuthLogin />
          <div className="h-12 w-full flex items-center justify-center">
            <Link href="/recoveryPass">Forgot your password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
