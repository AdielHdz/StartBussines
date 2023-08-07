const CloseButtonX = ({ handleCloseWindow }) => {
  return (
    <button
      onClick={() => handleCloseWindow(false)}
      className="  absolute right-4 top-4 rounded-littleBox flex w-7 h-7 items-center justify-center hover:scale-110 hover:border-redError hover:border-2 translate transition duration-200"
    >
      <div className="h-5  border-1 border-redError transform -rotate-45 absolute"></div>
      <div className="h-5  border-1 border-redError transform rotate-45 absolute"></div>
    </button>
  );
};

export default CloseButtonX;
