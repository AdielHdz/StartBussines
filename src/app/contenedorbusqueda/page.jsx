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
      <select name="orderByRating" onChange={handleOrder}>
        <option value="Desc">Best ratings</option>
        <option value="Asc">Worst ratings</option>
      </select>
      <div className="flex flex-col space-y-4 min-h-screen w-full items-center justify-center p-4 sm:m-2 lg:m-4">
        <div className="flex items-start m-4 text-xl text-black lg:text-2xl">
          {articlesData?.length} results
        </div>
        {articlesData.map((article, index) => (
          <ArticleCard key={index} data={article} />
        ))}
      </div>
    </div>
  );
};

export default ContenedorBusquedaCard;
