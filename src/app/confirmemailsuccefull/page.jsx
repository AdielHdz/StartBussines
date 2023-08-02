const ConfirmEmailSuccefull = () => {
    return (
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-green-600 sm:text-3xl">
            Email Confirmed Successfully
          </h1>
  
          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Congratulations! Your email has been successfully confirmed.
          </p>
  
          <div className="flex justify-center mt-6">
            <svg
              className="h-12 w-12 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  };
  
  export default ConfirmEmailSuccefull;
  