import OptionEntrepreneur from "./OptionEntrepreneur";
import OptionInvestor from "./OptionInvestor";
import { useState } from "react";

const SelectWay = ({ onRoleSelect }) => {
  const [enIsActive, setEntrepreneur] = useState(false);
  const [inIsActive, setInvestor] = useState(false);

  const handleEntrepreneur = () => {
    setEntrepreneur(true);
    setInvestor(false);
    onRoleSelect("entrepreneur");
    localStorage.setItem("rol", "entrepreneur");
  };
  const handleInvestor = () => {
    setInvestor(true);
    setEntrepreneur(false);
    onRoleSelect("investor");
    localStorage.setItem("rol", "investor");
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
