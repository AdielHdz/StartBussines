import PropTypes from 'prop-types';

const CustomButton = ({ text, color, onClick }) => {
  return (
    <button
        
      className={`w-full bg-${color}-500 hover:bg-${color}-600 text-white py-2 px-4 rounded mt-4`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

CustomButton.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  };
  

export default CustomButton;
