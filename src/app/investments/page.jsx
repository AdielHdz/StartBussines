import ProjectCard from "../../Components/ProjectCard/ProjectCard";
export default function Investments() {
  return (
    <div className="w-full h-screen ">
      <h1 className="text-blue-500 fw-semibold text-xl text-center m-5">
        Investments
      </h1>
      <div className="flex  flex-row flex-wrap items-center justify-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
