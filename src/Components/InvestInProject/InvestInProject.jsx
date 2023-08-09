import { useDispatch, useSelector } from "react-redux";
import DataCellsTable from "./DataCellsTable";
import { useEffect, useState } from "react";
import CloseButtonX from "../CloseButtonX/CloseButtonX";
import Image from "next/image";
import { BiArrowToTop, BiArrowToBottom } from "react-icons/bi";
import { GoGoal } from "react-icons/go";
import { GiStairsGoal } from "react-icons/gi";
import { SiMercadopago } from "react-icons/si";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import InputForm from "../InputForm/InputForm";
import {
  investInProject,
  activeFetchStatus,
} from "../../Redux/Fetching/Investment/InvestmentSlice";

import Loading from "../Loading/Loading";
const InvestInProyect = ({ setInvestmenView }) => {
  const dispatch = useDispatch();
  const projectData = useSelector((state) => state.project.project);
  const [amount, setAmount] = useState("");
  const [inputIsActive, setInputIsActive] = useState(false);
  const [errorAmount, setErrorAmount] = useState("");
  const [disabledPayBtn, setDisabledPayBtn] = useState(true);
  const userId = localStorage.getItem("idSession");

  const fetchStatus = useSelector((state) => state.investment.fetchStatus);
  console.log(userId);
  const handlerInputAmount = (e) => {
    const inputAmount = e.target.value.replace("$", "");

    setAmount(inputAmount);
    console.log(inputAmount, errorAmount);

    if (!inputAmount) {
      setErrorAmount("");
    } else if (isNaN(inputAmount)) {
      setErrorAmount("Solo numeros");
      setDisabledPayBtn(true);
      return setAmount("");
    } else if (inputAmount < projectData.min_amount) {
      setErrorAmount(
        `Invierte al menos lo establecido! $${projectData.min_amount}`
      );
      setDisabledPayBtn(true);
    } else if (inputAmount > projectData.max_amount) {
      setErrorAmount(
        `No puedes invertir más de lo establecido! $${projectData.max_amount}`
      );
      setDisabledPayBtn(true);
    } else {
      setErrorAmount("");
      setDisabledPayBtn(false);
    }
  };

  /* useEffect(() => {}, [disabledPayBtn]); */

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
              name={"Goal amount"}
              data={`$${projectData.goal_amount} usd`}
              Icons={GoGoal}
              iconColor="text-redError"
            />
            <DataCellsTable
              name={"Collected amount"}
              data={`$${projectData.collected_amount} usd`}
              Icons={GiStairsGoal}
              iconColor="text-second"
            />
            <DataCellsTable
              name={"Max investment"}
              data={`$${projectData.max_amount} usd`}
              Icons={BiArrowToTop}
              iconColor="text-yellow-500"
            />
            <DataCellsTable
              name={"Min investment"}
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
          At this time you can make your investment with your wallet payment
          market
        </p>

        <button
          onClick={() => {
            dispatch(activeFetchStatus());
            dispatch(
              investInProject({
                contribution: Number(amount),
                ProjectId: projectData.id,
                UserId: userId,
              })
            );
          }}
          className={` ${
            disabledPayBtn ? "bg-darkGray" : "bg-mp hover:bg-blacks "
          } flex justify-center items-center gap-2  transition duration-200 text-whites font-medium py-3 rounded-md`}
          disabled={disabledPayBtn}
        >
          {fetchStatus === "pending" ? (
            <Loading
              height={7}
              width={7}
              borderWeight={2}
              border_t_color={"border-t-mp"}
            />
          ) : (
            <p className="relative ">
              Mercadopago
              <SiMercadopago className="absolute text-whites w-7 h-7 -top-0.5 -right-9 " />
            </p>
          )}
        </button>
      </article>
    </section>
  );
};

export default InvestInProyect;
