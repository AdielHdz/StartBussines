"use client";
import { getTopProjects } from "../../Redux/Fetching/Projects/ProjectSlice";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const NewProjects = () => {
  const dispatch = useDispatch();
  const newProjects = useSelector(
    (state) => state.project.topProjects.last_created
  );

  useEffect(() => {
    dispatch(getTopProjects());
  }, [dispatch]);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex + 1) % (newProjects.length || 1)
    );
  };

  const handlePreviousSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? (newProjects.length || 1) - 1 : prevIndex - 1
    );
  };

  // Verificar si newProjects no está definido o está vacío
  if (!newProjects || newProjects.length === 0) {
    return <div>Loading Projects.</div>;
  }

  const currentSlide = newProjects[currentSlideIndex] || {};

  return (
    <figure
      className="relative w-full h-60 md:h-80 bg-cover bg-no-repeat bg-center transition-shadow duration-300 hover:shadow-cards rounded-lg"
      style={{ backgroundImage: `url(${currentSlide.image_cover})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-blacks bg-opacity-40  flex md:flex-row justify-between items-center  rounded-lg p-2 md:p-4  bg-cover bg-center">
        <button
          className="text-2xl text-gray-50 font-bold focus:outline-none"
          onClick={handlePreviousSlide}
        >
          <FaArrowLeft className="inline-block align-text-bottom mr-1" />
        </button>

        <Link
          href={`/contenedorbusqueda/projectDetail?id=${currentSlide.id}`}
          className="text-whites md:text-lg transition duration-200 transform hover:font-medium hover:scale-105"
        >
          {currentSlide.name}
        </Link>

        <button
          className="text-2xl text-gray-50 font-bold focus:outline-none "
          onClick={handleNextSlide}
        >
          <FaArrowRight className="inline-block align-text-bottom " />
        </button>
      </div>
    </figure>
  );
};

export default NewProjects;
