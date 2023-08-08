
"use client";
import React from 'react';
import ProjectDetails from '../../../Components/Entrepreneur/MyProjects/ProjectDetails';
import { useParams } from 'next/navigation';

const ProjectDetailsPage = () => {
  const { id } = useParams();


  console.log("Id proyecto: ",id);

  return (
    <div>
      <ProjectDetails projectId={id} />
    </div>
  );
};

export default ProjectDetailsPage;
