import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import CustomButton from "../../Components/customButton/CustomButton";
import Authentication from "../../Components/Authentication/Authentication";
import NavigationButtons from "../NavigationButtons/NavigationButtons";
import SelectWay from "../SelectWay/SelectWay";
import ButtonAuth from "../customButton/ButtonAuth";

import {
  validateEmail,
  validateDate,
  validateAge,
  validatePassword,
  validateName,
} from "./formValidations";

import { registerUser } from "../../Redux/Fetching/UsersSlice/UserSlice";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [dobError, setDobError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  const [emailExist, setEmailExist] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const currentPage = "/register";

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  useEffect(() => {
    setIsFormValid(
      name !== "" &&
        email !== "" &&
        dob !== "" &&
        password !== "" &&
        confirmPassword !== "" &&
        nameError === null &&
        emailError === null &&
        dobError === null &&
        passwordError === null &&
        confirmPasswordError === null
    );
  }, [
    name,
    email,
    dob,
    password,
    confirmPassword,
    nameError,
    emailError,
    dobError,
    passwordError,
    confirmPasswordError,
  ]);

  const onSubmit = async (e) => {
    e.preventDefault();
    
    if (!isFormValid) {
      alert("There are fields that are not completed");
      return;
    }

    const rol = "entrepreneur";
    const fullName = name;
    const birthdate = new Date(dob).toLocaleDateString("es-ES");

    try {
      dispatch(
        registerUser({
          fullName,
          email,
          rol,
          birthdate,
          password,
        })
      );
      setSuccessMessage("Registration successful!");
      router.push("/home");

      setName("");
      setEmail("");
      setDob("");
      setPassword("");
      setConfirmPassword("");
      setEmailExist("");
    } catch (error) {
      console.error("An error occurred during registration: ", error);
      if (error.response && error.response.data.error) {
        setEmailExist(error.response.data.error);
      } else {
        setEmailError("Error registering user");
      }
    }
  };

  const onNameBlur = (e) => {
    const newName = e.target.value;
    setName(newName);

    if (!validateName(newName)) {
      setNameError("Name is invalid");
    } else {
      setNameError("");
    }
  };

  const onEmailBlur = (e) => {
    const newEmail = e.target.value;

    if (!validateEmail(newEmail)) {
      setEmailError("Email is invalid");
    } else {
      setEmailError("");
    }
  };

  const onDobBlur = (e) => {
    const newDob = e.target.value;

    if (!validateDate(newDob)) {
      setDobError("Date of Birth is invalid");
    } else if (!validateAge(newDob)) {
      setDobError("You must be at least 18 years old");
    } else {
      setDobError("");
    }
  };

  const onPasswordBlur = (e) => {
    const newPassword = e.target.value;
    const errorMessage = validatePassword(newPassword);

    setPasswordError(errorMessage || "");
  };

  const onConfirmPasswordBlur = (e) => {
    const newConfirmPassword = e.target.value;

    setConfirmPasswordError(
      newConfirmPassword !== password ? "Passwords do not match" : ""
    );
  };

  const onPasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setConfirmPasswordError(newPassword !== confirmPassword ? "Passwords do not match" : "");
  };

  const onNameChange = (e) => {
    const value = e.target.value;
    const words = value.split(" ");
    const formattedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const formattedValue = formattedWords.join(" ");
    setName(formattedValue);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="py-20 flex justify-center items-center ">
      <div className="p-4 md:shadow-cards max-w-md rounded-xl">
        <NavigationButtons currentPage={currentPage} />
        <div className="flex justify-center items-center gap-3 rounded-xl py-2">
          <SelectWay />
        </div>
        <form onSubmit={onSubmit} className="max-w-md flex flex-col gap-2">
          <div className="flex flex-col gap-1 mt-3">
            <label htmlFor="name" className="text-orangeMedium">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={onNameChange}
              onBlur={onNameBlur}
              className={`pl-1 h-12 border-2 rounded-md outline-none ${
                nameError ? "border-redError" : "border-grayLightMedium"
              } text-darkViolet font-medium text-sm placeholder:text-sm placeholder:font-light w-full`}
            />
            {nameError && <p className="text-redError text-xs py-1 m-0">{nameError}</p>}
          </div>
          <div className="flex flex-col gap-1 mt-3">
            <label htmlFor="email" className="text-orangeMedium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={onEmailBlur}
              className={`pl-1 h-12 border-2 rounded-md outline-none ${
                emailError ? "border-redError" : "border-grayLightMedium"
              } text-darkViolet font-medium text-sm placeholder:text-sm placeholder:font-light w-full`}
            />
            {emailExist && <p className="text-redError text-xs py-1 m-0">{emailExist}</p>}
            {emailError && <p className="text-redError text-xs py-1 m-0">{emailError}</p>}
          </div>
          <div className="flex flex-col gap-1 mt-3">
            <label htmlFor="dob" className="text-orangeMedium">
              Date of Birth
            </label>
            <input
              id="dob"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              onBlur={onDobBlur}
              className={`pl-1 h-12 border-2 rounded-md outline-none ${
                dobError ? "border-redError" : "border-grayLightMedium"
              } text-darkViolet font-medium text-sm placeholder:text-sm placeholder:font-light w-full`}
            />
            {dobError && <p className="text-redError text-xs py-1 m-0">{dobError}</p>}
          </div>
          <div className="flex flex-col gap-1 mt-3">
            <label htmlFor="password" className="text-orangeMedium">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={onPasswordChange}
                onBlur={onPasswordBlur}
                className={`pl-1 h-12 border-2 rounded-md outline-none ${
                  passwordError ? "border-redError" : "border-grayLightMedium"
                } text-darkViolet font-medium text-sm placeholder:text-sm placeholder:font-light w-full`}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute transform top-2.5 right-2 text-orangeMedium"
              >
                {showPassword ? <AiFillEyeInvisible className="text-3xl" /> : <AiFillEye className="text-3xl" />}
              </button>
            </div>
            {passwordError && <p className="text-redError text-xs py-1 m-0">{passwordError}</p>}
          </div>
          <div className="flex flex-col gap-1 mt-3">
            <label htmlFor="confirmPassword" className="text-orangeMedium">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={onConfirmPasswordBlur}
                className={`pl-1 h-12 border-2 rounded-md outline-none ${
                  confirmPasswordError ? "border-redError" : "border-grayLightMedium"
                } text-darkViolet font-medium text-sm placeholder:text-sm placeholder:font-light w-full`}
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute transform top-2.5 right-2 text-orangeMedium"
              >
                {showConfirmPassword ? (
                  <AiFillEyeInvisible className="text-3xl" />
                ) : (
                  <AiFillEye className="text-3xl" />
                )}
              </button>
            </div>
            {confirmPasswordError && (
              <p className="text-redError text-xs py-1 m-0">{confirmPasswordError}</p>
            )}
          </div>
          <div className="h-12">
            <ButtonAuth text={"Register"} doThis={onSubmit} disabled={!isFormValid} />
          </div>
        </form>

        {successMessage && (
          <p className="text-green-500 text-center uppercase text-xl">{successMessage}</p>
        )}

        <Authentication />
      </div>
    </div>
  );
};

export default RegisterForm;
