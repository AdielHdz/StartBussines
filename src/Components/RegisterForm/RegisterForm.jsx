"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {
  validateEmail,
  validateDate,
  validateAge,
  validatePassword,
} from "./formValidations";
import CustomButton from '../../Components/customButton/CustomButton';
import Authentication from '../../Components/Authentication/Authentication';

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dobError, setDobError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isEntrepreneur, setIsEntrepreneur] = useState(true);


  const onSubmit = (e) => {
    e.preventDefault();

    // Validación de correo electrónico
    if (!validateEmail(email)) {
      setEmailError("Email is invalid");
      return;
    } else {
      setEmailError("");
    }

    // Validación de fecha de nacimiento
    if (!validateDate(dob)) {
      setDobError("Date of Birth is invalid");
      return;
    } else {
      setDobError("");
    }

    // Validación de edad mínima
    if (!validateAge(dob)) {
      setDobError("You must be at least 18 years old");
      return;
    } else {
      setDobError("");
    }

    // Validación de contraseña
    if (!validatePassword(password)) {
      setPasswordError("Password is invalid");
      return;
    } else {
      setPasswordError("");
    }

    if (password !== confirmPassword) {
        setConfirmPasswordError("Passwords do not match");
        return;
      } else {
        setConfirmPasswordError("");
      }

    // Resto del código para el envío del formulario
    console.log(name, email, dob, password, confirmPassword);
    e.target.reset();
    setName("");
    setEmail("");
    setDob("");
    setPassword("");
    setConfirmPassword("");
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


  //CONVETIR FECHA DD/MM/YYYY


  return (
    <div
      className="flex justify-center items-center min-h-screen bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/5055748/pexels-photo-5055748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <div className="bg-black bg-opacity-30 p-5 mt-10 mb-10 rounded border border-white text-white">
        <div className="flex justify-between">
          <button
            className={`py-2 px-4 rounded ${
              isEntrepreneur ? "bg-white text-black" : "bg-gray-300 text-white"
            }`}
            onClick={() => setIsEntrepreneur(true)}
          >
            Entrepreneur
          </button>
          <button
            className={`py-2 px-4 rounded ${
              !isEntrepreneur ? "bg-white text-black" : "bg-gray-300 text-white"
            }`}
            onClick={() => setIsEntrepreneur(false)}
          >
            Investor
          </button>
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="name" className="text-white">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={onNameChange}
            className={`bg-black bg-opacity-30 p-2 border ${
              nameError ? "border-red-500" : "border-white"
            } mt-2`}
          />
          {nameError && <p className="text-red-500">{nameError}</p>}
        </div>
        <form onSubmit={onSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col mt-3">
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`bg-black bg-opacity-30 p-2 border ${
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
              className={`bg-black bg-opacity-30 p-2 border ${
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
                onChange={(e) => setPassword(e.target.value)}
                className={`bg-black bg-opacity-30 p-2 border ${
                  passwordError ? "border-red-500" : "border-white"
                } mt-3`}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
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
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`bg-black bg-opacity-30 p-2 border ${
                  confirmPasswordError ? "border-red-500" : "border-white"
                } mt-3`}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            </div>
            {confirmPasswordError && (
              <p className="text-red-500">{confirmPasswordError}</p>
            )}
          </div>
          <CustomButton
            text="Register"
            color="blue"
          />
        </form>
        <Authentication />
      </div>
    </div>
  );
};

export default RegisterForm;