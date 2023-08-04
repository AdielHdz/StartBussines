import { useDispatch, useSelector } from "react-redux";
import { BsTrash } from "react-icons/bs";
import Loading from "../Loading/Loading";
import {
  deleteRating,
  activateIsLoading,
} from "../../Redux/Fetching/Rating/Rating";

const DeleteMyComment = () => {
  const dispatch = useDispatch();
  const { ratingUser, isLoading } = useSelector((state) => state.rating);

  return (
    <button
      onClick={() => {
        dispatch(activateIsLoading());
        dispatch(deleteRating(ratingUser.id));
      }}
      className="w-9 flex justify-center items-center   rounded-sm   text-redError "
    >
      {isLoading ? (
        <Loading
          height={4}
          width={4}
          borderWeight={2}
          border_t_color={"border-t-redError"}
        />
      ) : (
        <BsTrash className="text-redError text-xl hover:scale-125 transition-all duration-200 transform " />
      )}
    </button>
  );
};

export default DeleteMyComment;
