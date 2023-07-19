// Importa las bibliotecas React, useState y useEffect.
import React, { useState, useEffect } from "react";

// Crea un componente llamado Carousel.
const Carousel = () => {
  // Crea un estado llamado slides que almacena una lista 
  //de diapositivas.
  
  const [slides, setSlides] = useState([
    {
     
      content: "Esta es la diapositiva 1.",
      name: "Diego",
      job: "Estudiante",
    },
    {
     
      content: "Esta es la diapositiva 2.",
      name: "Diego",
      job: "Estudiante",
    },
    {
      
      content: "Esta es la diapositiva 3.",
      name: "Diego",
      job: "Estudiante",
    },
  ]);

  // Crea una función llamada useEffect que se ejecuta cuando el estado cambia.
  useEffect(() => {
    // Obtén el índice de la diapositiva actual.
    const currentIndex = Math.floor(slides.length / 2);

    // Establece la diapositiva actual.
    setActiveSlide(slides[currentIndex]);
  }, [slides]);

  // Crea una función llamada handleNextSlide que se llama cuando el usuario hace clic en el botón "Siguiente".
  const handleNextSlide = () => {
    // Obtén el índice de la diapositiva siguiente.
    const nextIndex = (currentIndex + 1) % slides.length;

    // Establece la diapositiva actual.
    setActiveSlide(slides[nextIndex]);
  };

  // Crea una función llamada handlePreviousSlide que se llama cuando el usuario hace clic en el botón "Anterior".
  const handlePreviousSlide = () => {
    // Obtén el índice de la diapositiva anterior.
    const previousIndex = (currentIndex - 1 + slides.length) % slides.length;

    // Establece la diapositiva actual.
    setActiveSlide(slides[previousIndex]);
  };

  // Devuelve el carrusel.
  return (
    <div className="carousel">
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            onMouseDown={() => setActiveSlide(slide)}
          >
            <p>{slide.content}</p>
            <h5>{slide.name}</h5>
            <h5>{slide.job}</h5>
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={handlePreviousSlide}>Anterior</button>
        <button onClick={handleNextSlide}>Siguiente</button>
      </div>
    </div>
  );
};

// Exporta el componente Carousel.
export default Carousel;
