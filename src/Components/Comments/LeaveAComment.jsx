import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import { LiaCommentSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import {
  postComment,
  setPutSucces,
  activateIsLoading,
} from "../../Redux/Fetching/Rating/Rating";
import Loading from "../Loading/Loading";
const LeaveAComment = () => {
  const dispatch = useDispatch();

  /*  const [rating, setRating] = useState(0); */
  const [hover, setHover] = useState(0);

  const { id } = useSelector((state) => state.project.project);
  const { ratingUser, putSucces, isLoading } = useSelector(
    (state) => state.rating
  );
  const UserId = localStorage.getItem("idSession");
  console.log(id);

  const [rating, setRating] = useState({
    points: 0,
    comments: "",
    ProjectId: id,
    UserId,
  });

  /*   {
    "points": 3,
    "comments": "Seria una mejor idea si dieras servicion de revision",role
    "ProjectId": "2cb4c9c5-05fe-4164-bbaf-916bb0ac0992",
    "UserId": "90cae348-a5a1-4dd2-a437-edba11116243"
} */
  return (
    <div className=" flex flex-col gap-1">
      <div className="flex  justify-end ">
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;

          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={rating.points}
                onClick={(e) => {
                  setRating({ ...rating, points: ratingValue });
                }}
                className="hidden"
              />
              {ratingValue <= (hover || rating.points) ? (
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
        placeholder="Tell your profesional opinion about this project..."
        value={rating.comments}
        onChange={(e) => setRating({ ...rating, comments: e.target.value })}
        className="w-full min-h-textArea h-textArea  border-2 rounded-lg outline-none border-darkViolet placeholder:text-grayLightMedium placeholder:font-light p-1.5 font-medium text-sm text-darkGray"
      />
      <div className=" flex justify-end">
        <button
          onClick={() => {
            dispatch(activateIsLoading());
            dispatch(postComment(rating));
            setRating({});
          }}
          className="bg-darkViolet relative h-9 flex flex-wrap items-center justify-center gap-1 w-24 text-whites  font-light text-xs rounded-sm hover:border hover:border-darkViolet hover:text-darkViolet hover:bg-whites transition duration-300 "
        >
          {isLoading ? (
            <Loading
              height={4}
              width={4}
              borderWeight={2}
              border_t_color={"border-t-darkGray"}
            />
          ) : (
            <LiaCommentSolid className="text-xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default LeaveAComment;
