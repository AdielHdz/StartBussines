import ProjectCard from "../../Components/ProjectCard/ProjectCard";

const projects = [
  {
    image:
      "https://assets.isu.pub/document-structure/210131044540-76f5848475f950a134d5fc5d9c96c993/v1/4a66b9b99de64ea40a5901e61e44fdbd.jpg",
    name: "Braille Library",
    description:
      "We want to start an inclusive bookstore that converts famous books into braille texts for people with visual disabilities",
    categories: "Journalism - Comics - Publishing",
    goalAmount: "$5,000",
    collectedAmount: "$1,000",
    investedAmount: "500",
  },
  {
    image:
      "https://static.eldiario.es/clip/ff73b4b0-2717-4d2b-981c-d42193cdbce6_16-9-aspect-ratio_default_0.jpg",
    name: "The Meal Subscription",
    description:
      "Say goodbye to meal prepping and cooking stress as we curate and deliver freshly prepared dishes right to your doorstep. With flexible monthly subscriptions",
    categories: "Food",
    goalAmount: "$3,500",
    collectedAmount: "$2,000",
    investedAmount: "$1,000",
  },
  {
    image:
      "https://blog.oxfamintermon.org/wp-content/uploads/2015/12/iStock_000054579426_Small-726x483.jpg",
    name: "Second Life Fashion",
    description:
      "We aim to start our own brand to give pre-loved clothing a second chance",
    categories: "Fashion - Design",
    goalAmount: "$7,000",
    collectedAmount: "$4,000",
    investedAmount: "$2,500",
  },
];

export default function Investments() {
  return (
    <div className="w-full h-screen ">
      <h1 className="text-blue-500 fw-semibold text-xl text-center m-5">
        Your investments
      </h1>
      <hr />
      <div className="flex  flex-row flex-wrap items-center justify-center">
        {projects.map((project) => {
          return (
            <ProjectCard
              image={project.image}
              name={project.name}
              description={project.description}
              categories={project.categories}
              goalAmount={project.goalAmount}
              collectedAmount={project.collectedAmount}
              investedAmount={project.investedAmount}
            />
          );
        })}
      </div>
    </div>
  );
}
