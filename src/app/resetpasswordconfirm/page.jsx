"use client";
import React from "react";
import Image from "next/image"

const ResetPasswordConfirm = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <Image
         src="/asset/DealUp.png"
        alt="Lock"
        className="mx-auto h-20 w-20"
        width={100}
        height={100}
      />
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-green-600 sm:text-3xl">
          Password Changed Successfully
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Your password has been successfully changed. Check your email inbox to
          confirm.
        </p>
      </div>
    </div>
  );
};

export default ResetPasswordConfirm;
