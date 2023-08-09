"use client";
import { useSelector } from "react-redux";
import NewProjects from "../../Components/HomeSlides/NewProjects";
import { SearchProjects } from "../../Components/SearchBar/SearchProjects";
import { SearchProjectsList } from "../../Components/SearchBar/SearchProjectsList";
import TopTenProjects from "../../Components/HomeSlides/TopTenProjects";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useRef, useState } from "react";
import Modal from "../../Components/Modal/Modal";
import ProjectRegister from "../../Components/ProjectRegister/ProjectRegister";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  //  const [rolSession, setRolSession] = useLocalStorage('rol', '');
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);
  const suggestionsRef = useRef(null);
  const searchResults = useSelector((state) => state.project.allProjects); //selector al array de resultados de proyectos
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [rolSession, setRolSession] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const role = localStorage.getItem("role");
      setRolSession(role);
    }
  }, []);

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
    <div className="ml-4 mt-5 mr-4">
      <div className="relative">
        <div className="relative top-[1.5rem] mb-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-900 text-4xl font-bold text-center">
          {rolSession === "entrepreneur" ? "Entrepreneur" : 
          rolSession === "investor" ? "Investor" :
          rolSession === "moderator" ? "Moderator" :
          rolSession === "admin" ? "Admin" :
          "Guest"}
        </div>
      </div>
      <div>
        <h1 className="text-redBrown fw-semibold text-xl text-center">
          {rolSession === "entrepreneur"
            ? "¡Get the help you need to start!"
            : "Help to start and win in the way"}
        </h1>
        {rolSession === "entrepreneur" && (
          <div className="flex items-center justify-center mt-3">
          <button
            className="bg-primar group border border-white rounded-md px-4 py-2 flex items-center justify-center mt-4 text-white font-semibold hover:bg-primar hover:bg-opacity-80 focus:outline-none "
            onClick={handleOpenModal}
          >
            Start Project
            <i className="bi bi-shop ml-2 text-white text-4xl group-hover:text-white"></i>
          </button>
        </div>

        )}

        <div className="flex items-center justify-center">
          <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
            <ProjectRegister />
          </Modal>
        </div>
        <div className="flex items-center justify-center mt-3">
          <SearchProjects
            setSuggestions={handleSetSuggestions}
            projects={searchResults}
          />{" "}
        </div>
        <div>
          <SearchProjectsList
            suggestions={suggestions}
            closeSuggestions={closeSuggestions}
          />
        </div>
      </div>
      <div className="mt-17 mb-10 mt-5">
      <h2 className="text-2xl md:text-2xl lg:text-3xl font-extrabold leading-tight text-gray-900 ">
        The top 10 best ranked projects.{" "}
        <a href="/contenedorbusqueda" className="text-blue-500 border-b border-blue-500">
          {" "}
          see all
        </a>
      </h2>
        <div className="flex items-center justify-center">
          <TopTenProjects />
        </div>
      </div>
      <div className="mt-3 mb-10">
      <h2 className="text-2xl md:text-2xl lg:text-3xl font-extrabold leading-tight text-gray-900 ">
        New Projects.{" "}
        <a href="/contenedorbusqueda" className="text-blue-500 border-b border-blue-500">
          {" "}
          see all
        </a>
      </h2>

        <div className="flex items-center justify-center">
          <NewProjects />
        </div>
      </div>
    </div>
  );
};

export default Home;
