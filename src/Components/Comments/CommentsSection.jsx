import MyCommentsSection from "./MyCommentsSection";
import TextPair from "../TextPair/TextPair";
import OtherCommentsSection from "./OthersCommentsSection ";
const CommentsSection = ({ name, myOpinion, otherOpinions }) => {
  return (
    <div className="flex flex-col gap-3">
      <MyCommentsSection name={name} myOpinion={myOpinion} />
      <OtherCommentsSection />
    </div>
  );
};

export default CommentsSection;
