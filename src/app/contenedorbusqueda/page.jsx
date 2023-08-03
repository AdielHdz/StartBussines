"use client";
import React, { useEffect, useRef, useState } from "react";
import DefaultRating from "../../Components/Rating/Rating";
import ArticleCard from "../../app/contenedorbusqueda/articlesData/pages";
import { SearchProjects } from "@/Components/SearchBar/SearchProjects";
import { SearchProjectsList } from "@/Components/SearchBar/SearchProjectsList";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { fetchArticlesData } from "../../Redux/Fetching/Projects/ProjectSlice";
import { ordered } from "../../Redux/Fetching/Filters/FiltersSlice";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
// import { Pagination } from "../../Components/Paginator/Paginator";

const ContenedorBusquedaCard = () => {
  const filters = useSelector((state) => state.filters);
  const articlesData = useSelector((state) => state.project.projectsFiltered);
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);
  const suggestionsRef = useRef(null);
  const searchResults = useSelector((state) => state.project.allProjects);

  const dispatch = useDispatch();
  // Función para hacer la solicitud a la API y obtener los datos

  // Utilizamos useEffect para hacer la solicitud a la API cuando el componente se monta
  useEffect(() => {
    dispatch(fetchArticlesData(filters));
    console.log(filters.order);
  }, [filters.order, dispatch]);

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

  const handleOrder = (e) => {
    dispatch(ordered(e.target.value));
  };

  return (
    <div>
      <Link href="/home">
        <button className="absolute flex items-center right-0 md:right-60 md:ml-2 bg-teal-700 text-white py-2 px-4 rounded-3xl shadow">
          <FaArrowLeft /><span className="ml-2">Home</span>
        </button>
      </Link>
      <div className="flex flex-col left-0 items-center justify-center mt-3">
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
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-2 text-lg font-medium text-gray-900 dark:text-gray-300 mt-2">Order: </h2>
        <select name="orderByRating" onChange={handleOrder}
                className="px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                >
          <option value="Desc">Best ratings</option>
          <option value="Asc">Worst ratings</option>
        </select>
      </div>
      <div className="flex flex-col space-y-4 min-h-screen w-full items-center justify-center p-4 sm:m-2 lg:m-4">
        <div className="flex items-start m-4 text-xl text-black lg:text-2xl">
          {articlesData?.length} <span className="text-2xl text-teal-700 font-semibold ml-2">Results</span>
        </div>
        {articlesData.map((article, index) => (
          <ArticleCard key={index} data={article} />
        ))}
      </div>
     {/*<Pagination /> */}      
    </div>
  );
};

export default ContenedorBusquedaCard;
