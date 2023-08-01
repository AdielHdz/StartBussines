export default function ProjectCard(props) {
  return (
    <div className=" rounded-lg bg-white w-33 h-25 m-5 border border-gray-400">
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        data-te-ripple-init
        data-te-ripple-color="light">
        <img className="rounded-t-lg" src={props.image} alt={props.name} />
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
          Invested amount: {props.investedAmount}
        </p>
        <button
          type="button"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light">
          Details
        </button>
      </div>
    </div>
  );
}
