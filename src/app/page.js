"use client";
import Image from "next/image";
import Ilustration from "../../public/asset/imageLanding.png";
import Logo from "../../public/asset/DealUp.png";
import Cards from "../Components/Landing/Cards";
import Button from "../Components/customButton/Button";
import { navigateTo } from "../utils/navigate";
import { CiLocationArrow1 } from "react-icons/ci";
import Link from "next/link";

const Landing = () => {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center py-10 md:py-5">
        <Image src={Logo} alt="Deal Up!" className="w-3/4 md:w-1/3 " />
        <Image src={Ilustration} alt="Deal Up!" className="w-3/4 md:w-1/3" />
      </div>

      <div className="mb-10 flex items-center justify-center">
        <p className=" text-center font-medium md:w-1/2 px-3 text-sm">
          Around the earth there are many people who have excellent business
          ideas but not all can carry them out, the economic question does not
          favor us all.
          <br />
          <br />
          That's why Deal Up! connects people who want to generate income while
          helping others start their ideas.
          <br />
          <br />
          Deal Up! it is a place where investors and entrepreneurs win.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 justify-center items-center px-3">
          <div className="flex  gap-3 h-10 w-2/3 md:w-1/3  ">
            <Button text="Login" doThis={navigateTo} rute="logIn" />
            <Button text="Register" doThis={navigateTo} rute="register" />
          </div>
          <div className="  h-10 flex justify-center items-center gap-1 w-full hover:scale-110 transform transition-transform duration-200 hover:text-orangeMedium text-center font-medium text-second underline  ">
            <Link href="/home"> Just I wanna know Deal Up!</Link>
            <CiLocationArrow1 className="inline-block text-lg" />
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center justify-center text-white p-2">
          <h3 className="text-darkGray">History our clients</h3>
          <Cards />
        </div>
      </div>

      <div className=" w-full h-32 flex justify-center items-center text-whites  bg-darkGray p-4">
        Footer
      </div>
    </div>
  );
};

export default Landing;
