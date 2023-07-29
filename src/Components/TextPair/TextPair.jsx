const TextPair = ({ text1, text2, textArr }) => {
  return (
    <div>
      <h5 className="inline-block text-base mb-0 mr-1 font-regular ">
        {text1}
      </h5>
      <p className="inline text-xs text-darkViolet font-bold">{text2}</p>
    </div>
  );
};

export default TextPair;
