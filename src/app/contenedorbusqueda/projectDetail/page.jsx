"use client";
import { useEffect, useState } from "react";
import {
  getProjectById,
  cleanDataProject,
} from "../../../Redux/Fetching/Projects/ProjectSlice";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "next/navigation";
import TextPair from "../../../Components/TextPair/TextPair";
import GalleryMedium from "../../../Components/Gallery/GalleryMedium";
import CommentsSection from "../../../Components/Comments/CommentsSection";
import { averageScore } from "../../../utils/averageScore";
import { IoWalletOutline } from "react-icons/io5";
import { userIsRelated } from "../../../utils/userISRelated";
import Loading from "../../../Components/Loading/Loading";
import { saveRatingUser } from "../../../Redux/Fetching/Rating/Rating";
import InvestInProject from "../../../Components/InvestInProject/InvestInProject";
const ProjectDetail = () => {
  const searchParams = useSearchParams();

  const id = searchParams.get("id");

  const project = useSelector((state) => state.project.project);
  const [userID, setUserID] = useState("");
  const [userRole, setUserRole] = useState("");
  const [score, setScore] = useState(0);
  const usersRelated = useSelector((state) => state.rating.ratingUser);
  const Changefullfiled = useSelector((state) => state.rating.putSucces);
  const [investView, setInvestView] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setUserID(localStorage.getItem("idSession"));
    setUserRole(localStorage.getItem("role"));
    if (id) {
      dispatch(getProjectById(id));
    }
    if (project.id) {
      setScore(averageScore(project?.Ratings));
      dispatch(saveRatingUser(userIsRelated(project.Ratings, userID)));
    }

    console.log(project);
  }, [
    project?.name,
    project?.Ratings?.length,
    usersRelated?.id,
    Changefullfiled,
  ]);

  useEffect(() => {
    return () => {
      dispatch(cleanDataProject());
    };
  }, []);

  return (
    <>
      {project.name ? (
        <div className=" p-2.5 pb-10 flex items-center justify-center ">
          <section className="  w-full md:max-w-projectDetail font-medium   text-darkGray">
            <figure className="flex items-center justify-center py-2 ">
              <img
                src={
                  project?.image_cover
                    ? project?.image_cover
                    : "https://img.freepik.com/vector-premium/vector-icono-logotipo-mecanico-llave-engranaje_304830-274.jpg"
                }
                alt={project?.name}
                className=" w-3/4 object-contain md:max-w-registerMd   "
              />
            </figure>

            <h2 className="w-full text-center text-2xl font-bold py-3">
              {project?.name}
            </h2>
            <div className="flex flex-col gap-1.5">
              <TextPair text1={"Post created:"} text2={project?.initial_date} />
              <TextPair
                text1={"Start date project:"}
                text2={project?.deadline}
              />
              <TextPair
                text1={"Target amount:"}
                text2={`$${project?.goal_amount}`}
              />
              <TextPair
                text1={"Collected so far:"}
                text2={`$${project.collected_amount}`}
              />
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
              <TextPair text1={"Score:"} text2={project?.average_rating} />

              <TextPair text1={"Status:"} text2={project?.status} />

              <TextPair text1={"Bussines Plan"} />
              <p className="inline text-xs text-darkGray font-regular">
                {project?.description}
              </p>
              <TextPair text1={"Gallery"} />
              <div className="flex flex-col gap-3 ">
                <div className="md:grid md:grid-cols-2 flex flex-col gap-3 md:p-3 ">
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
                  <GalleryMedium
                    url={
                      "https://lh5.googleusercontent.com/p/AF1QipPDzJz89oKreiB1npMrZH38_V3EMJRVYdjIzdtY=w650-h486-k-no"
                    }
                    description={
                      "Al venir al mundo fueron delicadamente mecidas por las manos de la lustral Doniazada, su buena tía, que grabó sus nombres sobre hojas de oro coloreadas de húmedas pedrerías y las cuidó bajo el terciopelo de sus pupilas hasta la adolescencia dura, para esparcirlas después, voluptuosas y libres, sobre el mundo oriental, eternizado por su sonrisa. Yo os las entrego tales como son, en su frescor de carne y de rosa. Sólo existe un método honrado y lógico de traducción: la «literalidad», una literalidad impersonal, apenas atenuada por un leve parpadeo y una ligera sonrisa del traductor. Ella crea, sugestiva, la más grande potencia literaria. Ella produce el placer de la evocación. Ella es la garantía de la verdad. Ella es firme e inmutable, en su desnudez de piedra. Ella cautiva el aroma primitivo y lo cristaliza. Ella separa y desata... Ella fija."
                    }
                  />
                </div>

                {userRole === "investor" && (
                  <button
                    onClick={() => setInvestView(true)}
                    className="bg-gray-900 font-normal text-lg flex items-center justify-center my-4 gap-2 text-yellow-200 h-12 rounded-sm"
                  >
                    Invest
                    <IoWalletOutline className="text-xl" />
                  </button>
                )}

                {investView ? (
                  <InvestInProject setInvestmenView={setInvestView} />
                ) : (
                  <></>
                )}

                <CommentsSection />
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen   w-full -z-10">
          <Loading
            width={20}
            height={20}
            borderWeight={5}
            loadingText={true}
            border_t_color={"border-t-primar"}
          />
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
