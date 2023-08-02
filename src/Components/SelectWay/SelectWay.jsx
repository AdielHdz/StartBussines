import OptionEntrepreneur from "./OptionEntrepreneur";
import OptionInvestor from "./OptionInvestor";
import { useState } from "react";

const SelectWay = () => {
  const [enIsActive, setEntrepreneur] = useState(false);
  const [inIsActive, setInvestor] = useState(false);

  const handleEntrepreneur = () => {
    setEntrepreneur(true);
    setInvestor(false);
    localStorage.setItem("role", "entrepreneur");
  };
  const handleInvestor = () => {
    setInvestor(true);
    setEntrepreneur(false);
    localStorage.setItem("role", "investor");
  };
  return (
    <>
      <OptionEntrepreneur
        selected={enIsActive}
        handleEntrepreneur={handleEntrepreneur}
      />
      <OptionInvestor selected={inIsActive} handleInvestor={handleInvestor} />
    </>
  );
};

export default SelectWay;
