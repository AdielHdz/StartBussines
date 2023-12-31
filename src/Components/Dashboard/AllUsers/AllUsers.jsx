import React, { useState } from 'react';
import { FiCopy, FiRefreshCcw } from 'react-icons/fi';

const AllUsers = ({ users, onUserClick, onRefresh }) => {
  const [sortDirection, setSortDirection] = useState("desc");
  const [selectedRole, setSelectedRole] = useState("");
  const [showBannedUsers, setShowBannedUsers] = useState(false);

  const handleFilterClick = (value) => {
    if (value === "Most Recent") {
      setSortDirection(sortDirection === "desc" ? "asc" : "desc");
    } else {
      setSelectedRole(value);
    }
  };

  const handleRoleFilter = (role) => {
    setSelectedRole(role);
  };

  const sortedUsers = users.filter((user) => {
    if (showBannedUsers) {
      return user.deletedAt !== null;
    }
    return true;
  }).filter((user) => {
    if (selectedRole) {
      return user.role === selectedRole;
    }
    return true;
  }).sort((a, b) => {
    if (sortDirection === "desc") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else {
      return new Date(a.createdAt) - new Date(b.createdAt);
    }
  });
  

  const mostRecentText = sortDirection === "desc" ? "Most Recent ▼" : "Oldest First ▲";
  const roleFilterText = selectedRole ? ` - Role - ${selectedRole}` : "";
  const bannedUsersButtonText = showBannedUsers ? "Show All Users" : "Show Banned Users";

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

  const handleCopyEmail = (email) => {
    try {
      const tempInput = document.createElement("input");
      tempInput.value = email;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      console.log(`Email "${email}" copied to clipboard!`);
      alert(`Email "${email}" copied to clipboard!`);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <div className="container mx-auto md:min-w-[700px] relative">
      <h2 className="text-lg font-semibold mb-4">All Users - Filtered by: {mostRecentText} {roleFilterText}</h2>
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
        <div className="ml-2 mt-3">
          <select
            className="px-2 py-1 rounded bg-gray-100"
            onChange={(e) => handleRoleFilter(e.target.value)}
            value={selectedRole || ""}
          >
            <option value="">Filter by Role</option>
            <option value="entrepreneur">Entrepreneur</option>
            <option value="investor">Investor</option>
            <option value="moderator">Moderator</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          className={`py-2 px-4 font-semibold rounded ${
            showBannedUsers ? "bg-red-500 text-white" : "bg-gray-300 text-gray-600 mt-3"
          } md:mx-2`}
          onClick={() => setShowBannedUsers(!showBannedUsers)}
        >
          {bannedUsersButtonText}
        </button>
      </div>
      <ul>
        {sortedUsers.map((user) => (
          <li key={user.id} onClick={() => onUserClick(user)} className={`cursor-pointer mb-2 border border-gray-400 rounded-lg px-4 py-2 hover:text-blue-500 ${user.deletedAt ? "border-red-500 text-red-500" : ""}`}>
            {user.fullName}
            <br />
            <span className={`text-blue-500 cursor-pointer ${user.deletedAt ? "text-red-500" : ""}`} onClick={(e) => { e.stopPropagation(); handleCopyEmail(user.email); }}>
              {user.email}
              <FiCopy className="inline-block ml-1" />
            </span>
            <br />
            Role: {user.role}
            <br />
            Id: {user.id}
            <button className="ml-2 text-blue-500" onClick={(e) => { e.stopPropagation(); handleCopyId(user.id); }}>
              <FiCopy />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllUsers;
