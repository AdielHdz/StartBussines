import MyOpinionSection from "./MyOpinionSection";
import TextPair from "../TextPair/TextPair";
import LeaveAComment from "./LeaveAComment";

const MyCommentsSection = ({ name, myOpinion }) => {
  return (
    <section className="flex flex-col gap-3">
      <TextPair text1={"My opinion"} />

      {myOpinion?.User?.id ? (
        <div className="flex flex-col gap-2 py-2">
          <MyOpinionSection
            key={myOpinion.User.id}
            body={myOpinion.comments}
            userName={myOpinion.User.fullName}
            myScore={myOpinion.points}
          />
        </div>
      ) : (
        <LeaveAComment />
      )}
    </section>
  );
};

export default MyCommentsSection;
