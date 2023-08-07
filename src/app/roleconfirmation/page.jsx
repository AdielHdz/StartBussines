"use client";
import OptionEntrepreneur from "../../Components/SelectWay/OptionEntrepreneur";
import OptionInvestor from "../../Components/SelectWay/OptionInvestor";
import { useState } from "react";
import logo from "../../../public/asset/DealUp.png";
import Image from "next/image";
const SelectWay = () => {
  const [enIsActive, setEntrepreneur] = useState(false);
  const [inIsActive, setInvestor] = useState(false);

  const handleEntrepreneur = () => {
    setEntrepreneur(true);
    setInvestor(false);
    localStorage.setItem("role", "entrepreneur");
  };
  const handleInvestor = () => {
    setInvestor(true);
    setEntrepreneur(false);
    localStorage.setItem("role", "investor");
  };
  return (
    <div className="w-screen h-screen p-20 ">
      <div className="flex justify-center  w-100">
        <Image className="flex justify-center  w-80" src={logo} width={100} />
      </div>
      <div className>
        <div className="flex flex-col justify-center items-center mb-10 w-full">
          <h1 className="text-orangeMedium ">Welcome!</h1>
          <label htmlFor="fullName" className="text-orangeMedium  ">
            Please choose a role to continue
          </label>
        </div>
        <div className="flex justify-center items-center gap-3 rounded-xl py-2">
          <OptionEntrepreneur
            selected={enIsActive}
            handleEntrepreneur={handleEntrepreneur}
          />
          <OptionInvestor
            selected={inIsActive}
            handleInvestor={handleInvestor}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectWay;
