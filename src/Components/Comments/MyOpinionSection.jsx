import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const MyOpinionSection = ({ body, myScore, userName }) => {
  console.log(userName);
  return (
    <div>
      <div className="flex justify-between w-full">
        <h5 className="text-sm font-light text-second">{userName}</h5>

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
                {ratingValue <= myScore ? (
                  <AiFillStar className=" text-yellow-300" />
                ) : (
                  <AiFillStar className=" text-gray-300" />
                )}
              </label>
            );
          })}
        </div>
      </div>

      <div className="border-2 border-primar rounded-lg p-2 text-darkGray">
        <h5 className="font-light">{body}</h5>
      </div>
    </div>
  );
};

export default MyOpinionSection;
