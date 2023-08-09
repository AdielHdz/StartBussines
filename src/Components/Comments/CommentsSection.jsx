import { useSelector } from "react-redux";
import MyCommentsSection from "./MyCommentsSection";
import OtherCommentsSection from "./OthersCommentsSection ";
import Link from "next/link";
import { useEffect } from "react";
const CommentsSection = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userId = localStorage.getItem("idSession");

  /*   const [isPartner, setParner] = useState({}); */

  const projectName = useSelector((state) => state.project.project.name);
  const userIsPartner = useSelector((state) =>
    state.project.project.Investments.find(
      (invest) => invest.User?.id === userId && invest.status === "approved"
    )
  );

  console.log(userIsPartner);

  return (
    <div className="flex flex-col gap-3">
      {userIsPartner && userIsPartner.id ? (
        <MyCommentsSection />
      ) : (
        <h5 className="text-center text-primar font-light py-3">
          Only partners can comment, invest for join to {projectName}
        </h5>
      )}

      <OtherCommentsSection />
    </div>
  );
};

export default CommentsSection;
