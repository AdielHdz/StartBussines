"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import DefautImage from "public/asset/avatar2.jpg";
import { AiOutlineEdit } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import UserInfo from "../../../Components/ProfileComponents/userInfo";
import axios from "axios";
import validation from "../../../Components/ProfileComponents/validations";
import { isBrowser } from "../../../utils/isBrowser";

export default function UserProfile() {
  const [userSession, setUserSession] = useState({});

  const [error, setErrors] = useState({});
  const [inputsDisabled, setInputsDisabled] = useState(true);
  const [changesSaved, setChangesSaved] = useState(true);

  useEffect(() => {
    if (isBrowser) {
      const user = JSON.parse(localStorage.getItem("userData"));
      setUserSession(user);
    }
  }, []);

  /*   useEffect(() => {
    setForm({
      fullName: userSession.fullName,
      email: userSession.email,
      rol: userSession.rol,
      birthdate: userSession.birthdate,
      phone: userSession.phone,
      country: userSession.country,
    });
  }, [userSession]); */

  console.log(userSession);

  const handleChange = (event) => {
    event.preventDefault();
    const property = event.target.name;
    const value = event.target.value;
    /* setForm({ ...form, [property]: value }); */
    setUserSession({ ...userSession, [property]: value });
    setErrors(validation({ ...userSession, [property]: value }));
    setChangesSaved(false);
  };
  const toggleInputs = (event) => {
    event.preventDefault();
    setInputsDisabled(!inputsDisabled);
    if (changesSaved) {
      setInputsDisabled(!inputsDisabled);
    }
  };

  /* const handleImageUpload = async (event) => {
    try {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("avatar", file);
      const response = await axios.post(
        "http://localhost:3001/gallery/file",
        formData
      );
      const avatarUrl = response.data.url;
      setForm({ ...form, avatar: avatarUrl });
      setUserSession({ ...userSession, avatar: avatarUrl });
      setUser;
    } catch (error) {
      console.error("Error uploading avatar:", error);
    }
  }; */

  const handleSaveChanges = (event) => {
    event.preventDefault();

    axios
      .put(`http://localhost:3001/user/${userSession.idSession}`, userSession)
      .then((res) => {
        alert("Edited!");
        setInputsDisabled(true);
        setChangesSaved(true);
        setUserSession(...userSession);
        localStorage.setItem("userData", JSON.stringify(...userSession));
      })
      .catch((err) => alert("Sorry, try again"));
  };

  return (
    <div className="flex flex-col items-center h-full w-full pt-0.5">
      <div className="flex flex-col items-center ">
        <Image
          className="w-32 h-32 rounded-full shadow-lg m-2"
          alt="Avatar"
          src={DefautImage}
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
            <UserInfo form={userSession} />
          ) : (
            <form action="">
              <div>
                {/* <div>
                  <label htmlFor="avatar" className="text-labelRed">
                    Avatar
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={inputsDisabled}
                  />
                </div> */}
                <p className="text-labelRed m-0">Fullname</p>
                <p className="rounded bg-grayLight h-10 w-full pt-2">
                  {userSession.fullName}
                </p>
              </div>
              <div>
                <p className="text-labelRed m-0">Email</p>
                <p className="rounded bg-grayLight h-10 w-full pt-2">
                  {userSession.email}
                </p>
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
                  value={userSession.birthdate}
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
                  value={userSession.phone}
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
                  value={userSession.country}
                />
              </div>

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
