"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AllUsers from '../../Components/Dashboard/AllUsers/AllUsers';
import AllProjects from '../../Components/Dashboard/AllProjects/AllProjects';
import Modal from '../../Components/Modal/Modal';
import SearchBar from '../../Components/Dashboard/SearchBar/SearchBar';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [projects, setProjects] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [showAllUsers, setShowAllUsers] = useState(true);
    const [searchPlaceholder, setSearchPlaceholder] = useState('');

  useEffect(() => {
    // Función para obtener todos los usuarios
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/user');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    // Función para obtener todos los proyectos
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:3001/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchUsers();
    fetchProjects();
  }, []);


  const handleUserClick = (user) => {
    setSelectedUser(user);
    setSelectedProject(null);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setSelectedUser(null);
  };

  const handleSearch = async (searchTerm) => {
    if (showAllUsers) {
      try {
        // Verificar si el término de búsqueda es un ID
        const isId = searchTerm.match(/^[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$/);
        if (isId) {
          // Si es un ID, buscar por ID
          const response = await axios.get(`http://localhost:3001/user/${searchTerm}`);
          setUsers([response.data]);
        } else {
          // Si no es un ID, buscar por nombre de usuario
          const response = await axios.get(`http://localhost:3001/user?fullName=${searchTerm}`);
          setUsers(response.data);
        }
      } catch (error) {
        console.error('Error searching users:', error);
      }
    } else {
      try {
        // Verificar si el término de búsqueda es un ID
        const isId = searchTerm.match(/^[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$/);
        if (isId) {
          // Si es un ID, buscar por ID
          const response = await axios.get(`http://localhost:3001/projects/${searchTerm}`);
          setProjects([response.data]);
        } else {
          // Si no es un ID, buscar por nombre de proyecto
          const response = await axios.get(`http://localhost:3001/projects?name=${searchTerm}`);
          setProjects(response.data);
        }
      } catch (error) {
        console.error('Error searching projects:', error);
      }
    }
  };

  useEffect(() => {
    if (showAllUsers) {
      setSearchPlaceholder('Search Users');
    } else {
      setSearchPlaceholder('Search Projects');
    }
  }, [showAllUsers]);

  return (
    <div className="flex flex-col items-center p-8">
      <div className="mb-4">
        <SearchBar onSearch={handleSearch} placeholder={searchPlaceholder} />
      </div>
      <div className="flex mt-4">
        <div className="w-1/4">
          <div className="mb-4">
            <button
              className={`w-full py-2 px-4 font-semibold ${showAllUsers ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
              onClick={() => setShowAllUsers(true)}
            >
              All Users
            </button>
          </div>
          <div>
            <button
              className={`w-full py-2 px-4 font-semibold ${showAllUsers ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
              onClick={() => setShowAllUsers(false)}
            >
              All Projects
            </button>
          </div>
        </div>
        <div className="w-3/4 ml-8">
          {showAllUsers && (
            <AllUsers users={users} onUserClick={handleUserClick} />
          )}
          {!showAllUsers && (
            <AllProjects projects={projects} onProjectClick={handleProjectClick} />
          )}
           {selectedUser && (
            <Modal isVisible={true} onClose={() => setSelectedUser(null)}>
                {/* Aquí se muestra la información detallada del usuario */}
                <h2>Details of User: {selectedUser.fullName}</h2>
                <p>Email: {selectedUser.email}</p>
                <p>Rol: {selectedUser.rol}</p>
                <p>Gender: {selectedUser.gender}</p>
                <p>Birthdate: {selectedUser.birthdate}</p>
                <p>Phone: {selectedUser.phone}</p>
                <p>Country: {selectedUser.country}</p>
                {/* No se muestra el avatar */}
                <p>Status: {selectedUser.status ? 'Active' : 'Inactive'}</p>
                <p>Third Party Created: {selectedUser.thirdPartyCreated ? 'Yes' : 'No'}</p>
                <p>Created At: {selectedUser.createdAt}</p>
                <p>Updated At: {selectedUser.updatedAt}</p>
            </Modal>
            )}
          {selectedProject && (
            <Modal isVisible={true} onClose={() => setSelectedProject(null)}>
            {/* Aquí se muestra la información detallada del proyecto */}
            <h2>Details of Project: {selectedProject.name}</h2>
            <p>Description: {selectedProject.description}</p>
            <p>Minimum Amount: {selectedProject.min_amount}</p>
            <p>Maximum Amount: {selectedProject.max_amount}</p>
            <p>Goal Amount: {selectedProject.goal_amount}</p>
            <p>Collected Amount: {selectedProject.collected_amount}</p>
            <p>Initial Date: {selectedProject.initial_date}</p>
            <p>Deadline: {selectedProject.deadline}</p>
            <p>City: {selectedProject.city}</p>
            <p>Status: {selectedProject.status}</p>
            {/* No se muestra image_cover, Galleries ni Posts */}
            </Modal>
        )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;