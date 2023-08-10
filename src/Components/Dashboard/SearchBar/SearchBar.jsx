import React, { useState } from 'react';

const SearchBar = ({ onSearch, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    onSearch('');
  };

  
  return (
    <>
      <div className="flex items-center relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-full px-4 py-2 focus:outline-none focus:border-blue-500"
          placeholder={placeholder}
        />
        {searchTerm && (
          <button
            onClick={handleClearSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent text-red-500 rounded-full p-2 font-bold"
          >
            x
          </button>
        )}
      </div>
      <div className="flex justify-center mt-2">
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBar;
