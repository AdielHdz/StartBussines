import { useSelector } from "react-redux";
import TextPair from "../TextPair/TextPair";
import OpinionSection from "./OpinionSection";
const OthersCommentsSection = () => {
  const ratingsProject = useSelector((state) =>
    state.project.project.Ratings.filter(
      (rating) => rating.User?.id !== localStorage.getItem("idSession")
    )
  );
  console.log(ratingsProject);

  return (
    <div className="flex flex-col gap-3">
      <TextPair text1={"What does investors say?"} />

      {ratingsProject.length ? (
        <div className="flex flex-col gap-4 py-2">
          {ratingsProject.map((opinion) => {
            if (opinion.User !== null) {
              return (
                <OpinionSection
                  key={opinion.User.fullName}
                  userName={opinion.User.fullName}
                  body={opinion.comments}
                  score={opinion.points}
                />
              );
            }
          })}
        </div>
      ) : (
        <p className="text-center text-sm font-light">There are no comments</p>
      )}
    </div>
  );
};

export default OthersCommentsSection;
