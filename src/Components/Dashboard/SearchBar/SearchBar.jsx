import React, { useState } from 'react';

const SearchBar = ({ onSearch, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded-l px-2 py-1 focus:outline-none focus:border-blue-500"
        placeholder={placeholder}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-1 rounded-r"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
