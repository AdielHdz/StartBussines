import Image from "next/image";
export default function ProjectCard(props) {
  return (
    <div className=" rounded-lg bg-white w-33 h-25 m-5 border border-gray-400">
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        data-te-ripple-init
        data-te-ripple-color="light">
        <Image
          className="rounded-t-lg w-full h-full"
          src={props.image}
          alt={props.name}
          width={150}
          height={150}
        />
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
          {props.name}
        </h5>
        <p className="mb-4 text-base text-neutral-600">{props.description}</p>
        <p className="mb-4 text-base text-neutral-600">
          Categories: {props.categories}
        </p>
        <p className="mb-4 text-base text-neutral-600 ">
          Goal amount: {props.goalAmount}
        </p>
        <p className="mb-4 text-base text-neutral-600 ">
          Collected amount: {props.collectedAmount}
        </p>
        <p className="mb-4 text-base text-neutral-600 ">
          Contribution: {props.investedAmount}
        </p>
      </div>
    </div>
  );
}
