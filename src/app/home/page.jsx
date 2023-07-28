"use client";
import { NewProjects } from "../../Components/NewProjects";
import { SearchProjects } from "../../Components/SearchProjects";
import { SearchProjectsList } from "../../Components/SearchProjectsList";
import { TopTenProjects } from "../../Components/TopTenProjects";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useRef, useState } from "react";
import Modal from "../../Components/Modal/Modal";
import ProjectRegister from "../../Components/ProjectRegister/ProjectRegister";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { isBrowser } from "../../utils/isBrowser";
const Home = () => {
  /* const [rolSession, setRolSession] = useLocalStorage("rol", ""); */

  const [rolSession, setRolSession] = useState("");

  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);
  const suggestionsRef = useRef(null);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const closeSuggestions = () => {
    setSuggestions([]);
  };
  useEffect(() => {
    if (isBrowser) {
      const rol = localStorage.getItem("rol");
      setRolSession(rol);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setSuggestions([]);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSetSuggestions = (filteredSuggestions) => {
    setSuggestions(filteredSuggestions);
  };

  return (
    <div>
      <div className="relative">
        <img
          src="https://shjlawfirm.com/wp-content/uploads/2022/08/handshake-1024x683.jpeg"
          alt=""
          className="w-full h-[39rem] opacity-75"
        />
        <h1 className=" absolute top-[4rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Deal Up!
        </h1>
        <p className=" absolute top-[8rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          The website where your idea can reach the maximum
        </p>
        <div className="absolute top-[32rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
          {rolSession === "entrepreneur" ? "Entrepreneur" : "Investor"}
        </div>
        {/* esto seria dejar listo el div, para que si el usuario es investor o entrepreneur, se renderize uno u otro*/}
        {/* <div className="absolute top-[32rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
          Entrepreneur
        </div> */}
      </div>
      <div>
        <h1 className="text-blue-500 fw-semibold text-xl text-center">
          {rolSession === "entrepreneur"
            ? "¡Get the help you need to start!"
            : "Help to start and win in the way"}
        </h1>
        {/* esto seria dejar listo el h1, para que si el usuario es investor o entrepreneur, se renderize uno u otro*/}
        {/* <h1 className="text-blue-500 fw-semibold text-xl text-center">
          ¡Get the help you need to start!
        </h1> */}
        {rolSession === "entrepreneur" && (
          <div className="flex items-center justify-center mt-3">
            <button
              className="group border border-blue-300 rounded-md px-4 py-2 flex items-center justify-center mt-4 text-blue-300 font-semibold hover:bg-blue-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
              onClick={handleOpenModal}>
              Start Project
              <i className="bi bi-shop ml-2 text-blue-300 text-4xl group-hover:text-white"></i>
            </button>
          </div>
        )}
        {/* Deje listo la condición para mostrar el botón solo cuando el user_role es "entrepreneur" */}
        <div className="flex items-center justify-center">
          {/* <button
            className="group border border-blue-300 rounded-md px-4 py-2 flex items-center justify-center mt-4 text-blue-300 font-semibold hover:bg-blue-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
            onClick={handleOpenModal}>
            Start Project
            <i className="bi bi-shop ml-2 text-blue-300 text-4xl group-hover:text-white"></i>
          </button> */}

          <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
            {/* Render the ProjectRegister component inside the modal */}
            <ProjectRegister />
          </Modal>
        </div>
        <div className="flex items-center justify-center mt-3">
          <SearchProjects setSuggestions={handleSetSuggestions} />
        </div>
        <div>
          <SearchProjectsList
            suggestions={suggestions}
            closeSuggestions={closeSuggestions}
          />
        </div>
      </div>
      <div className="mt-20 mb-16">
        <h2 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          The top 10 best ranked projects.{" "}
          <a href="/projects" className="text-pink-200">
            {" "}
            see all
          </a>
        </h2>
        <div className="flex items-center justify-center mt-3">
          <TopTenProjects />
        </div>
      </div>
      <div className="mt-3 mb-16">
        <h2 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          New Projects.{" "}
          <a href="/projects" className="text-pink-200">
            {" "}
            see all
          </a>
        </h2>
        <div className="flex items-center justify-center mt-3">
          <NewProjects />
        </div>
      </div>
    </div>
  );
};

export default Home;
