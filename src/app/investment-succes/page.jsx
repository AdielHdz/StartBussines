"use client";
import { FcMoneyTransfer } from "react-icons/fc";
import { BsArrowRight } from "react-icons/bs";
import { BsCheckLg, BsCheckCircle } from "react-icons/bs";
import { useRouter } from "next/navigation";

import { AiOutlineCheckCircle } from "react-icons/ai";
import Link from "next/link";
import { useEffect, useState } from "react";
const Investment_Succes = () => {
  const router = useRouter();
  const [timeReturn, setTimeReturn] = useState(100000);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTimeReturn((timeReturn) => timeReturn - 1);
      if (timeReturn === 0) {
        setTimeReturn(0);
        clearInterval(intervalo);
        router.push("/home");
      }
    }, 1000);

    return () => clearInterval(intervalo);
  }, [timeReturn]);
  return (
    <article className="flex  items-center justify-center h-screen w-full relative  -z-10 p-2 ">
      <section className="flex flex-col justify-evenly items-center px-3  bg-whites-600 md:shadow-cards h-succesInvestment w-full max-w-registerMd rounded-lg">
        <BsCheckCircle className="w-32 h-32  text-green-600" />
        <div className="flex flex-col items-center w-full  text-green-600">
          <FcMoneyTransfer className="w-8 h-8" />
          <h2 className="text-lg font-light  text-center">
            Investment succesfully
          </h2>
          <p className="text-center text-sm text-darkGray ">
            Now you can give an opinion about the project, earn money and
            continue helping entrepreneurs.
          </p>
        </div>
        <div className="w-full flex justify-evenly items-center">
          <Link
            href="/investments"
            className="text-green-600 border-2 border-green-600 px-3 py-2 rounded-md hover:bg-primar hover:text-whites transition duration-200 transform hover:scale-105"
          >
            My investments
          </Link>
          <p className=" text-green-600 ">
            {timeReturn}s <BsArrowRight className="inline-block" /> Home
          </p>
        </div>
      </section>
    </article>
  );
};

export default Investment_Succes;
