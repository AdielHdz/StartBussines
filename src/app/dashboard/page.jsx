"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AllUsers from "../../Components/Dashboard/AllUsers/AllUsers";
import AllProjects from "../../Components/Dashboard/AllProjects/AllProjects";
import Modal from "../../Components/Modal/Modal";
import SearchBar from "../../Components/Dashboard/SearchBar/SearchBar";
// import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllUsers, setShowAllUsers] = useState(true);
  const [searchPlaceholder, setSearchPlaceholder] = useState("");

  //dejo esto comentado ya que es para que solamente puedan ingresar a la dashboard los usuarios con rol admin (traer localstorage)
  // const router = useRouter();

  // useEffect(() => {
  //   // rol del usuario desde el localStorage
  //   const userRole = localStorage.getItem("userRole");

  //   if (userRole !== "admin") {
  //     router.push("/home"); // Cambia "/home" por la ruta que quieras redireccionar
  //   }
  // }, []);

  useEffect(() => {
    // Función para obtener todos los usuarios
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/user");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    // Función para obtener todos los proyectos
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
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
        const isId = searchTerm.match(
          /^[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$/
        );
        if (isId) {
          // Si es un ID, buscar por ID
          const response = await axios.get(`/user/${searchTerm}`);
          setUsers([response.data]);
        } else {
          // Si no es un ID, buscar por nombre de usuario
          const response = await axios.get(`/user?fullName=${searchTerm}`);
          setUsers(response.data);
        }
      } catch (error) {
        console.error("Error searching users:", error);
      }
    } else {
      try {
        // Verificar si el término de búsqueda es un ID
        const isId = searchTerm.match(
          /^[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$/
        );
        if (isId) {
          // Si es un ID, buscar por ID
          const response = await axios.get(`projects/${searchTerm}`);
          setProjects([response.data]);
        } else {
          // Si no es un ID, buscar por nombre de proyecto
          const response = await axios.get(`/projects?name=${searchTerm}`);
          setProjects(response.data);
        }
      } catch (error) {
        console.error("Error searching projects:", error);
      }
    }
  };

  useEffect(() => {
    if (showAllUsers) {
      setSearchPlaceholder("Search Users");
    } else {
      setSearchPlaceholder("Search Projects");
    }
  }, [showAllUsers]);

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="font-semibold text-2xl text-gray-900">Admin Dashboard</h1>
      <div className="mb-4 mt-3">
        <SearchBar onSearch={handleSearch} placeholder={searchPlaceholder} />
      </div>
      <div className="flex mt-4 border-1 border-gray-400 p-8 w-3/4">
        <div className="w-1/5">
          <div className="mb-4">
            <button
              className={`w-full py-2 px-4 font-semibold ${
                showAllUsers ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
              onClick={() => setShowAllUsers(true)}
            >
              All Users
            </button>
          </div>
          <div>
            <button
              className={`w-full py-2 px-4 font-semibold ${
                showAllUsers ? "bg-gray-300" : "bg-blue-500 text-white"
              }`}
              onClick={() => setShowAllUsers(false)}
            >
              All Projects
            </button>
          </div>
        </div>
        <div className="w-3/4 ml-8 ">
          {showAllUsers && (
            <AllUsers users={users} onUserClick={handleUserClick} />
          )}
          {!showAllUsers && (
            <AllProjects
              projects={projects}
              onProjectClick={handleProjectClick}
            />
          )}
          {selectedUser && (
            <Modal isVisible={true} onClose={() => setSelectedUser(null)}>
              {/* Aquí se muestra la información detallada del usuario */}
              <h2 className="mb-4 font-semibold text-xl">
                Details of User:{" "}
                <span className="ml-2 text-teal-700">
                  {selectedUser.fullName}
                </span>
              </h2>
              <p className="mb-2">
                <span className="text-sky-700">Email: </span>
                {selectedUser.email}
              </p>
              <p className="mb-2">
                <span className="text-sky-700">Rol: </span>
                {selectedUser.rol}
              </p>
              <p className="mb-2">
                <span className="text-sky-700">Gender: </span>
                {selectedUser.gender}
              </p>
              <p className="mb-2">
                <span className="text-sky-700">Birthdate: </span>
                {selectedUser.birthdate}
              </p>
              <p className="mb-2">
                <span className="text-sky-700">Phone: </span>
                {selectedUser.phone}
              </p>
              <p className="mb-2">
                <span className="text-sky-700">Country: </span>
                {selectedUser.country}
              </p>
              {/* No se muestra el avatar */}
              <p className="mb-2">
                <span className="text-sky-700">Status: </span>
                {selectedUser.status ? "Active" : "Inactive"}
              </p>
              <p className="mb-2">
                <span className="text-sky-700">Third Party Created: </span>
                {selectedUser.thirdPartyCreated ? "Yes" : "No"}
              </p>
              <p className="mb-2">
                <span className="text-sky-700">Created At: </span>
                {selectedUser.createdAt}
              </p>
              <p className="mb-2">
                <span className="text-sky-700">Updated At: </span>
                {selectedUser.updatedAt}
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mr-2">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2">
                Ban
              </button>
              <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </Modal>
          )}
          {selectedProject && (
            <Modal isVisible={true} onClose={() => setSelectedProject(null)}>
              {/* Aquí se muestra la información detallada del proyecto */}
              <h2 className="mb-4 font-semibold text-xl">
                Details of Project:{" "}
                <span className="ml-2 text-teal-700">
                  {selectedProject.name}
                </span>
              </h2>
              <p className="mb-2">
                <span className="text-sky-700">Description: </span>{" "}
                {selectedProject.description}
              </p>
              <p className="mb-2">
                <span className="text-sky-700">Minimum Amount: </span>{" "}
                {selectedProject.min_amount}
              </p>
              <p className="mb-2">
                <span className="text-sky-700">Maximum Amount: </span>{" "}
                {selectedProject.max_amount}
              </p>
              <p className="mb-2">
                <span className="text-sky-700">Goal Amount: </span>{" "}
                {selectedProject.goal_amount}
              </p>
              <p className="mb-2">
                <span className="text-sky-700">Collected Amount: </span>{" "}
                {selectedProject.collected_amount}
              </p>
              <p className="mb-2">
                <span className="text-sky-700">Initial Date: </span>{" "}
                {selectedProject.initial_date}
              </p>
              <p className="mb-2">
                <span className="text-sky-700">Deadline: </span>{" "}
                {selectedProject.deadline}
              </p>
              <p className="mb-2">
                <span className="text-sky-700">City: </span>
                {selectedProject.city}
              </p>
              <p className="mb-2">
                <span className="text-sky-700">Status: </span>
                {selectedProject.status}
              </p>
              {/* No se muestra image_cover, Galleries ni Posts */}
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mr-2">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2">
                Ban
              </button>
              <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
