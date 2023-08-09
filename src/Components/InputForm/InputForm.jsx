import { AiFillCheckCircle } from "react-icons/ai";
import { PiWarningCircleLight } from "react-icons/pi";
import { MdOutlineError } from "react-icons/md";

const InputForm = (props) => {
  const {
    amount,
    errorAmount,
    handlerInputAmount,
    inputIsActive,
    setInputIsActive,
  } = props;

  return (
    <div className=" flex flex-col text-blacks  gap-2">
      <label
        htmlFor="amount"
        className=" text-darkGray  flex flex-col font-medium"
      >
        How much are you going to invest?
        <span className=" leading-helpers text-xs font-light text-yellowWarning">
          <PiWarningCircleLight className="inline-block mr-1   text-lg  " />
          Your amount to invest must be in USD dollars, Mercadopago will handle
          the conversion.
        </span>
      </label>
      <div className="relative">
        <input
          type="text"
          id="amount"
          name="amount"
          value={`$${amount}`}
          placeholder="$"
          onChange={handlerInputAmount}
          onFocus={() => {
            setInputIsActive(true);
            console.log("Acabo de enfocar");
          }}
          onBlur={() => {
            setInputIsActive(false);
            console.log("Acabo de desenfocar");
          }}
          className={` w-full placeholder:text-xs   
          ${
            !inputIsActive &&
            !amount &&
            "outline-1 outline-darkGray border-2  border-gray-600"
          }
          ${
            inputIsActive &&
            !amount &&
            "outline-1 outline-darkGray border-2  border-gray-600"
          }
          ${
            errorAmount &&
            amount &&
            "outline-1 outline-redError border-2  border-redError"
          }
          ${
            !errorAmount &&
            amount &&
            "outline-1 outline-green-600 border-2  border-green-600 "
          }
            rounded-md h-12 px-2 font-medium  `}
        />
        {!errorAmount && amount.length > 0 && (
          <AiFillCheckCircle className="text-green-600 text-2xl absolute top-1/2 transform -translate-y-1/2 right-3 " />
        )}
        {errorAmount && amount.length > 0 && (
          <MdOutlineError className="text-redError text-2xl absolute top-1/2 transform  -translate-y-1/2 right-3 " />
        )}
      </div>
      <p className="text-redError text-xs">{errorAmount}</p>
    </div>
  );
};

export default InputForm;
