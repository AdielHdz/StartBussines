import React from 'react';

const AllProjects = ({ projects, onProjectClick }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">All Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id} onClick={() => onProjectClick(project)} className="cursor-pointer mb-2 border border-gray-400 rounded-lg px-4 py-2 hover:text-blue-500">
            {project.name} ({project.id})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProjects;
