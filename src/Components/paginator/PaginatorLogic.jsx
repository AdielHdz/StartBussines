"use client"

import React, { useState } from "react";

const PaginationLogic = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      onPageChange(page);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-4 sm:flex-row">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-md ${
          currentPage === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-teal-600 hover:bg-teal-700 cursor-pointer"
        } text-white`}
      >
        Prev
      </button>
      <span className="mx-4 font-bold">{currentPage}</span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-md ${
          currentPage === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-teal-600 hover:bg-teal-700 cursor-pointer"
        } text-white`}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationLogic;
