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
import Link from "next/link";

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
    <article className="p-2 md:p-3">
      <div className="flex flex-col items-center ">
        <h2 className="  text-gray-900 text-lg font-semibold text-center">
          {rolSession === "entrepreneur"
            ? "Entrepreneur"
            : rolSession === "investor"
            ? "Investor"
            : rolSession === "moderator"
            ? "Moderator"
            : rolSession === "admin"
            ? "Admin"
            : "Guest"}
        </h2>

        <div className="w-full">
          <h2 className="text-primar text-lg text-center">
            {rolSession === "entrepreneur"
              ? "¡Get the help you need to start!"
              : "Help to start and win in the way!"}
          </h2>
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

          <div className="flex items-center justify-center w-full">
            <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
              <ProjectRegister />
            </Modal>
          </div>
          <div className="flex items-center justify-center mt-3 w-full ">
            <SearchProjects
              setSuggestions={handleSetSuggestions}
              projects={searchResults}
            />{" "}
          </div>
          <div className="w-full">
            <SearchProjectsList
              suggestions={suggestions}
              closeSuggestions={closeSuggestions}
            />
          </div>
        </div>

        <section className="py-10 w-full flex flex-col gap-5 max-w-sliderContainer md:gap-0 md:flex-row  md:w-full md:max-w-full items-center justify-evenly">
          <div className=" bg-whites  w-full max-w-sliderContainer">
            <h2 className=" font-semibold  text-darkGray ">
              The top 10 best ranked projects.
              <Link
                href="/contenedorbusqueda"
                className="ml-1 text-second font-normal hover:text-primar"
              >
                see all
              </Link>
            </h2>
            <div className="flex items-center justify-center">
              <TopTenProjects />
            </div>
          </div>

          <div className=" bg-whites  w-full max-w-sliderContainer">
            <h2 className=" font-semibold  text-darkGray ">
              New projects
              <Link
                href="/contenedorbusqueda"
                className="ml-1 text-second font-normal hover:text-primar"
              >
                see all
              </Link>
            </h2>
            <div className="flex items-center justify-center">
              <NewProjects />
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};

export default Home;
