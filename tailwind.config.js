/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5691FC",
        secondary: "#65E0C7",
        thirth: "#FFFEC3",
        grayLight: "#EDEDED",
        grayLightMed: "#B0B0B0",
        labelRed: "#BA3622",
        greenPrimary: "#1C997F",
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
