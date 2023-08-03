import React from 'react';

const AllUsers = ({ users, onUserClick }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">All Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => onUserClick(user)} className="cursor-pointer mb-2 border border-gray-400 rounded-lg px-4 py-2 hover:text-blue-500">
            {user.fullName} ({user.id})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllUsers;
