import PropTypes from "prop-types";
import "./CustomButton.css";

const CustomButton = ({ text, color, onClick, disabled }) => {
  let buttonClass = "py-2 px-4 rounded font-bold";
  
  switch (color) {
    case "blue":
      buttonClass += " bg-blue-500 text-white";
      if (disabled) {
        buttonClass += " opacity-50 cursor-not-allowed";
      }
      break;
    // Añadir otros colores si es necesario
    default:
      buttonClass += " bg-gray-300";
  }

  return (
    <div className="flex justify-center items-center">
        <button className={`${buttonClass} m-4`} disabled={disabled} onClick={onClick}>
            {text}
        </button>
    </div>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default CustomButton;
