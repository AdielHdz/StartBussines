"use client";
import React, { useState } from "react";
import "../../../app/globals.css";
import { FaArrowLeft, FaArrowRight, FaUser } from "react-icons/fa";

const EmprendedorCard = () => {
  const [slides, setSlides] = useState([
    {
      content:
        "Tailwinds CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.",
      name: "Diego",
      job: "Estudiante",
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
      <h2 className="text-2xl md:text-4xl text-center font-bold text-white mb-4">
        Emprendedores satisfechos
      </h2>

      <figure className="flex flex-col md:flex-row bg-slate-100 rounded-xl p-4 md:p-8 dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium text-white">
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

        <div className="flex justify-center mt-4">
          <button
            className="text-2xl text-white font-bold focus:outline-none hover:text-primary"
            onClick={handlePreviousSlide}
          >
            <FaArrowLeft className="inline-block align-text-bottom mr-1" />
          </button>
          <button
            className="text-2xl text-white font-bold focus:outline-none ml-4 hover:text-primary"
            onClick={handleNextSlide}
          >
            <FaArrowRight className="inline-block align-text-bottom ml-1" />
          </button>
        </div>
      </figure>
    </>
  );
};

export default EmprendedorCard;
