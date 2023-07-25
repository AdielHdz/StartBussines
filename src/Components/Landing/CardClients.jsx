"use client";
import "../../app/globals.css";
const CardClients = ({ name, content, job }) => {
  return (
    <figure className="relative slide m-0 flex flex-col justify-between rounded-xl font-medium text-sm p-3 w-full min-w-cards max-w-cards  text-gray-400 shadow-cards min-h-cards md:min-h-desktop  transition-shadow duration-300">
      <figcaption className="">
        <div className=" flex items-center justify-center text-darkGray mb-2">
          <img
            src="https://engineering.unl.edu/images/staff/Kayla-Person.jpg"
            alt="avatar"
            className="absolute left-2 top-2 w-12 h-12 object-cover rounded-full"
          />
          <h5 className="font-medium text-lg text-darkViolet">{name}</h5>
        </div>
      </figcaption>
      <p className="text-darkGray text-center font-normal">{job}</p>
      <blockquote className="">
        <p className=" text-center font-normal text-xs">
          {content.length > 80 ? content.substring(0, 80) + "..." : content}
        </p>
      </blockquote>
    </figure>
  );
};

export default CardClients;
