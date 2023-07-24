import InversionistaCard from "./Cards/InversionistaCard";
import EmprendedorCard from "./Cards/EmprendedorCard";
import Button from "./Cards/Button/Button";
/* import Logo from "../../../public/asset/DealUp.png";
import ilustration from "../../../public/asset/imageLanding.png"; */
import Image from "next/image";
const BACKGROUND_IMAGE_URL =
  "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWgelHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80";

const TEXT = {
  title: "DEAL UP!",
  description: `
  Around the earth there are many people who have excellent business ideas but not all can carry them out, the economic question does not favor us all.
  That's why Deal Up! connects people who want to generate income while helping others start their ideas.
  Deal Up! it is a place where investors and entrepreneurs win.
  `,
};

const LandingPage = () => {
  return (
    <div>
      <div className="  w-full py-10 bg-orange-400  flex items-center  justify-center"></div>
      <div>
        <Image
          src="/asset/DealUp.png"
          alt="Deal Up!"
          width={2000}
          height={2000}
          className="w-52 bg-pink-400"
        />
      </div>

      <div className="  w-full flex items-center justify-center">
        <Image
          src="/asset/imageLanding.png"
          alt="Deal Up!"
          width={1080}
          height={1080}
          className=" w-3/4 bg-purple-800"
        />
      </div>

      <div className="flex flex-col items-center justify-center text-white p-2">
        <div className="container mb-10">
          <p className=" text-black text-center  font-medium">
            Around the earth there are many people who have excellent business
            ideas but not all can carry them out, the economic question does not
            favor us all.
            <br />
            <br />
            That's why Deal Up! connects people who want to generate income
            while helping others start their ideas.
            <br />
            <br />
            Deal Up! it is a place where investors and entrepreneurs win.
          </p>
        </div>
        <div className="bg-yellow-400 w-full">
          <EmprendedorCard />
          <InversionistaCard />
        </div>
      </div>

      <div className="bottom-0 left-0 w-full flex justify-center items-center bg-primary p-4">
        <Button text="LOGIN" href="/logIn" className="p-1 text-sm" />
        <Button text="SIGN IN" href="/register" className="p-1 text-sm" />
      </div>
    </div>
  );
};

export default LandingPage;
