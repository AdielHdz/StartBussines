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
      className="w-9 flex justify-center items-center   rounded-sm hover:shadow-cards  text-redError transition duration-300"
    >
      {isLoading ? (
        <Loading
          height={4}
          width={4}
          borderWeight={2}
          border_t_color={"border-t-redError"}
        />
      ) : (
        <BsTrash className="text-redError text-xl " />
      )}
    </button>
  );
};

export default DeleteMyComment;
