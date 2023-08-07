"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AllUsers from "../../Components/Dashboard/AllUsers/AllUsers";
import AllProjects from "../../Components/Dashboard/AllProjects/AllProjects";
import SearchBar from "../../Components/Dashboard/SearchBar/SearchBar";
// import { useRouter } from "next/navigation";
import UserDetails from '../../Components/Dashboard/UserDetails/UserDetails';
import ProjectDetails from '../../Components/Dashboard/ProjectDetails/ProjectDetails';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllUsers, setShowAllUsers] = useState(true);
  const [searchPlaceholder, setSearchPlaceholder] = useState("");
  const [filter, setFilter] = useState("Most Recent");

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
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/user");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

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

  const refreshUsers = async () => {
    try {
      const response = await axios.get("/user");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const refreshProjects = async () => {
    try {
      const response = await axios.get("/projects");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

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
        const isId = searchTerm.match(
          /^[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$/
        );
        if (isId) {
          const response = await axios.get(`/user/${searchTerm}`);
          setUsers([response.data]);
        } else {
          const response = await axios.get(`/user?fullName=${searchTerm}`);
          setUsers(response.data);
        }
      } catch (error) {
        console.error("Error searching users:", error);
      }
    } else {
      try {
        const isId = searchTerm.match(
          /^[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$/
        );
        if (isId) {
          const response = await axios.get(`projects/${searchTerm}`);
          setProjects([response.data]);
        } else {
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

  const handleFilterChange = (value) => {
    setFilter(value);
  };
  
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="font-semibold text-2xl text-gray-900">Admin Dashboard</h1>
      <div className="mb-4 mt-3">
        <SearchBar onSearch={handleSearch} placeholder={searchPlaceholder} />
      </div>
      <div className="flex mb-4">
        <div className="mr-2"> 
          <button
            className={`w-full py-2 px-4 font-semibold rounded-tl rounded-bl ${
              showAllUsers ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => setShowAllUsers(true)}
          >
            All Users
          </button>
        </div>
        <div>
          <button
            className={`w-full py-2 px-4 font-semibold rounded-tr rounded-br ${
              showAllUsers ? "bg-gray-300" : "bg-blue-500 text-white"
            }`}
            onClick={() => setShowAllUsers(false)}
          >
            All Projects
          </button>
        </div>
      </div>
      <div className="flex mt-4 border-1 border-gray-400 p-3 ">
        <div className="  ">
          {showAllUsers && (
            <AllUsers users={users} onUserClick={handleUserClick} onRefresh={refreshUsers}/>
          )}
          {!showAllUsers && (
            <AllProjects
              projects={projects}
              onProjectClick={handleProjectClick}
              filter={filter}
              onFilterChange={handleFilterChange} 
              onRefresh={refreshProjects}
            />
          )}
          {selectedUser && (
            <UserDetails user={selectedUser} onClose={() => setSelectedUser(null)} onUsersUpdated={refreshUsers}/>
          )}
          {selectedProject && (
            <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} onProjectUpdated={refreshProjects} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
