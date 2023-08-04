import MyOpinionSection from "./MyOpinionSection";
import TextPair from "../TextPair/TextPair";
import LeaveAComment from "./LeaveAComment";
import { useSelector } from "react-redux";
const MyCommentsSection = () => {
  const usersRelated = useSelector((state) => state.rating.ratingUser);

  return (
    <section className="flex flex-col gap-3">
      <TextPair text1={"My opinion"} />

      {usersRelated?.User?.id ? (
        <div className="flex flex-col gap-2 py-2">
          <MyOpinionSection
            key={usersRelated.User.id}
            body={usersRelated.comments}
            userName={usersRelated.User.fullName}
            myScore={usersRelated.points}
          />
        </div>
      ) : (
        <LeaveAComment />
      )}
    </section>
  );
};

export default MyCommentsSection;
