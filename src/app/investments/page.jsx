"use client";
import { useEffect, useState } from "react";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import { getProjects } from "../../Redux/Fetching/Projects/ProjectSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Investments() {
  const dispatch = useDispatch();
  const [idSession, setIdSession] = useState("");
  const projects = useSelector((state) => state.project.allProjects);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const id = localStorage.getItem("idSession");
      setIdSession(id);
    }
  }, []);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);
  const investedProject = projects?.filter((project) =>
    project.Investments.some((investment) =>
      investment.Users.some((user) => user.id === idSession)
    )
  );

  return (
    <div className="w-full h-screen ">
      <h1 className="text-primar fw-semibold text-xl text-center m-5">
        Your investments
      </h1>
      <hr />
      {investedProject.length === 0 ? (
        <p className="flex justify-center m-20 text-gray-400 font-bold">
          There are not investments yet
        </p>
      ) : (
        <div className="flex  flex-row flex-wrap items-center justify-center">
          {investedProject?.map((project) => {
            const userInvestment = project.Investments.find((investment) =>
              investment.Users.some((user) => user.id === idSession)
            );
            /* const userContribution = userInvestment.contribution; */
            /* console.log(userContribution); */
            return (
              <ProjectCard
                id={project.id}
                key={project.id}
                image={project.image_cover}
                name={project.name}
                description={project.description}
                categories={project.category}
                goalAmount={project.goal_amount}
                collectedAmount={project.collected_amount}
                investedAmount={userInvestment.contribution}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
