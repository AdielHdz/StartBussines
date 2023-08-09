import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../Loading/Loading';
import Link from 'next/link';
import { RiPencilLine } from 'react-icons/ri';

const ProjectDetails = ({ projectId }) => {
  const [projectDetails, setProjectDetails] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(`/projects/${projectId}`);
        setProjectDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };

    if (projectId) {
      fetchProjectDetails();
    }
  }, [projectId]);

  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center">
        <Loading width={20} height={20} borderWeight={5} loadingText={true} />
      </div>
    );
  }

  if (!projectDetails) {
    return <div>No hay data.....</div>;
  }

  const statusStyles = `font-bold ${
    projectDetails.status === 'Inactive'
      ? 'text-gray-500'
      : projectDetails.status === 'Rejected'
      ? 'text-red-500'
      : projectDetails.status === 'Pending'
      ? 'text-yellow-500'
      : projectDetails.status === 'Active'
      ? 'text-green-500'
      : ''
  }`;

  const formattedTargetAmount = projectDetails.goal_amount.toLocaleString();

  return (
    <div className="ml-5 mr-5">
        <h2 className="mt-10 mb-3">
          First verify if your data is completed.{' '}
          <Link href="" legacyBehavior>
            <a className="underline text-blue-500 hover:text-blue-700">
              verify info
            </a>
          </Link>
        </h2>
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <p className={statusStyles}>● {projectDetails.status}</p>
        </div>
        <div>
          <span className="text-blue-500 cursor-pointer hover:text-blue-700">
            Preview
            <RiPencilLine className="inline-block w-5 h-5 ml-1" />
          </span>
        </div>
      </div>
      <div className="bg-gray-100 rounded p-4 mt-2 mb-3 text-center space-y-4">
        <h3 className="text-2xl font-semibold">{projectDetails.name}</h3>
      </div>
      <div className="bg-gray-100 rounded p-4 mt-4">
        <h4 className="mt-3 mb-3">Start Date: {projectDetails.initial_date}</h4>
        <h4 className="mt-3 mb-3">Target Amount: {formattedTargetAmount} USD</h4>
        <h4 className="mt-3 mb-3">
          Categories:{' '}
          <span className="bg-gray-300 rounded p-2">
            {projectDetails.category.join(', ')}
          </span>
        </h4>
        <h3 className="mt-3 mb-3">Business Plan</h3>
        <h4 className="bg-gray-300 rounded p-4 mt-2">
          {projectDetails.description}
        </h4>
      </div>

      <div className="bg-gray-100 rounded p-4 mt-4 mb-8">
        <h3 className="text-2xl font-semibold">Gallery</h3>
        <img
          src={projectDetails.image_cover}
          alt="Project Cover"
          className="mx-auto border-black border rounded-lg"
        />
      </div>
    </div>
  );
};

export default ProjectDetails;
