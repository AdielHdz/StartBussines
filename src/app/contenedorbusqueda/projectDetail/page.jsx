"use client";
import { useEffect, useState } from "react";
import { getProjectById } from "../../../Redux/Fetching/Projects/ProjectSlice";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "next/navigation";
import TextPair from "../../../Components/TextPair/TextPair";
import GalleryMedium from "../../../Components/Gallery/GalleryMedium";
import CommentsSection from "../../../Components/Comments/CommentsSection";
import Link from "next/link";
import { averageScore } from "../../../utils/averageScore";
import { IoWalletOutline } from "react-icons/io5";
const ProjectDetail = () => {
  const searchParams = useSearchParams();

  const id = searchParams.get("id");

  const project = useSelector((state) => state.project.project);
  const [score, setScore] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getProjectById(id));
    }
    if (project.id) {
      setScore(averageScore(project?.Ratings));
    }
    console.log(project);
    console.log(id);
  }, [project?.name]);

  return (
    <>
      {project.name ? (
        <div className=" p-2.5 flex items-center justify-center">
          <section className=" border-2 border-whites w-full font-medium  text-darkGray">
            <figure className="flex items-center justify-center py-2 ">
              <img
                src={
                  project?.image_cover.length
                    ? project?.image_cover[0]
                    : "https://img.freepik.com/vector-premium/vector-icono-logotipo-mecanico-llave-engranaje_304830-274.jpg"
                }
                alt={project?.name}
                className=" w-44 h-44 object-cover rounded-full"
              />
            </figure>

            <h2 className="w-full text-center text-lg font-bold py-3">
              {project?.name}
            </h2>
            <div className="flex flex-col gap-2">
              <TextPair text1={"Post created:"} text2={project?.initial_date} />
              <TextPair
                text1={"Start date project:"}
                text2={project?.deadline}
              />
              <TextPair
                text1={"Target amount:"}
                text2={`$${project?.goal_amount}`}
              />
              <TextPair text1={"Collected so far:"} text2={"aun no se pasa"} />
              <TextPair
                text1={"Minimun investmen:"}
                text2={`$${project?.min_amount}`}
              />
              <TextPair
                text1={"Maximum investmen:"}
                text2={`$${project?.max_amount}`}
              />
              <TextPair
                text1={"Categories:"}
                text2={`${project?.category.toString().replace(",", ", ")}.`}
              />
              <TextPair text1={"Score:"} text2={score} />

              <TextPair text1={"Status:"} text2={project?.status} />

              <TextPair text1={"Bussines Plan"} />
              <p className="inline text-xs text-darkGray font-regular">
                {project?.description}
              </p>
              <TextPair text1={"Gallery"} />
              <div className="flex flex-col gap-3">
                <GalleryMedium
                  url={
                    "https://d1ralsognjng37.cloudfront.net/4d8f57f2-1c42-44b2-8656-02b2a7d0e5b1.jpeg"
                  }
                  description={
                    "Aqui puedo mostrarles algunos de mis productos estrellas"
                  }
                />
                <GalleryMedium
                  url={
                    "https://lh5.googleusercontent.com/p/AF1QipPDzJz89oKreiB1npMrZH38_V3EMJRVYdjIzdtY=w650-h486-k-no"
                  }
                  description={"Asi es la idea de como se veria el local"}
                />
                <button className="bg-yellow-600 flex items-center justify-center gap-2 text-whites h-12">
                  I want to invest
                  <IoWalletOutline />
                </button>

                <CommentsSection
                  name={"Adiel Luciano Hernandez Ortegon"}
                  myOpinion={[
                    {
                      id: "5646464864",
                      body: "Este es de los mejores negocios que he leido hoy!",
                      myScore: 4,
                    },
                    {
                      id: "564685464864",
                      body: "Me gustaria invertir contigo lo mas pronto posible ya que tu negocio me recuerda cuando inicie en el mundo del emprendimiento!",
                      myScore: 2,
                    },
                  ]}
                  otherOpinions={project.Raitings}
                />
              </div>
            </div>
          </section>
        </div>
      ) : (
        <h5>Loading</h5>
      )}
    </>
  );
};

export default ProjectDetail;
