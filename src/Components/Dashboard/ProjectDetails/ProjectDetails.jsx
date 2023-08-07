import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import axios from "axios";

const ProjectDetails = ({ project, onClose, onProjectDeleted, onProjectUpdated }) => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(project.status);

  const handleImageClick = () => {
    setShowImageModal(true);
  };

  const closeImageModal = () => {
    setShowImageModal(false);
  };

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const updateProjectStatus = async () => {
    const confirmUpdate = window.confirm(
      "Are you sure you want to change the status of this project?"
    );
    if (confirmUpdate) {
      try {
        await axios.patch(`/projects/${project.id}`, {
          status: selectedStatus,
        });
        console.log("Project status updated successfully!");
        onProjectUpdated();
      } catch (error) {
        console.error("Error updating project status:", error);
      }
    }
  };

  const handleDeleteProject = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`/projects/${project.id}`);
        console.log("Project deleted successfully!");
        onProjectDeleted();
        onClose();
      } catch (error) {
        console.error("Error deleting project:", error);
      }
    }
  };

  return (
    <Modal isVisible={true} onClose={onClose}>
      {/* Aquí se muestra la información detallada del proyecto */}
      <h2 className="mb-4 font-semibold text-xl">
        Details of Project:{" "}
        <span className="ml-2 text-teal-700">{project.name}</span>
      </h2>
      <p className="mb-2">
        <span className="text-sky-700">Description: </span>
        {project.description}
      </p>
      {/* Otras propiedades del proyecto */}
      <p className="mb-2">
        <span className="text-sky-700">Minimum Amount: </span>{" "}
        {project.min_amount}
      </p>
      <p className="mb-2">
        <span className="text-sky-700">Maximum Amount: </span>{" "}
        {project.max_amount}
      </p>
      <p className="mb-2">
        <span className="text-sky-700">Goal Amount: </span>{" "}
        {project.goal_amount}
      </p>
      <p className="mb-2">
        <span className="text-sky-700">Collected Amount: </span>{" "}
        {project.collected_amount}
      </p>
      <p className="mb-2">
        <span className="text-sky-700">Initial Date: </span>{" "}
        {project.initial_date}
      </p>
      <p className="mb-2">
        <span className="text-sky-700">Deadline: </span> {project.deadline}
      </p>
      <p className="mb-2">
        <span className="text-sky-700">City: </span>
        {project.city}
      </p>
      <p className="mb-2">
        <span className="text-sky-700">Status: </span>
        <select
          className="px-2 py-1 rounded bg-gray-100"
          onChange={handleStatusChange}
          value={selectedStatus}
        >
          <option value="Inactive">Inactive</option>
          <option value="Rejected">Rejected</option>
          <option value="Pending">Pending</option>
          <option value="Active">Active</option>
        </select>
      </p>
      <p className="mb-2">
        <span className="text-sky-700">Categories: </span>
        {project.category.map((cat, index) => (
          <span key={index} className="text-blue-500">
            {cat}
            {index < project.category.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>
      <p className="mb-2">
        <span className="text-sky-700">Average Rating: </span>
        {project.average_rating}
      </p>
      <div>
        <span className="text-sky-700">Cover Image: </span>
        {project.image_cover && (
          <img
            src={project.image_cover}
            alt="Project Cover"
            className="w-64 h-64 object-cover mt-4 mb-2 rounded"
            onClick={handleImageClick}
          />
        )}
      </div>
      {/* ... */}
      {showImageModal && (
        <Modal isVisible={true} onClose={closeImageModal}>
          <div className="flex justify-center items-center h-full">
            <img
              src={project.image_cover}
              alt="Project Cover"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </Modal>
      )}
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={updateProjectStatus}
        >
          Update Status
        </button>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mr-2">
        Edit
      </button>
      <button
        className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
        onClick={handleDeleteProject}
      >
        Delete
      </button>
    </Modal>
  );
};

export default ProjectDetails;
