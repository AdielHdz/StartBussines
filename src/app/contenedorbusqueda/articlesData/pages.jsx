import React from "react";

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
  } = data;

  return (
    <article className="group relative flex  sm:h-auto md:h-[24rem] lg:h-[32rem] w-full md:w-[50rem] lg:w-[60rem] rounded-2xl bg-[#3a4448]">
      <div className="p-4 sm:p-8 lg:p-12 text-white border w-full">
        <header className="space-0 z-10 text-center border">
          <div className="text-center">
            <div className="text-xl font-medium ">{name}</div>
            <div className="text-xs flex flex-col items-center">
              <p>{description}</p>
              <p>Min Investment: ${minAmount}</p>
              <p>Max investment: ${maxAmount}</p>
              <p>Goal amount: ${goalAmount}</p>
              <p>City: {city}</p>
              <p>Category: {category.join(", ")}</p>
              <p>Status: {status}</p>
            </div>
          </div>
        </header>
      </div>
    </article>
  );
};

export default ArticleCard;
