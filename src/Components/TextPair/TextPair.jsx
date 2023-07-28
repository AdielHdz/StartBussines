const TextPair = ({ text1, text2, textArr }) => {
  return (
    <div>
      <h5 className="inline-block text-sm mb-0 mr-1 font-bold">{text1}</h5>
      <p className="inline text-xs text-darkViolet font-bold">{text2}</p>
      {/*       <div className="inline-block">
        {textArr?.map((text) => (
          <p key={text} className="inline-block text-sm mr-1">
            {text},
          </p>
        ))}
      </div> */}
    </div>
  );
};

export default TextPair;
