/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors :{
        palewhite : "#FCFBF9",
        paleblue : "#24323D",
        palegreen : "#67695E",
        paleskin : "#EEE6DB",
        palegray : "#494947",
        lightskin : "#FCF7F1",
        paleorange : "#C1A78E",
        palesky : "#4B5356",
        paleyellow : "#9F9361",
      }
    },
  },
  plugins: [],
}

