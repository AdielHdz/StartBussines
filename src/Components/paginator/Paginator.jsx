import React from "react";

const Pagination = ({ currentPage }) => {
  return (
    <div className="flex items-center justify-center mt-4">
      <span className="px-4 py-2 rounded-md bg-teal-600 text-white font-bold">
        {currentPage}
      </span>
    </div>
  );
};

export default Pagination;
