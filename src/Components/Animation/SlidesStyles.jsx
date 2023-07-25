const SlidesStyles = ({ dataLength, inverter }) => {
  const repeatSlides = dataLength * 2;

  return (
    <style jsx global>{`
      .slider {
        width: 100%;
        height: auto;
        margin: auto;
        overflow: hidden;
      }

      .slider .slide-track {
        display: flex;
        animation: scroll 40s linear infinite;
        /* -webkit-animation: scroll 40s linear infinite; */
        width: calc(20rem * ${repeatSlides});
      }

      .slide-track-reverse {
        display: flex;
        animation: scroll 40s linear infinite reverse;
        /*  -webkit-animation: scroll 40s linear infinite; */
        width: calc(20rem * ${repeatSlides});
      }

      .slider .slide {
        width: 20rem;
      }

      @keyframes scroll {
        0% {
          transform: translateX(0);
        }

        100% {
          transform: translateX(calc(-20rem * ${dataLength}));
        }
      }
    `}</style>
  );
};

export default SlidesStyles;
