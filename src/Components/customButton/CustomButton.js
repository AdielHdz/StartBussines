import PropTypes from "prop-types";
import "./CustomButton.css";
const CustomButton = ({ text, color, onClick }) => {
  return (
    <button className="btn-custom-blue" onClick={onClick}>
      {text}
    </button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default CustomButton;
