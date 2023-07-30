"use client"

import React, { useEffect, useState } from "react";
import DefaultRating from "../../Components/Rating/Rating";
import ArticleCard from "../../app/contenedorbusqueda/articlesData/pages";


const ContenedorBusquedaCard = () => {
  const [articlesData, setArticlesData] = useState([]);

  // Función para hacer la solicitud a la API y obtener los datos
  const fetchArticlesData = async () => {
    try {
      const response = await fetch("http://localhost:3001/projects");
      const data = await response.json();
      setArticlesData(data);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };

  // Utilizamos useEffect para hacer la solicitud a la API cuando el componente se monta
  useEffect(() => {
    fetchArticlesData();
  }, []);

  return (
    <main className="flex flex-col space-y-4 min-h-screen w-full items-center justify-center p-4 sm:m-2 lg:m-4">
      <div className="flex items-start m-4 text-xl text-black lg:text-2xl">
        {articlesData.length} results
      </div>
      {articlesData.map((article, index) => (
        <ArticleCard key={index} data={article} />
      ))}
    </main>
  );
};

export default ContenedorBusquedaCard;
