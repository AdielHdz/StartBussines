"use client";
import { useState } from "react";
import CardClients from "./CardClients";
import "../../app/globals.css";
import SlidesStyles from "../Animation/SlidesStyles";
const Cards = () => {
  const [slides, setSlides] = useState([
    {
      content:
        "Tailwinds CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.",
      name: "Maria Cervantes",
      job: "Estudiante",
    },
    {
      content: "Esta es la diapositiva 2.",
      name: "Lizbeth",
      job: "Estudiante",
    },
    {
      content: "Esta es la diapositiva 3.",
      name: "Samadi Lasso",
      job: "Estudiante de Mecánica Dental",
    },
    {
      content: "Esta es la diapositiva 3.",
      name: "Adiel Hernandez",
      job: "Full Stack Developer",
    },
  ]);

  return (
    <>
      <SlidesStyles dataLength={slides.length} inverter={false} />

      <h5 className=" text-start w-full text-primar font-medium">
        Entrepreneurs
      </h5>
      <div className="slider relative w-full  h-containerCards items-center  ">
        <div className="slide-track py-4 gap-x-5">
          {slides.map((container) => (
            <CardClients
              key={container.name}
              name={container.name}
              content={container.content}
              job={container.job}
            />
          ))}
          {slides.map((container) => (
            <CardClients
              key={container.name}
              name={container.name}
              content={container.content}
              job={container.job}
            />
          ))}
        </div>

        <h5 className=" text-start w-full text-primar font-medium">
          Investors
        </h5>
        <div className="slide-track-reverse py-4 gap-x-5">
          {slides.map((container) => (
            <CardClients
              key={container.name}
              name={container.name}
              content={container.content}
              job={container.job}
            />
          ))}
          {slides.map((container) => (
            <CardClients
              key={container.name}
              name={container.name}
              content={container.content}
              job={container.job}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
