import React, { useState } from "react";

const PaginationLogic = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      onPageChange(currentPage + 1);
      
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      onPageChange(currentPage - 1);
     
    }
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        onClick={handlePrevPage}
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
        onClick={handleNextPage}
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
