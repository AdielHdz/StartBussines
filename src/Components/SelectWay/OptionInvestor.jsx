import Image from "next/image";
import IconInvestor from "./investorIcon.svg";
const OptionInvestor = ({ handleInvestor, selected }) => {
  return (
    <button
      onClick={handleInvestor}
      className={` ${
        selected ? "shadow-cards scale-105 " : "shadow-cardsInset"
      } flex flex-col items-center justify-center  text-darkViolet  transform transition-all duration-300 hover:border-none rounded-xl px-2 py-3 w-24 h-28 md:w-32  md:h-40`}
    >
      <Image
        src={IconInvestor}
        alt="icons"
        width={1000}
        height={1000}
        className=" w-14 h-14 md:w-20 md:h-20 object-cover  "
      />
      <h5
        className={` text-xs md:text-sm font-light w-full h-full flex items-end justify-center m-0 text-center`}
      >
        Investor
      </h5>
    </button>
  );
};

export default OptionInvestor;
