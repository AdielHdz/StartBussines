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
        primary: "#1C997F",
        secondary: "#5691FC",
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
