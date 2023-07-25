import Image from "next/image";
import Ilustration from "../../public/asset/imageLanding.png";
import Logo from "../../public/asset/DealUp.png";
import SliderCards from "../Components/LandingComponents/SliderCards";
import EmprendedorCard from "../Components/Landing/EmprendedorCard";
import InversionistaCard from "../Components/Landing/InversionistaCard";

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

const Landing = () => {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center py-10">
        <Image src={Logo} alt="Deal Up!" className="w-3/4 " />
        <Image src={Ilustration} alt="Deal Up!" className="w-3/4" />
      </div>

      <div className="flex flex-col items-center justify-center text-white p-2">
        <div className="mb-10">
          <p className="text-black text-center  font-medium">
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

        <EmprendedorCard />
      </div>

      <div className="bottom-0 left-0 w-full flex justify-center items-center bg-primary p-4"></div>
    </div>
  );
};

export default Landing;
