import MyOpinionSection from "./MyOpinionSection";
import TextPair from "../TextPair/TextPair";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import LeaveAComment from "./LeaveAComment";
const MyCommentsSection = ({ name, myOpinion }) => {
  /*   const [rolSession, setRolSession] = useLocalStorage("rol", "");

  console.log(rolSession); */
  {
    /* <>
      {rolSession === "investor" ? ( */
  }
  /*      ) : (
        <></>
      )}
    </> */
  return (
    <section className="flex flex-col gap-3">
      <TextPair text1={"My opinion"} />
      <LeaveAComment />

      <div className="flex flex-col gap-2 py-2">
        <MyOpinionSection
          key={myOpinion.id}
          body={myOpinion.body}
          userName={name}
          myScore={myOpinion.myScore}
        />
      </div>
    </section>
  );
};

export default MyCommentsSection;
