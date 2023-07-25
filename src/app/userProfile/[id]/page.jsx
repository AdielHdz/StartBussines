"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Background from "public/asset/avatar2.jpg";
import { GrAdd } from "react-icons/gr";
import { AiOutlineEdit } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import UserInfo from "../../../Components/userProfilecomponents/userInfo";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../../Redux/Fetching/UsersSlice/UserSlice";
import axios from "axios";
import { updateUser } from "../../../Redux/Fetching/UsersSlice/UserSlice";
import validation from "../../../Components/userProfilecomponents/validations";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

export default function UserProfile() {
  const user = useSelector((state) => state.user.userDetail);

  const [idSession, setIdSession] = useLocalStorage("idSession", "");
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
  });
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    address: "",
    birthdate: "",
    phone: "",
    country: "",
  });
  const [error, setErrors] = useState({});
  const [inputsDisabled, setInputsDisabled] = useState(true);
  const [changesSaved, setChangesSaved] = useState(true);

  useEffect(() => {
    dispatch(getUserById(idSession));
  }, [dispatch]);

  useEffect(() => {
    if (userSession) {
      setForm({
        fullName: userSession.fullName,
        email: userSession.email,
        rol: userSession.rol,
        birthdate: userSession.birthdate,
        phone: userSession.phone,
        country: userSession.country,
        address: userSession.address,
      });
    }
  }, [userSession]);

  console.log(userSession);

  const handleChange = (event) => {
    event.preventDefault();
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    setErrors(validation({ ...form, [property]: value }));
    setChangesSaved(false);
  };
  const toggleInputs = (event) => {
    event.preventDefault();
    setInputsDisabled(!inputsDisabled);
    if (changesSaved) {
      setInputsDisabled(!inputsDisabled);
    }
  };

  const handleSaveChanges = (event) => {
    event.preventDefault();

    axios
      .put(`http://localhost:3001/user/${idSession}`, form)
      .then((res) => {
        alert("Edited!");
        setInputsDisabled(true);
        setChangesSaved(true);
        dispatch(updateUser(form));
        setUserSession(form);
      })
      .catch((err) => alert("Sorry, try again"));
  };

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

          {inputsDisabled ? (
            <UserInfo form={form} />
          ) : (
            <form action="">
              <div className="flex flex-col mt-3">
                <label htmlFor="name" className="text-labelRed">
                  Fullname
                </label>
                <input
                  name="name"
                  type="text"
                  className="rounded bg-grayLight h-10"
                  onChange={handleChange}
                  disabled={inputsDisabled}
                  value={form.fullName}
                />
                {error.name && <p className="text-red-500">{error.name}</p>}
              </div>

              <div className="flex flex-col mt-3">
                <label htmlFor="email" className="text-labelRed">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="rounded bg-grayLight h-10"
                  onChange={handleChange}
                  disabled={inputsDisabled}
                  value={form.email}
                />
                {error.email && <p className="text-red-500">{error.email}</p>}
              </div>
              <div className="flex flex-col mt-3">
                <label htmlFor="birthdate" className="text-labelRed">
                  Birthdate
                </label>
                <input
                  name="birthdate"
                  type="date"
                  className="rounded bg-grayLight h-10"
                  onChange={handleChange}
                  disabled={inputsDisabled}
                  value={form.birthdate}
                />
                {error.birthdate && (
                  <p className="text-red-500">{error.birthdate}</p>
                )}
              </div>
              <div>
                <h1 className="mt-5 mb-2">Important data</h1>
                <hr className="border-black" />
              </div>
              <div className="flex flex-col mt-3">
                <label htmlFor="phone" className="text-labelRed">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="addres"
                  className="rounded bg-grayLight h-10"
                  onChange={handleChange}
                  disabled={inputsDisabled}
                  value={form.phone}
                />
                {error.phone && <p className="text-red-500">{error.phone}</p>}
              </div>
              <div className="flex flex-col mt-3">
                <label htmlFor="address" className="text-labelRed">
                  Country
                </label>
                <input
                  name="country"
                  type="country"
                  className="rounded bg-grayLight h-10"
                  onChange={handleChange}
                  disabled={inputsDisabled}
                  value={form.country}
                />
              </div>

              <div className="flex flex-col mt-3">
                <label htmlFor="address" className="text-labelRed">
                  Address
                </label>
                <input
                  name="address"
                  type="address"
                  className="rounded bg-grayLight h-10"
                  onChange={handleChange}
                  disabled={inputsDisabled}
                  value={form.address}
                />
              </div>
              {/* <div className="mt-3">
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
              </div> */}
              <button
                className=" w-full h-10 border text-white bg-greenPrimary rounded mt-2 mb-3"
                onClick={handleSaveChanges}>
                Save changes
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
