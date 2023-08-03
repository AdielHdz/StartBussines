import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import EditComment from "./EditComment";
const MyOpinionSection = ({ body, myScore, userName }) => {
  const [editComment, setEditComment] = useState(false);

  return (
    <>
      {!editComment ? (
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

          <div className="border-2 border-primar rounded-lg p-2 py-3 text-darkGray">
            <h5 className="font-light">{body}</h5>
          </div>
          <div className="flex items-center justify-end mt-2">
            <button
              onClick={() => setEditComment(true)}
              className="text-xs  bg-second px-3 py-1.5 rounded-sm  text-whites"
            >
              Edit comment
            </button>
          </div>
        </div>
      ) : (
        <EditComment setEditComment={setEditComment} />
      )}
    </>
  );
};

export default MyOpinionSection;
