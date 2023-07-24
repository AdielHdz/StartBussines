"use client";
import React, { useState } from "react";

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
      <h2 className="text-center p-2">Entrepreneur</h2>

      <figure className=" bg-purple-800  rounded-xl p-4 w-full   shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <blockquote className="">
          <p className="text-sm text-white text-center">
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

        <div className="flex justify-center mt-4">
          <button
            className="text-2xl text-white font-bold focus:outline-none"
            onClick={handlePreviousSlide}
          >
            <FaArrowLeft className="inline-block align-text-bottom mr-1" />
          </button>
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

export default EmprendedorCard;
