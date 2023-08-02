const Loading = ({ width, height, borderWeight, loadingText }) => {
  // Podemos personalizar nuestro loading dependiendo del lugar donde lo necesitemos
  return (
    <div className="flex items-center justify-center">
      {loadingText ? (
        <p className="text-sm absolute animate-pulse text-darkGray">Loading</p>
      ) : (
        <></>
      )}

      <div
        className={` border-${borderWeight}  border-t-primar border-grayMedium rounded-full w-${width} h-${height} animate-spin-slow`}
      ></div>
    </div>
  );
};

export default Loading;
