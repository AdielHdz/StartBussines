import MyOpinionSection from "./MyOpinionSection";
import TextPair from "../TextPair/TextPair";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
const MyCommentsSection = ({ name, myOpinion }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <section className="flex flex-col gap-3">
      <TextPair text1={"My comments"} />

      <div>
        <div className="flex  justify-end">
          {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1;

            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                  className="hidden"
                />
                {ratingValue <= (hover || rating) ? (
                  <AiFillStar
                    className="cursor-pointer text-yellow-300"
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(0)}
                  />
                ) : (
                  <AiFillStar
                    className="cursor-pointer text-gray-300"
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(0)}
                  />
                )}
              </label>
            );
          })}
        </div>
        <textarea
          placeholder="Tell your opinion..."
          className="w-full min-h-textArea h-textArea max-h-cards border-2 rounded-lg outline-none border-darkGray placeholder:text-grayLightMedium placeholder:font-light p-1.5 font-medium text-sm text-darkGray"
        />
      </div>

      <div className="flex flex-col gap-2 py-2">
        {myOpinion.map((opinion) => (
          <MyOpinionSection
            key={opinion.id}
            body={opinion.body}
            userName={name}
            myScore={opinion.myScore}
          />
        ))}
      </div>
    </section>
  );
};

export default MyCommentsSection;
