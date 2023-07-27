import Image from "next/image";
import IconEntrepreneur from "./entrepreneurIcon.svg";
const SelectWay = () => {
  console.log(IconEntrepreneur);
  return (
    <button className="flex flex-col items-center justify-center text-blacks border-2 shadow-cards rounded-xl p-2">
      <Image
        src={IconEntrepreneur}
        alt="icons"
        width={1000}
        height={1000}
        className="w-24  h-28 object-cover fill-red-800 "
      />
      <h5 className="text-sm">Entrepreneur</h5>
    </button>
  );
};

export default SelectWay;
