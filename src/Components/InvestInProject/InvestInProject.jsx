import { useSelector } from "react-redux";
import DataCellsTable from "./DataCellsTable";
import { useState } from "react";
import CloseButtonX from "../CloseButtonX/CloseButtonX";
import Image from "next/image";
import { BiArrowToTop, BiArrowToBottom } from "react-icons/bi";
import { GoGoal } from "react-icons/go";
import { GiStairsGoal } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import InputForm from "../InputForm/InputForm";
const InvestInProyect = ({ setInvestmenView }) => {
  const projectData = useSelector((state) => state.project.project);
  const [amount, setAmount] = useState("");
  const [inputIsActive, setInputIsActive] = useState(false);
  const [errorAmount, setErrorAmount] = useState("");

  const handlerInputAmount = (e) => {
    const inputAmount = e.target.value.replace("$", "");

    setAmount(inputAmount);

    if (!inputAmount) {
      setErrorAmount("");
    } else if (isNaN(inputAmount)) {
      setErrorAmount("Solo numeros");
      return setAmount("");
    } else if (inputAmount < projectData.min_amount) {
      setErrorAmount(
        `Invierte al menos lo establecido! $${projectData.min_amount}`
      );
    } else if (inputAmount > projectData.max_amount) {
      setErrorAmount(
        `No puedes invertir más de lo establecido! $${projectData.max_amount}`
      );
    } else {
      setErrorAmount("");
    }
  };
  return (
    <section className="bg-blacks bg-opacity-70 fixed z-20 w-full h-screen top-0 left-0 flex justify-center items-center py-2 px-3">
      <article className="relative max-w-registerMd bg-whites w-full flex flex-col gap-3 p-3 font-light">
        <CloseButtonX handleCloseWindow={setInvestmenView} />
        <div className=" flex justify-center">
          <Image
            src={"/asset/DealUp.png"}
            width={2000}
            height={2000}
            className=" w-36 "
            alt="logo"
          />
        </div>
        <h2 className="text-center font-medium text-lg  text-blacks">
          Investmen payment detail
        </h2>

        <table className=" ">
          <tbody className=" ">
            <DataCellsTable
              name={"Project"}
              data={projectData.name}
              Icons={AiOutlineFundProjectionScreen}
              iconColor="text-primar"
            />

            <DataCellsTable
              name={"Cantidad meta"}
              data={`$${projectData.goal_amount} usd`}
              Icons={GoGoal}
              iconColor="text-redError"
            />
            <DataCellsTable
              name={"Cantidad reunida"}
              data={`$${projectData.collected_amount} usd`}
              Icons={GiStairsGoal}
              iconColor="text-second"
            />
            <DataCellsTable
              name={"Inversion máxima"}
              data={`$${projectData.max_amount} usd`}
              Icons={BiArrowToTop}
              iconColor="text-yellow-500"
            />
            <DataCellsTable
              name={"Inversion minima"}
              data={`$${projectData.min_amount} usd`}
              Icons={BiArrowToBottom}
              iconColor="text-orangeMedium"
            />
          </tbody>
        </table>
        <InputForm
          amount={amount}
          setAmount={setAmount}
          errorAmount={errorAmount}
          setErrorAmount={setErrorAmount}
          handlerInputAmount={handlerInputAmount}
          min_amount={projectData.min_amount}
          max_amount={projectData.max_amount}
          inputIsActive={inputIsActive}
          setInputIsActive={setInputIsActive}
        />
        <p className="text-xs text-center">
          En este momento puedes hacer tu inversion con tu mercado pago wallet
        </p>

        <button>Mercadopago</button>
      </article>
    </section>
  );
};

export default InvestInProyect;
