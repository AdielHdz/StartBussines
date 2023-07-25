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

  console.log(SlidesStyles);

  return (
    <>
      <SlidesStyles dataLength={slides.length} inverter={false} />
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
