import React from 'react';

const AllUsers = ({ users, onUserClick }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">All Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => onUserClick(user)} className="cursor-pointer">
            {user.fullName} ({user.id})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllUsers;
