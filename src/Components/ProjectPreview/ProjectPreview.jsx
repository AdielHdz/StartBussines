import React, { useState } from 'react';
import ProjectRegister from '../ProjectRegister/ProjectRegister'; // Importamos el componente ProjectRegister para usarlo en el modal

const ProjectPreview = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [projectData, setProjectData] = useState(null);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  // Función para recibir los datos del componente ProjectRegister y guardarlos en el estado
  const handleProjectData = (data) => {
    setProjectData(data);
    setModalOpen(false); // Cerramos el modal después de recibir los datos
  };

  // Contenido predeterminado si no hay proyecto
  const defaultProjectData = {
    businessName: 'Bussines Name',
    startDate: 'DD/MM/YYYY',
    targetAmount: '$$$$',
    selectedCategory: 'None',
    businessPlan: '',
    photos: [],
  };

  const project = projectData || defaultProjectData;

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">First verify if your data is completed.</h2>
      <div className="mb-4 flex items-center">
        <span className="mr-2">Verify Info</span>
        <a href="#" className="text-blue-500" onClick={handleModalOpen}>
          (Edit)
        </a>
      </div>
      <div className="mb-4">
        <span>Project Status: </span>
        <span
          className={`inline-block rounded px-3 py-1 text-white ${
            projectData
              ? projectData.selectedCategory === 'inactive'
                ? 'bg-gray-500'
                : projectData.selectedCategory === 'rejected'
                ? 'bg-red-500'
                : projectData.selectedCategory === 'pending'
                ? 'bg-yellow-500'
                : 'bg-green-500'
              : 'bg-gray-500'
          }`}
        >
          {projectData ? projectData.selectedCategory : 'inactive'}
        </span>
      </div>
      <div className="mb-4">
        <span>Preview:</span>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-2"
          onClick={handleModalOpen}
        >
          Preview
        </button>
      </div>
      <div className="mb-4">
        <span>Bussines Name:</span>
        <span className="ml-2">{project.businessName}</span>
      </div>
      <div className="mb-4">
        <span>Start Date:</span>
        <span className="ml-2">{project.startDate}</span>
      </div>
      <div className="mb-4">
        <span>Target Amount:</span>
        <span className="ml-2">{project.targetAmount}</span>
      </div>
      <div className="mb-4">
        <span>Categories:</span>
        <span className="ml-2">{project.selectedCategory}</span>
      </div>
      <div className="mb-4">
        <span>Bussines Plan:</span>
        <span className="ml-2">{project.businessPlan || 'Empty'}</span>
      </div>
      <div className="mb-4">
        <span>Gallery:</span>
        <div className="grid grid-cols-3 gap-4 mt-2">
          {project.photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-full h-32 object-cover rounded-lg"
            />
          ))}
        </div>
        {project.photos.length === 0 && <span className="mt-2">Empty</span>}
      </div>
      {/* Modal para editar el proyecto */}
      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div style={{ position: 'relative', backgroundColor: 'white', padding: '50px', borderRadius: '10px', zIndex: 1001, maxHeight: '80vh', overflowY: 'auto', margin: '0 1.2rem 0 1.2rem', borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }}>
            <ProjectRegister initialData={project} onClose={handleModalClose} onSubmit={handleProjectData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPreview;
