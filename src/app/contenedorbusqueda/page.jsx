"use client";

import React from "react";
import DefaultRating from "../../Components/Rating/Rating";
import ArticleCard from "./articlesData/page";


const ContenedorBusquedaCard = () => {
  const articlesData = [
    {
      title: "MACHINE IA",
      imageSrc: "https://unsplash.it/id/1/640/425",
      totalAmount: "$50,000",
      minInvestment: "$1,500",
      maxInvestment: "$5,000",
    },
    {
      title: "ROBOT",
      imageSrc:
        "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=810&q=80",
      totalAmount: "$60,000",
      minInvestment: "$2,000",
      maxInvestment: "$7,000",
    },
  ];

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


