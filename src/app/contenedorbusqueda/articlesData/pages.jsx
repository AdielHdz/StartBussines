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
    Ratings
  } = data;

  console.log(Ratings.map(rating => rating.points))

  const ratings = Ratings.map(rating => rating.points)

  return (
    <article className="  w-full shadow-cards rounded-lg max-w-registerMd p-2">
      {image_cover ? (
        <div
          className=" h-52 bg-contain bg-center bg-no-repeat  "
          style={{ backgroundImage: `url(${image_cover})` }}
        />
      ) : null}
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

          <p className="mb-2">
            Categories:{" "}
            <span className="  text-second">{category.join(", ")}</span>
          </p>

          <p className="mb-2">
            Ratings:{" "}
            <span className="font-semibold  text-yellow-500">{ratings.join(", ")}</span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
