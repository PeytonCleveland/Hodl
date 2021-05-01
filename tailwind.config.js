module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    scale: {
      0: "0",
      25: ".25",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      103: "1.03",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
      200: "2",
    },
    fontFamily: {
      sans: ['"Open Sans"', "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        //orange color scheme
        //primary: "#F7CE68",
        //secondary: "#FBAB7E",
        //light scheme
        //primary: "ebf4f5",
        //secondary: "b5c6e0",
        //deep scheme
        primary: "#557c93",
        secondary: "#08203e",
      },
      animation: {
        "bounce-slow": "bounce 1s linear 2.5",
      },
    },
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
      rotate: ["active", "group-hover"],
      translate: ["group-hover"],
      display: ["group-hover"],
    },
  },
  plugins: [require("@tailwindcss/custom-forms")],
};
