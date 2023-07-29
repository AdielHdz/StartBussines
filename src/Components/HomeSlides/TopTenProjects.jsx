"use client";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

const TopTenProjects = () => {
  //traer estado para acceder a las imagenes de los top10 proyectos
  const projects = useSelector((state) => state.user.searchProjects);

  const [slides, setSlides] = useState([
    {
      content:
        "Esta es la diapositiva 1.",
      name: "Mauro",
      job: "Dev",
    },
    {
      content: "Esta es la diapositiva 2.",
      name: "Diego",
      job: "Estudiante",
    },
    {
      content: "Esta es la diapositiva 3.",
      name: "Juan",
      job: "Estudiante de Mecánica Dental",
    },
  ]);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  //comentario

  const handlePreviousSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const currentSlide = slides[currentSlideIndex];

  return (
    <>
      <figure className="flex flex-col md:flex-row bg-indigo-200 rounded-xl p-4 md:p-8 m-8 dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-shadow duration-300 w-96 h-60">
          <button
            className="text-2xl text-white font-bold focus:outline-none"
            onClick={handlePreviousSlide}
          >
            <FaArrowLeft className="inline-block align-text-bottom mr-1" />
          </button>
        <div className="pt-6 md:p-8 mx-4 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-base font-medium text-white">
              {currentSlide.content}
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="flex items-center justify-center mb-2">
              <FaUser className="mr-2" />
              <div className="text-sky-500 dark:text-sky-400">
                {currentSlide.name}
              </div>
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              {currentSlide.job}
            </div>
          </figcaption>
        </div>

        <div className="flex justify-center ">
          <button
            className="text-2xl text-white font-bold focus:outline-none ml-4"
            onClick={handleNextSlide}
          >
            <FaArrowRight className="inline-block align-text-bottom ml-1" />
          </button>
        </div>
      </figure>
    </>
  );
};

export default TopTenProjects;

