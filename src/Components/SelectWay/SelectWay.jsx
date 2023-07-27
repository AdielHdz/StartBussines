import OptionEntrepreneur from "./OptionEntrepreneur";
import OptionInvestor from "./OptionInvestor";
import { useState } from "react";

const SelectWay = () => {
  const [enIsActive, setEntrepreneur] = useState(false);
  const [inIsActive, setInvestor] = useState(false);

  const handleEntrepreneur = () => {
    setEntrepreneur(!enIsActive);
    setInvestor(false);
  };
  const handleInvestor = () => {
    setInvestor(!inIsActive);
    setEntrepreneur(false);
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
