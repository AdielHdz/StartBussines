import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import axios from "axios";

const UserDetails = ({ user, onClose, onUsersUpdated }) => {
  const [selectedRole, setSelectedRole] = useState(user.role);
  const [selectedStatus, setSelectedStatus] = useState(user.deletedAt ? "Banned" : "Active");


  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const updateUserRoleAndStatus = async () => {
    const confirmUpdate = window.confirm(
      "Are you sure you want to update the role and status of this user?"
    );
    if (confirmUpdate) {
      try {
        await axios.patch(`/user/${user.id}`, {
          role: selectedRole,
          status: selectedStatus,
        });
        console.log("User role and status updated successfully!");
        window.alert("User role and status updated successfully!");
        onUsersUpdated();
      } catch (error) {
        console.error("Error updating user role and status:", error);
      }
    }
  };

  const handleDeleteUser = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`/user/${user.id}`);
        console.log("User deleted successfully!");
        window.alert("User deleted successfully!");
        onUsersUpdated();
        onClose();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  const handleBanUser = async () => {
    const confirmBan = window.confirm("Are you sure you want to ban this user?");
    if (confirmBan) {
      try {
        await axios.delete(`/user/logic/${user.id}`);
        console.log("User banned successfully!");
        window.alert("User banned successfully!");
        onUsersUpdated();
      } catch (error) {
        console.error("Error banning user:", error);
      }
    }
  };

  const handleUnbanUser = async () => {
  const confirmUnban = window.confirm("Are you sure you want to unban this user?");
  if (confirmUnban) {
    try {
      await axios.patch(`/user/restore/${user.id}`);
      console.log("User unbanned successfully!");
      window.alert("User unbanned successfully!");
      onUsersUpdated();
    } catch (error) {
      console.error("Error unbanning user:", error);
    }
  }
};

  return (
    <Modal isVisible={true} onClose={onClose}>
      <h2 className="mb-4 font-semibold text-xl">
        Details of User: <span className="ml-2 text-teal-700">{user.fullName}</span>
      </h2>
      <p className="mb-2">
        <span className="text-sky-700">Email: </span>
        {user.email}
      </p>
      <p className="mb-2">
        <span className="text-sky-700">Role: </span>
        <select
          className="px-2 py-1 rounded bg-gray-100"
          onChange={handleRoleChange}
          value={selectedRole}
        >
          <option value="entrepreneur">Entrepreneur</option>
          <option value="investor">Investor</option>
          <option value="moderator">Moderator</option>
          <option value="admin">Admin</option>
        </select>
      </p>
      <p className="mb-2">
        <span className="text-sky-700">Gender: </span>
        {user.gender}
      </p>
      <p className="mb-2">
        <span className="text-sky-700">Birthdate: </span>
        {user.birthdate}
      </p>
      <p className="mb-2">
        <span className="text-sky-700">Phone: </span>
        {user.phone}
      </p>
      <p className="mb-2">
        <span className="text-sky-700">Country: </span>
        {user.country}
      </p>
      {/* No se muestra el avatar */}
      <p className="mb-2">
        <span className="text-sky-700">Status: </span>
        <select
          className={`px-2 py-1 rounded bg-gray-100 ${
            user.deletedAt ? "text-red-500" : ""
          }`}
          onChange={handleStatusChange}
          value={selectedStatus}
        >
          <option value="Active">Active</option>
          <option value="Banned">Banned</option>
        </select>
      </p>
      <p className="mb-2">
        <span className="text-sky-700">Third Party Created: </span>
        {user.thirdPartyCreated ? "Yes" : "No"}
      </p>
      <p className="mb-2">
        <span className="text-sky-700">Created At: </span>
        {user.createdAt}
      </p>
      <p className="mb-2">
        <span className="text-sky-700">Updated At: </span>
        {user.updatedAt}
      </p>
      {/* ... */}
      <button
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={updateUserRoleAndStatus}
      >
        Update Role
      </button>
      <button
        className={`${
          user.deletedAt ? "bg-green-500" : "bg-yellow-500"
        } hover:${
          user.deletedAt ? "bg-green-600" : "bg-yellow-600"
        } text-white font-bold py-2 px-4 rounded mr-2`}
        onClick={user.deletedAt ? handleUnbanUser : handleBanUser}
      >
        {user.deletedAt ? "Unban" : "Ban"}
      </button>
      <button
        className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
        onClick={handleDeleteUser}
      >
        Delete
      </button>
    </Modal>
  );
};

export default UserDetails;
