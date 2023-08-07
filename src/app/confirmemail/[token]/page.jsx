"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation , useParams } from "next/router";



const ConfirmEmailSuccess = () => {
  const navigation = useNavigation();
  const { token } = useParams();
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.patch(`/user/register/confirm/`, { token });
        setSuccess(true);
      } catch (error) {
        setSuccess(false);
      }
      setLoading(false);
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  const handleBackToRegistration = () => {
    navigation.push("/register");
  };

  const successMessage = "Email Confirmed Successfully";
  const errorMessage = "Email Confirmation Failed";
  const successText = "Congratulations! Your email has been successfully confirmed.";
  const errorText = "Something went wrong with the email confirmation. Please try again later.";

  const buttonContent = success ? (
    <svg
      className="h-12 w-12 text-green-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ) : (
    <a
      className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md"
      href="/register"
      onClick={() => navigation.push("/register")}
    >
      Back to Registration
    </a>
  );

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1
          className={`text-center text-2xl font-bold ${
            success ? "text-green-600" : "text-red-600"
          } sm:text-3xl`}
        >
          {success ? successMessage : errorMessage}
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          {success ? successText : errorText}
        </p>

        <div className="flex justify-center mt-6">
          {buttonContent}
        </div>
      </div>
    </div>
  );
};
export default ConfirmEmailSuccess;
