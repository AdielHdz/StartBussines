const CommentsSection = ({ name }) => {
  return (
    <div>
      <label htmlFor="">{name}</label>
      <input
        type="text"
        placeholder="Tell your opinion"
        className="w-full h-inputs border-2 rounded-lg outline-none border-darkGray placeholder:text-grayLightMedium placeholder:font-light pl-1.5 font-medium text-sm text-darkGray"
      />
    </div>
  );
};

export default CommentsSection;
