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
    <article className="  w-full shadow-cards rounded-lg max-w-registerMd p-2">
      {image_cover ? (
        <div
          className=" h-52 bg-contain bg-center bg-no-repeat  "
          style={{ backgroundImage: `url(${image_cover})` }}
        />
      ) : null}
      {/* <img src={image_cover} alt={name ? name : ""} className="h-96"/> */}
      <div className="text-center ">
        <Link href={`/contenedorbusqueda/projectDetail?id=${id}`}>
          <h5 className="text-xl font-semibold mb-2 text-darkGray">{name}</h5>
        </Link>
        <div className="text-sm flex flex-col items-center">
          <p className="mb-2">
            Goal amount:{" "}
            <span className="text-sm  text-primar">${goalAmount}</span>
          </p>
          <p className="mb-2">
            Min Investment:{" "}
            <span className="text-sm  text-primar">${minAmount}</span>
          </p>
          <p className="mb-2">
            Max investment:{" "}
            <span className="text-sm  text-primar">${maxAmount}</span>
          </p>

          {/* <p className="mb-2">
            Categories:{" "}
            <span className="  text-second">{category.join(", ")}</span>
          </p> */}
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
