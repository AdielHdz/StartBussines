import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiCopy } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const Projects = () => {
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  const [idSessionhome, setidSessionhome] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const idSessionhome = localStorage.getItem('idSession');
      setidSessionhome(idSessionhome);
    }
  }, []);

  useEffect(() => {
    const fetchUserProjects = async () => {
      try {
        const response = await axios.get(`/projects`);
        const filteredProjects = response.data.filter((project) =>
          project.Users.some((user) => user.id === idSessionhome)
        );
        setProjects(filteredProjects);
      } catch (error) {
        console.error('Error fetching user projects:', error);
      }
    };

    if (idSessionhome) {
      fetchUserProjects();
    }
  }, [idSessionhome]);

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
    <div className="flex justify-center items-center mt-4">
      <div className="w-4/5 ">
        <h2 className="text-lg font-semibold mb-4">My Projects</h2>
        <ul>
          {projects.map((project) => (
            <li
              key={project.id}
              onClick={() => router.push(`/myprojects/${project.id}`)}
              className="cursor-pointer mb-4 border border-gray-400 rounded-lg px-4 py-2 hover:text-blue-500"
            >
              <div>
                <p>ID: {project.id}</p>
                <h3>{project.name}</h3>
                <p>Status: {project.status}</p>
                <button
                  className="mt-2 text-blue-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopyId(project.id);
                  }}
                >
                  <FiCopy />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
