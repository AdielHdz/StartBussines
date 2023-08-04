import MyCommentsSection from "./MyCommentsSection";
import OtherCommentsSection from "./OthersCommentsSection ";
const CommentsSection = () => {
  return (
    <div className="flex flex-col gap-3">
      <MyCommentsSection />
      <OtherCommentsSection />
    </div>
  );
};

export default CommentsSection;
