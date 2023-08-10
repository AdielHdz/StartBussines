"use client";
import React, { useEffect, useState } from "react";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";
import Loading from "../../Components/Loading/Loading";
import { useSelector, useDispatch } from "react-redux";
export default function Register() {
  const fetchStatus = useSelector((state) => state.userReal.fetchStatus);
  const [userStatus, setUserStatus] = useState("");
  useEffect(() => {
    setUserStatus(localStorage.getItem("userFetch"));
  }, []);

  return (
    <>
      {/*    {fetchStatus === "pending" && (
        <div className="absolute bg-black bg-opacity-50 top-0 left-0 w-full h-screen flex items-center justify-center">
          <Loading
            borderWeight={4}
            border_t_color={"border-t-primar"}
            height={20}
            width={20}
            loadingText={true}
          />
        </div>
      )} */}

      <div>
        <RegisterForm />
      </div>
    </>
  );
}
