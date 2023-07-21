"use client";
import React, { useState } from "react";
import Image from "next/image";
import Background from "public/asset/login.jpg";
import { GrAdd } from "react-icons/gr";
import { AiOutlineEdit } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

export default function userProfile() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    birthdate: "",
    address: "",
    /* avatar: null,
    frontId: null,
    backId: null, */
  });
  const [inputsDisabled, setInputsDisabled] = useState(true);

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [property]: value });
  };
  const toggleInputs = (event) => {
    event.preventDefault();
    setInputsDisabled(!inputsDisabled);
  };

  /* const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    setUserData({ ...userData, avatar: file });
  };
  const handleFrontIdChange = (event) => {
    const file = event.target.files[0];
    setUserData({ ...userData, frontId: file });
  };
  const handleBackIdChange = (event) => {
    const file = event.target.files[0];
    setUserData({ ...userData, backIdId: file });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("email", userData.email);
    formData.append("phone", userData.phone);
    formData.append("birthdate", userData.birthdate);
    formData.append("address", userData.address);
  }; */

  return (
    <div className="flex flex-col items-center h-full w-full pt-0.5">
      <div className="flex flex-col items-center ">
        <Image
          className="w-32 h-32 rounded-full shadow-lg m-2"
          alt="Avatar"
          src={Background}
        />
        <div>
          <button
            className="Sw-10 h-10 text-black  m-2 flex items-center"
            onClick={toggleInputs}>
            {inputsDisabled ? (
              <AiOutlineEdit className="w-19 h-19 " />
            ) : (
              <AiFillEdit className="w-19 h-19 " />
            )}
          </button>
        </div>
        <div className="justify-center items-center h-screen w-96 max-lg:w-110 p-4">
          <h1>User data</h1>
          <hr className="border-black" />
          <form action="">
            <div className="flex flex-col mt-3">
              <label htmlFor="name" className="text-labelRed">
                Name
              </label>
              <input
                type="text"
                className="rounded bg-grayLight h-10"
                onChange={handleChange}
                disabled={inputsDisabled}
              />
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="email" className="text-labelRed">
                Email
              </label>
              <input
                type="email"
                className="rounded bg-grayLight h-10"
                onChange={handleChange}
                disabled={inputsDisabled}
              />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="birthdate" className="text-labelRed">
                Birthdate
              </label>
              <input
                type="date"
                className="rounded bg-grayLight h-10"
                onChange={handleChange}
                disabled={inputsDisabled}
              />
            </div>
            <div>
              <h1 className="mt-5 mb-2">Important data</h1>
              <hr className="border-black" />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="phone" className="text-labelRed">
                Phone
              </label>
              <input
                type="addres"
                className="rounded bg-grayLight h-10"
                onChange={handleChange}
                disabled={inputsDisabled}
              />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="address" className="text-labelRed">
                Address
              </label>
              <input
                type="addres"
                className="rounded bg-grayLight h-10"
                onChange={handleChange}
                disabled={inputsDisabled}
              />
            </div>
            <div className="mt-3">
              <label htmlFor="" className="text-labelRed ">
                ID photo
              </label>
              <div className="flex flex-col items-center justify-center w-full bg-grayLight p-1">
                <label
                  htmlFor="frontIDInput"
                  className="flex flex-col items-center justify-center w-full h-60 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-grayLight m-3">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <GrAdd className="w-7 h-7" />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Image</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Frontal ID
                    </p>
                  </div>
                  <input
                    id="frontIDInput"
                    type="file"
                    className="hidden"
                    disabled={inputsDisabled}
                  />
                </label>

                <label
                  htmlFor="backIDInput"
                  className="flex flex-col items-center justify-center w-full h-60 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-grayLight m-3">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <GrAdd className="w-7 h-7" />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Image</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Back ID
                    </p>
                  </div>
                  <input
                    id="backIDInput"
                    type="file"
                    className="hidden"
                    disabled={inputsDisabled}
                  />
                </label>
              </div>
            </div>
            <button className=" w-full h-10 border text-white bg-greenPrimary rounded mt-2 mb-3">
              Save changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
