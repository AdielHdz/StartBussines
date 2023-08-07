import React, { useState } from 'react';
import { FiCopy, FiRefreshCcw } from 'react-icons/fi';

const AllProjects = ({ projects, onProjectClick, filter, onFilterChange, onRefresh }) => {
  const [sortDirection, setSortDirection] = useState("desc");
  const [selectedStatus, setSelectedStatus] = useState(null);

  const handleFilterClick = (value) => {
    if (value === "Most Recent") {
      setSortDirection(sortDirection === "desc" ? "asc" : "desc");
    } else {
      onFilterChange(value);
    }
  };

  const handleStatusFilter = (status) => {
    setSelectedStatus(status);
  };

  const sortedProjects = projects.filter((project) => {
    if (selectedStatus) {
      return project.status === selectedStatus;
    }
    return true; 
  }).sort((a, b) => {
    if (sortDirection === "desc") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else {
      return new Date(a.createdAt) - new Date(b.createdAt);
    }
  });

  const arrowIcon = sortDirection === "desc" ? "▼" : "▲";
  const mostRecentText = sortDirection === "desc" ? "Most Recent ▼" : "Oldest First ▲";
  const statusFilterText = selectedStatus ? ` - Status - ${selectedStatus}` : "";

  const handleCopyId = (id) => {
    try {
      const tempInput = document.createElement("input");
      tempInput.value = id;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      console.log(`ID "${id}" copied to clipboard!`);
      alert(`ID "${id}" copied to clipboard!`);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <div className="container mx-auto md:min-w-[700px] relative">
      <h2 className="text-lg font-semibold mb-4">All Projects - Filtered by: {mostRecentText} {statusFilterText}</h2>
      <button
        className="absolute top-0 right-0 p-2 text-blue-500"
        onClick={onRefresh}
      >
        <FiRefreshCcw />
      </button>
      <div className="mb-4 flex flex-col md:flex-row md:items-center justify-center">
        <button
          className={`py-2 px-4 font-semibold rounded ${
            "Most Recent" === "Most Recent" ? "bg-blue-500 text-white" : "bg-gray-300"
          } md:mx-2`}
          onClick={() => handleFilterClick("Most Recent")}
        >
          {mostRecentText}
        </button>
        <div className="ml-2 mt-2">
          <select
            className="px-2 py-1 rounded bg-gray-100"
            onChange={(e) => handleStatusFilter(e.target.value)}
            value={selectedStatus || ""}
          >
            <option value="">Filter by Status</option>
            <option value="Inactive">Inactive</option>
            <option value="Rejected">Rejected</option>
            <option value="Pending">Pending</option>
            <option value="Active">Active</option>
          </select>
        </div>
      </div>
      <ul>
        {sortedProjects.map((project) => (
          <li key={project.id} onClick={() => onProjectClick(project)} className="cursor-pointer mb-2 border border-gray-400 rounded-lg px-4 py-2 hover:text-blue-500">
            {project.name}
            <br />
            Id: {project.id}
            <button className="ml-2 text-blue-500" onClick={(e) => { e.stopPropagation(); handleCopyId(project.id); }}>
              <FiCopy />
            </button>
            <br />
            Status: {project.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProjects;
