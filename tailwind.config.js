/** @type {import('tailwindcss').Config} */
const COLORS = {
  electric_violet: "#6448FE",
  purple: "#600594",
};

module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        linear_gradient: `${COLORS.electric_violet} to ${COLORS.purple}`,
        sunset_orange: "#FF5252",
        white: "#FFFFFF",
        mischka: "#DEDDDF",
        mamba: "#8E8593",
        violet: "#21092F",
      },
      fontSize: {
        body: "18px",
      },
    },
  },
  plugins: [],
};
