import Image from "next/image";
import BackgroundImage from "../../../public/asset/andrea-de-santis-n8ipsZZ5Pww-unsplash.jpg";
import { AiFillCar } from "react-icons/ai";
import Logo from "../../../public/asset/DealUp.png";

const Background = () => {
  console.log(Logo);
  return (
    <div className="h-screen w-full bg-red-400  pt-0.5">
      <div className=" absolute z-10 w-full h-full bg-black opacity-10"></div>
      <Image
        src={BackgroundImage}
        alt="background"
        width={0}
        height={0}
        className="absolute h-full object-cover"
      />
      <div
        className="relative z-20
            "
      >
        <h5 className=" text-gray-800 text-center mt-44">Hola bro</h5>
        <AiFillCar className=" text-3xl text-primary" />
        <div className="bg-white">
          <label htmlFor="">Email</label>
          <input type="text" className="w-full border-2 border-blue-300" />
        </div>
        <Image src={Logo} alt="Hola" className="w-52 bg-orange-800" />
      </div>
    </div>
  );
};

export default Background;
