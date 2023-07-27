import Image from "next/image";
import IconEntrepreneur from "./entrepreneurIcon.svg";
import IconInvestor from "./investorIcon.svg";

const SelectWay = ({ entrepreneur, investor }) => {
  if (entrepreneur) {
    return (
      <button className="flex flex-col items-center justify-center border text-blacks hover:shadow-cards hover:scale-105 transform transition-all duration-200 rounded-xl p-2 w-32">
        <Image
          src={IconEntrepreneur}
          alt="icons"
          width={1000}
          height={1000}
          className="w-24 h-28 object-cover "
        />
        <h5 className="text-sm w-full text-center">Entrepreneur</h5>
      </button>
    );
  } else if (investor) {
    return (
      <button className="flex flex-col items-center justify-center border text-blacks hover:shadow-cards hover:scale-105 transform transition-all duration-200 rounded-xl w-32  h-40">
        <Image
          src={IconInvestor}
          alt="icons"
          width={1000}
          height={1000}
          className=" w-20 h-20 object-cover "
        />
        <h5 className="text-sm w-full text-center">Investor</h5>
      </button>
    );
  }
};

export default SelectWay;
