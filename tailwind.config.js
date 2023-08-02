/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        whites: "#FFFFFF",
        blacks: "#000000",
        primar: "#1C997F",
        second: "#5691FC",
        thirth: "#FFFEC3",
        grayLight: "#EDEDED",
        grayLightMedium: "#B0B0B0",
        darkGray: "#5A5A5A",
        labelRed: "#BA3622",
        redError: "#FF2E2E",
        greenActive: "#2FB401",
        yellowWarning: "#D9B704",
        redBrown: "#851E25",
        darkViolet: "#520C30",
        orangeMedium: "#BA3622",
      },
      boxShadow: {
        cards: "0 0 20px 1px rgba(0,0,0,0.2)",
        cardsInset: "inset 0 0 20px 1px rgba(0,0,0,0.2)",
      },
      height: {
        cards: "10rem",
        containerCards: "15rem",
        inputs: "3rem",
        textArea: "6rem",
      },
      width: {
        allContent: "100%",
      },
      minHeight: {
        cards: "10rem",
        desktop: "15rem",
        textArea: "6rem",
      },
      maxWidth: {
        cards: "20rem",
        registerMd: "30rem",
        registerXs: "30rem",
        images: "25rem",
      },
      maxHeight: {
        cards: "15rem",
      },
      minWidth: {
        cards: "20rem",
      },
      animation: {
        "spin-slow": "spin 1s linear infinite",
      },
      // Puedes agregar más opciones de opacidad si es necesario
      opacity: {},
      // Puedes agregar más opciones de fondo de imagen si es necesario
      backgroundImage: {},
    },
    // Nueva clase para quitar la línea de abajo de los enlaces
    // Aquí establecemos la propiedad `text-decoration-line: none;`
    // para eliminar la decoración de línea de los enlaces
    // que tengan la clase `.no-underline`
    typography: (theme) => ({
      DEFAULT: {
        css: {
          a: {
            textDecorationLine: "none",
          },
        },
      },
    }),
  },
  plugins: [],
};
