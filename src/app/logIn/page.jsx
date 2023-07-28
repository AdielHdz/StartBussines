"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import validation from "./validations/validations";
import Background from "public/asset/login.jpg";
import Authentication from "../../Components/Authentication/Authentication";
import CustomButton from "../../Components/customButton/CustomButton";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import NavigationButtons from "../../Components/NavigationButtons/NavigationButtons";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import ButtonAuth from "../../Components/customButton/ButtonAuth";
import background from "../../../public/asset/backgroundLogin.jpg";
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

  /*  const [tokenSession, setTokenSession] = useLocalStorage("token_DealUp", "");
  const [idSession, setIdSession] = useLocalStorage("idSession", "");
  const [userNameSession, setUserNameSession] = useLocalStorage("fullName", "");
  const [avatarSession, setAvatarSession] = useLocalStorage("avatar", "");
  const [rolSession, setRolSession] = useLocalStorage("rol", "");
  const [savedEmail, setSavedEmail] = useLocalStorage("savedEmail", "");
  const [userSession, setUserSession] = useLocalStorage("userData", {
    fullName: "",
    email: "",
    rol: "",
    address: "",
    password: "",
    gender: "",
    birthdate: "",
    phone: "",
    country: "",
    avatar: "",
    status: "",
    thirdPartyCreated: null,
  }); */

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
      .post("http://localhost:3001/user/login", form)
      .then((response) => {
        // console.log(response.data.userRegistered.data); // Muestra la respuesta en la consola
        // console.log(response.data.userRegistered.accessToken);

        /*  setTokenSession(response.data.userRegistered.accessToken);
        setIdSession(response.data.userRegistered.data.id);
        setUserNameSession(response.data.userRegistered.data.fullName);
        setAvatarSession(response.data.userRegistered.data.avatar);
        setRolSession(response.data.userRegistered.data.rol);
        setSavedEmail(response.data.userRegistered.data.email);
        setUserSession({
          fullName: response.data.userRegistered.data.fullName,
          email: response.data.userRegistered.data.email,
          rol: response.data.userRegistered.data.rol,
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
        }); */
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
        localStorage.setItem("rol", response.data.userRegistered.data.rol);
        localStorage.setItem(
          "savedEmail",
          response.data.userRegistered.data.email
        );

        localStorage.setItem(
          "userData",
          JSON.stringify({
            fullName: response.data.userRegistered.data.fullName,
            email: response.data.userRegistered.data.email,
            rol: response.data.userRegistered.data.rol,
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
            ">
        <NavigationButtons currentPage="/logIn" />
        <form className=" flex flex-col gap-3 p-2 rounded-xl ">
          <div className="flex flex-col gap-1 ">
            <label htmlFor="email" className="text-orangeMedium  ">
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
            <label htmlFor="password" className="text-orangeMedium  ">
              Password
            </label>
            <div className="relative">
              <input
                /*  id="password" */
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
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white">
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

          <Authentication />
        </form>
      </div>
    </div>
  );
}
