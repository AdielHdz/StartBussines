"use client";
import { useState } from "react";
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
import { useDispatch } from 'react-redux';
import { registerUser } from '../../Redux/Fetching/UsersSlice/UserSlice';


const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dobError, setDobError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isEntrepreneur, setIsEntrepreneur] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
  
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
  //aqui error envio
    dispatch(registerUser({ 
      name, 
      email, 
      dob, 
      password,
      confirmPassword,
    }));
  };
  

  const onNameBlur = (e) => {
    const newName = e.target.value;
    setName (newName);

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
    setPassword(newPassword)
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

  const currentPage = "/register";

 

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/5055748/pexels-photo-5055748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <div className="p-5 mt-10 mb-10  text-white">
        <NavigationButtons currentPage={currentPage} />
        <div className="bg-black bg-opacity-25 p-5 mt-10 mb-10 rounded border border-white text-white">
          <div className="flex justify-between">
            {" "}
            {/* Utilizamos flexbox */}
            <div className="flex-1 mr-2">
              {" "}
              {/* División en dos partes iguales */}
              <button
                className={`w-full py-2 px-4 rounded ${
                  isEntrepreneur
                    ? "bg-white text-black"
                    : "bg-gray-300 text-white"
                }`}
                onClick={() => setIsEntrepreneur(true)}
              >
                Entrepreneur
              </button>
            </div>
            <div className="flex-1 ml-2">
              {" "}
              {/* División en dos partes iguales */}
              <button
                className={`w-full py-2 px-4 rounded ${
                  !isEntrepreneur
                    ? "bg-white text-black"
                    : "bg-gray-300 text-white"
                }`}
                onClick={() => setIsEntrepreneur(false)}
              >
                Investor
              </button>
            </div>
          </div>
          <form onSubmit={onSubmit} className="max-w-md mx-auto">
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
                  } mt-3`}
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
                  } mt-3`}
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
            <CustomButton text="Register" color="blue" />
          </form>
          <Authentication />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
