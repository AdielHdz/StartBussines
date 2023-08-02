"use client";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

const NewProjects = () => {
  //traer estado para acceder a las imagenes de los nuevos proyectos
  const projects = useSelector((state) => state.project.allProjects);


  // const [slides, setSlides] = useState([
  //   {
  //     content:
  //       "Esta es la diapositiva 1.",
  //     name: "Ramiro",
  //     job: "Dev",
  //   },
  //   {
  //     content: "Esta es la diapositiva 2.",
  //     name: "Diego",
  //     job: "Estudiante",
  //   },
  //   {
  //     content: "Esta es la diapositiva 3.",
  //     name: "Juan",
  //     job: "Estudiante de Mecánica Dental",
  //   },
  // ]);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  //comentario

  const handlePreviousSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const currentSlide = projects[currentSlideIndex];

  if (!currentSlide) {
    // Puedes renderizar un mensaje o componente alternativo si no hay proyectos
    return <div>Loading Projects.</div>;
  }

  return (
    <>
      <figure className="flex flex-col md:flex-row bg-indigo-200 rounded-xl p-4 md:p-8 m-8 dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-shadow duration-300 w-96 h-60 bg-contain" style={{ backgroundImage: `url(${currentSlide.image_cover})` }}>
          <button
            className="text-2xl text-gray-900 font-bold focus:outline-none"
            onClick={handlePreviousSlide}
          >
            <FaArrowLeft className="inline-block align-text-bottom mr-1" />
          </button>
        <div className="pt-6 md:p-8 mx-4 text-center md:text-left space-y-4 w-96 ">
          <figcaption className="font-medium">
            <div className="flex items-center justify-center mt-12">
              <div className="text-gray-900 font-semibold dark:text-sky-400">
                <Link href={`/contenedorbusqueda/projectDetail?id=${currentSlide.id}`}>
                  {currentSlide.name}
                </Link>
              </div>
            </div>
          </figcaption>
        </div>

        
          <button
            className="text-2xl text-gray-900 font-bold focus:outline-none "
            onClick={handleNextSlide}
          >
            <FaArrowRight className="inline-block align-text-bottom " />
          </button>
      </figure>
    </>
  );
};

export default NewProjects;

