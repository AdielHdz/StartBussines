import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import EditComment from "./EditComment";
import {
  saveRatingUser,
  setPutSucces,
} from "../../Redux/Fetching/Rating/Rating";
import { userIsRelated } from "../../utils/userISRelated";
import DeleteMyComment from "./DeleteMyComment";
const MyOpinionSection = ({ body, myScore, userName }) => {
  const dispatch = useDispatch();
  const [editComment, setEditComment] = useState(false);
  const { putSucces, isLoading, ratingUser } = useSelector(
    (state) => state.rating
  );
  const project = useSelector((state) => state.project.project);

  useEffect(() => {
    if (putSucces) {
      dispatch(
        saveRatingUser(
          userIsRelated(project.Ratings, localStorage.getItem("idSession"))
        )
      );
      setEditComment(false);
    }

    console.log(putSucces);

    console.log(project.Ratings);
  }, [putSucces, project]);
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
          <div className="flex flex-wrap gap-2 h-9 justify-end mt-2">
            <DeleteMyComment />
            <button
              onClick={() => {
                dispatch(setPutSucces());
                setEditComment(true);
              }}
              className="text-xs  bg-second px-3 py-1.5 rounded-sm  text-whites"
            >
              Edit comment
            </button>
          </div>
        </div>
      ) : (
        <EditComment
          setEditComment={setEditComment}
          editComment={editComment}
        />
      )}
    </>
  );
};

export default MyOpinionSection;
