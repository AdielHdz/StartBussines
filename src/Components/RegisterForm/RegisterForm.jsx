"use client";
import { useState, useEffect } from "react";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {
  validateEmail,
  validateDate,
  validateAge,
  validatePassword,
  validateName,
} from "./formValidations";
import CustomButton from "../../Components/customButton/CustomButton";
import Authentication from "../../Components/Authentication/Authentication";
import NavigationButtons from "../NavigationButtons/NavigationButtons";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Redux/Fetching/UsersSlice/UserSlice";
import SelectWay from "../SelectWay/SelectWay";
const RegisterForm = () => {
  const dispatch = useDispatch();
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
  const [isEntrepreneur, setIsEntrepreneur] = useState(true);
  const [emailExist, setEmailExist] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  //! FALTA EL MENSAJE FAILED MENSSAGE DESPUES DE ENVIAR EL FORM

  const onSubmit = async (e) => {
    e.preventDefault();
    const isFormValid =
      name !== "" &&
      email !== "" &&
      dob !== "" &&
      password !== "" &&
      confirmPassword !== "";
    if (!isFormValid) {
      alert("There are fields that are not completed");
      return;
    }

    if (
      nameError ||
      emailError ||
      dobError ||
      passwordError ||
      confirmPasswordError
    ) {
      console.log("There are errors in the form");
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

      e.target.reset();
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
    if (errorMessage) {
      setPasswordError(errorMessage);
    } else {
      setPasswordError("");
    }
  };

  const onConfirmPasswordBlur = (e) => {
    const newConfirmPassword = e.target.value;

    if (newConfirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const onPasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
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

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  useEffect(() => {
    if (
      name !== "" &&
      email !== "" &&
      dob !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      (nameError === null || nameError === "") &&
      (emailError === null || emailError === "") &&
      (dobError === null || dobError === "") &&
      (passwordError === null || passwordError === "") &&
      (confirmPasswordError === null || confirmPasswordError === "")
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
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

  const currentPage = "/register";

  return (
    <div className=" border-2 border-green-800 flex justify-center items-center ">
      <div className=" p-2  rounded border-2 border-green-400 text-white w-full md:max-w-registerMd">
        <NavigationButtons currentPage={currentPage} />
        <div className="flex justify-center items-center border-2 border-red-600 p-2">
          <SelectWay entrepreneur={"active"} />
          <SelectWay investor={"active"} />
        </div>

        <form
          onSubmit={onSubmit}
          className="max-w-md mx-auto border-2 border-purple-500"
        >
          <div className="flex flex-col mt-3">
            <label htmlFor="name" className="text-white">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={onNameChange}
              onBlur={onNameBlur}
              className={`bg-black bg-opacity-10 p-2 border ${
                nameError ? "border-red-500" : "border-white"
              } mt-2`}
            />
            {nameError && <p className="text-red-500">{nameError}</p>}
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={onEmailBlur}
              className={`bg-black bg-opacity-10 p-2 border ${
                emailError ? "border-red-500" : "border-white"
              } mt-3`}
            />
            {emailExist && <p className="text-red-500">{emailExist}</p>}
            {emailError && <p className="text-red-500">{emailError}</p>}
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="dob" className="text-white">
              Date of Birth
            </label>
            <input
              id="dob"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              onBlur={onDobBlur}
              className={`bg-black bg-opacity-10 p-2 border ${
                dobError ? "border-red-500" : "border-white"
              } mt-3`}
            />
            {dobError && <p className="text-red-500">{dobError}</p>}
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="password" className="text-white">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={onPasswordChange}
                onBlur={onPasswordBlur}
                className={`bg-black bg-opacity-10 p-2 border ${
                  passwordError ? "border-red-500" : "border-white"
                } mt-3 w-full`}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-1 top-8 transform -translate-y-1/2 "
              >
                {showPassword ? (
                  <AiFillEyeInvisible className="w-6 h-6" />
                ) : (
                  <AiFillEye className="w-6 h-6" />
                )}
              </button>
            </div>
            {passwordError && <p className="text-red-500">{passwordError}</p>}
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="confirmPassword" className="text-white">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={onConfirmPasswordBlur}
                className={`bg-black bg-opacity-10 p-2 border  ${
                  confirmPasswordError ? "border-red-500" : "border-white"
                } mt-3 w-full`}
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-1 top-8 transform -translate-y-1/2 "
              >
                {showConfirmPassword ? (
                  <AiFillEyeInvisible className="w-6 h-6" />
                ) : (
                  <AiFillEye className="w-6 h-6" />
                )}
              </button>
            </div>
            {confirmPasswordError && (
              <p className="text-red-500">{confirmPasswordError}</p>
            )}
          </div>
          <CustomButton text="Register" color="blue" disabled={!isFormValid} />
        </form>
        {successMessage && (
          <p className="text-green-500 text-center uppercase text-xl">
            {successMessage}
          </p>
        )}

        <Authentication />
      </div>
    </div>
  );
};

export default RegisterForm;
