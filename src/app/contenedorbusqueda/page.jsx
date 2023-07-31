"use client"
import React, { useEffect, useRef, useState } from "react";
import DefaultRating from "../../Components/Rating/Rating";
import ArticleCard from "../../app/contenedorbusqueda/articlesData/pages";
import { SearchProjects } from "@/Components/SearchBar/SearchProjects";
import { SearchProjectsList } from "@/Components/SearchBar/SearchProjectsList";
import { useSelector } from "react-redux";
import axios from "axios";

const ContenedorBusquedaCard = () => {
  const [articlesData, setArticlesData] = useState([]);
  const filters = useSelector((state) => state.filters);
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);
  const suggestionsRef = useRef(null);
  const searchResults = useSelector((state) => state.project.allProjects);

  // Función para hacer la solicitud a la API y obtener los datos
  const fetchArticlesData = async () => {
    console.log(filters);
    try {
      const response = await fetch("http://localhost:3001/projects/filter", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filters),
      });

      const data = await response.json();
      console.log(data);

      setArticlesData(data);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };

  // Utilizamos useEffect para hacer la solicitud a la API cuando el componente se monta
  useEffect(() => {
    fetchArticlesData();
    console.log(filters);
  }, []);

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
    <main className="flex flex-col space-y-4 min-h-screen w-full items-center justify-center p-4 sm:m-2 lg:m-4">
      <div className="flex items-start m-4 text-xl text-black lg:text-2xl">
        {articlesData.length} results
      </div>
      {articlesData.map((article, index) => (
        <ArticleCard key={index} data={article} />
      ))}
    </main>
    </div>
  );
};

export default ContenedorBusquedaCard;
