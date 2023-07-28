import Image from "next/image";
import IconEntrepreneur from "./entrepreneurIcon.svg";

const OptionEntrepreneur = ({ handleEntrepreneur, selected }) => {
  return (
    <button
      onClick={handleEntrepreneur}
      className={` ${
        selected ? "shadow-cards scale-105" : "shadow-cardsInset"
      } flex flex-col items-center justify-center  text-second  transform transition-all duration-300 hover:border-none rounded-xl px-2 py-3 w-24 h-28 md:w-32  md:h-40`}
    >
      <Image
        src={IconEntrepreneur}
        alt="icons"
        width={1000}
        height={1000}
        className="w-16 h-20 md:w-24 md:h-28 object-cover  "
      />
      <h5
        className={` text-xs md:text-sm font-light w-full h-full flex items-end justify-center  m-0 text-center`}
      >
        Entrepreneur
      </h5>
    </button>
  );
};

export default OptionEntrepreneur;
