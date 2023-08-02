"use client";

import { validatePassword } from "./validation";
import { useState } from "react";

export default function RecoverMail() {
  const [formValid, setFormValid] = useState(false);
  const [errorText, setErrorText] = useState();


const handleInputChange = (e) => {
  const { name, value } = e.target;

  const emailError =
    name === " email" && !validateEmail(value)
      ? "Please insert a email address valid"
      : "";

  setErrorText(emailError);
  setFormValid(emailError === "" && value !== "");


};

const handleInputBluer = (e) => {
  const { name, value } = e.target;
  const emailError =
    name === " email" && !validateEmail(value)
      ? "Please insert a email address valid"
      : "";
  handleInputChange(e);
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (!formValid) {
    console.log("The form has errors");
    return;
  }
  const form = e.target;
  const email = form.email.value;

  form.reset();

  console.log("The email has been send to " + email);
}

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-green-600 sm:text-3xl">
          Insert your email
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Please enter your email address. We will send you an email with the
          link to confirm your new password.
        </p>

        <form
          action=""
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          onSubmit={handleSubmit}
        >
          <p className="text-center text-lg font-medium">
            Enter your email address
          </p>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
             
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address"
              onChange={handleInputBluer}
            />
          </div>
          {errorText && (
            <p className="text-red-600 text-sm text-center">{errorText}</p>
          )}
          <button
            type="submit"
            className={`block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white ${
              formValid ? "" : "opacity-50"
            }`}
            style={{ backgroundColor: "#065A46" }}
            disabled={!formValid} 
          >
            Send email
          </button>
        </form>
      </div>
    </div>
  );
};
