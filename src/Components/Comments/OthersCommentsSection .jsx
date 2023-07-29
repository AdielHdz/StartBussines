import { useSelector } from "react-redux";
import TextPair from "../TextPair/TextPair";
import OpinionSection from "./OpinionSection";
const OthersCommentsSection = () => {
  const ratingsProject = useSelector((state) => state.project.project.Ratings);
  console.log(ratingsProject);

  return (
    <div className="flex flex-col gap-3">
      <TextPair text1={"Comments"} />
      <div className="flex flex-col gap-2 py-2">
        {ratingsProject.map((opinion) => (
          <OpinionSection
            key={opinion.id}
            userName={opinion.UserId}
            body={opinion.comments}
            score={opinion.points}
          />
        ))}
      </div>
    </div>
  );
};

export default OthersCommentsSection;
