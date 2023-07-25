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
      <h2 className="text-center text-black text-xl p-2">Entrepreneur</h2>

      <figure className=" rounded-xl p-4 w-2/3l text-gray-400 md:w-1/2  shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <blockquote className="">
          <p className="text-sm text-center">{currentSlide.content}</p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="flex items-center justify-center text-darkViolet mb-2">
            <FaUser className="mr-2 " />
            <div className=" ">{currentSlide.name}</div>
          </div>
          <div className="text-darkViolet text-center">{currentSlide.job}</div>
        </figcaption>

        <div className="flex justify-center mt-4">
          <FaArrowLeft
            className="inline-block align-text-bottom mr-1 cursor-pointer"
            onClick={handlePreviousSlide}
          />
          <FaArrowRight
            className="inline-block align-text-bottom ml-1 cursor-pointer"
            onClick={handleNextSlide}
          />
        </div>
      </figure>
    </>
  );
};

export default EmprendedorCard;
