"use client";
import { getTopProjects } from "../../Redux/Fetching/Projects/ProjectSlice";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

const TopTenProjects = () => {
  const dispatch = useDispatch();
  const tenProjects = useSelector((state) => state.project.topProjects.topRated);

  useEffect(() => {
    dispatch(getTopProjects());
  }, [dispatch]);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % (tenProjects.length || 1));
  };

  const handlePreviousSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? (tenProjects.length || 1) - 1 : prevIndex - 1
    );
  };

  // Verificar si tenProjects no está definido o está vacío
  if (!tenProjects || tenProjects.length === 0) {
    return <div>Loading Projects.</div>;
  }

  const currentSlide = tenProjects[currentSlideIndex] || {};
  
  return (
    <>
      <figure className="flex md:flex-row bg-indigo-200 rounded-xl p-4 md:p-8 m-8 dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-shadow duration-300 w-96 h-60 bg-contain bg-center" style={{ backgroundImage: `url(${currentSlide.image_cover})` }}>
          <button
            className="text-2xl text-gray-50 font-bold focus:outline-none"
            onClick={handlePreviousSlide}
          >
            <FaArrowLeft className="inline-block align-text-bottom mr-1" />
          </button>
        <div className="pt-6 md:p-8 mx-4 text-center md:text-left space-y-4 w-96 flex-grow md:flex-grow-0">
          <figcaption className="font-medium">
            <div className="flex items-center justify-center mt-12">
              <div className="text-gray-50 font-semibold dark:text-sky-400">
                <Link href={`/contenedorbusqueda/projectDetail?id=${currentSlide.id}`}>
                  {currentSlide.name}
                </Link>
              </div>
            </div>
          </figcaption>
        </div>
          <button
            className="text-2xl text-gray-50 font-bold focus:outline-none "
            onClick={handleNextSlide}
          >
            <FaArrowRight className="inline-block align-text-bottom " />
          </button>
      </figure>
    </>
  );
};

export default TopTenProjects;

