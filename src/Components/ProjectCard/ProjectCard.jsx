import Link from "next/link";
import Image from "next/image";
export default function ProjectCard(props) {
  return (
    <div className=" rounded-lg bg-white w-full  max-w-registerMd h-25 m-5 border border-gray-400">
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        data-te-ripple-init
        data-te-ripple-color="light">
        <Image
          className="rounded-t-lg w-full h-full"
          src={props.image}
          alt={props.name}
          width={250}
          height={250}
        />
      </div>
      <div className="p-6">
        <Link href={`/contenedorbusqueda/projectDetail?id=${props.id}`}>
          <h5 className="text-xl font-semibold mb-2 text-darkGray">
            {props.name}
          </h5>
        </Link>
        <div className="text-sm flex flex-col items-center">
          <p className="mb-2">
            Goal amount:{" "}
            <span className="text-sm  text-primar">${props.goalAmount}</span>
          </p>
          <p className="mb-2">
            Collected amount:{" "}
            <span className="text-sm  text-primar">
              ${props.collectedAmount}
            </span>
          </p>
          <p className="mb-2">
            Contribution:{" "}
            <span className="text-sm  text-primar">
              ${props.investedAmount}
            </span>
          </p>
          <p className="mb-2">
            Categories:{" "}
            <span className=" text-second">{props.categories.join(", ")}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
