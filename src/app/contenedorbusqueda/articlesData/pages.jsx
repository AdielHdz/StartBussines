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
    <article className=" border w-full shadow-cards rounded-lg ">
      <img src={image_cover} alt={name ? name : ""} />
      <Link href={`/contenedorbusqueda/projectDetail?id=${id}`}>
        <div className="text-center border border-green-500">
          <h5 className="text-lg font-medium ">{name}</h5>
          <div className="text-xs flex flex-col items-center">
            <p>Min Investment: ${minAmount}</p>
            <p>Max investment: ${maxAmount}</p>
            <p>Goal amount: ${goalAmount}</p>

            <p>Category: {category.join(", ")}</p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;
