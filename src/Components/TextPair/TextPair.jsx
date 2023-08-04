const TextPair = ({ text1, text2, textArr }) => {
  return (
    <div className="flex items-center ">
      <h5 className="inline-block text-sm mb-0 mr-1 font-medium">{text1}</h5>
      <p className="inline text-xs text-darkViolet font-medium">{text2}</p>
    </div>
  );
};

export default TextPair;
