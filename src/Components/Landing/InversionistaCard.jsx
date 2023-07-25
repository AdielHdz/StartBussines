"use client";
import React, { useState } from "react";

import { FaArrowLeft, FaArrowRight, FaUser } from "react-icons/fa";

const InversionistaCard = () => {
  const [slides, setSlides] = useState([
    {
      content: "Ia , pum , pam . kame kame ha",
      name: "Enrique",
      job: "Estudiante de Taekwondo",
    },
    {
      content: "Lunes otra vez",
      name: "Charly",
      job: "Cantante",
    },
    {
      content: "Ia Ia Ie Oh Oh",
      name: "Xuxa",
      job: "Cantante",
    },
  ]);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePreviousSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const currentSlide = slides[currentSlideIndex];

  return (
    <>
      <h2 className="text-xl md:text-xl text-center font-bold text-black my-4 shadow-lg">
        Inversionistas satisfechos
      </h2>

      <figure className="flex flex-col md:flex-row bg-slate-100 rounded-xl p-4 md:p-8 dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-shadow duration-300 height: fit-content">
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4 width: 100% height: 100%">
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

export default InversionistaCard;