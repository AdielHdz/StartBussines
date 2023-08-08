"use client";

import React, { useState } from "react";

const PaginationLogic = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    const isValidPage = page >= 1 && page <= totalPages;
    if (isValidPage) {
      setCurrentPage(page);
      onPageChange(page);
    }
  };

  const isPrevButtonDisabled = currentPage === 1;
  const isNextButtonDisabled = currentPage === totalPages;

  const prevButtonClassName = isPrevButtonDisabled
    ? "bg-gray-300 cursor-not-allowed"
    : "bg-teal-600 hover:bg-teal-700 cursor-pointer";

  const nextButtonClassName = isNextButtonDisabled
    ? "bg-gray-300 cursor-not-allowed"
    : "bg-teal-600 hover:bg-teal-700 cursor-pointer";

  return (
    <div className="flex flex-col items-center justify-center mt-4 sm:flex-row">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={isPrevButtonDisabled}
        className={`px-4 py-2 rounded-md ${prevButtonClassName} text-white`}
      >
        Prev
      </button>
      <span className="mx-4 font-bold">{currentPage}</span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={isNextButtonDisabled}
        className={`px-4 py-2 rounded-md ${nextButtonClassName} text-white`}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationLogic;
