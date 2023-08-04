import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const OpinionSection = ({ body, score, userName }) => {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between w-full">
        <h5 className="text-sm font-light text-primar">{userName}</h5>

        <div className="flex">
          {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1;

            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  className="hidden"
                />
                {ratingValue <= score ? (
                  <AiFillStar className=" text-yellow-300" />
                ) : (
                  <AiFillStar className=" text-gray-300" />
                )}
              </label>
            );
          })}
        </div>
      </div>

      <div className="border-1 border-darkGray rounded-lg p-2 py-3 text-darkGray">
        <p className="font-light text-sm">{body}</p>
      </div>
    </div>
  );
};

export default OpinionSection;
