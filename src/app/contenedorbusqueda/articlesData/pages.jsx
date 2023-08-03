import React from "react";
import Link from "next/link";
const ArticleCard = ({ data }) => {
  const {
    name,
    description,
    min_amount: minAmount,
    max_amount: maxAmount,
    goal_amount: goalAmount,
    city,
    category,
    status,
    image_cover,
    id,
  } = data;

  return (
    <article className=" border w-3/4 shadow-cards rounded-lg ">
      {image_cover ? (
        <div
          className="h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${image_cover})` }}
        />
      ) : null}
      {/* <img src={image_cover} alt={name ? name : ""} className="h-96"/> */}
      <div className="text-center border border-green-500">
        <Link href={`/contenedorbusqueda/projectDetail?id=${id}`}>
          <h5 className="text-2xl font-semibold mt-2 mb-4 text-sky-800">{name}</h5>
        </Link>
        <div className="text-s flex flex-col items-center">
          <p className="mb-2">Min Investment: <span className="text-lg font-semibold text-emerald-500">${minAmount}</span></p>
          <p className="mb-2">Max investment: <span className="text-lg font-semibold text-emerald-500">${maxAmount}</span></p>
          <p className="mb-2">Goal amount: <span className="text-lg font-semibold text-emerald-500">${goalAmount}</span></p>
          <p className="mb-2">Category: <span className="text-lg font-semibold text-pink-200">{category.join(", ")}</span></p>
        </div>
      </div>
    </article> 
  );
};

export default ArticleCard;
