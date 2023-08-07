import MyCommentsSection from "./MyCommentsSection";
import OtherCommentsSection from "./OthersCommentsSection ";
import Link from "next/link";
const CommentsSection = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);
  return (
    <div className="flex flex-col gap-3">
      {userData && userData.role === "investor" ? (
        <MyCommentsSection />
      ) : (
        <h5 className="text-center   font-light py-3">
          If you are an investor of this project
          <Link href="/logIn" className="underline text-second mx-1">
            log in
          </Link>
          to give your opinion or to see your opinion.
        </h5>
      )}

      <OtherCommentsSection />
    </div>
  );
};

export default CommentsSection;
