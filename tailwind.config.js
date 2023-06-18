/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(min-aspect-ratio: 13/20)" },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-hero":
          "linear-gradient(231.37deg, #7DE1EF 15.49%, #D3F6FB 84.94%)",

        hero: "url('/assets/images/hero/hero_bg.png')",
      },
      colors: {
        dark: "#000002",
        light: "#FFFFFF",
        "price-orange": "#FF4516",
        "search-bg": "#4DC3F7",
        "price-dark": "#2A2A2A",
        "secondary-dark": "#262626",
        "header-blue": "#1E66FF",
        "secondary-blue": "#1D65FF",
        "nav-dark": "#5F5F5F",
        "button-bg": "#2B2B2B",
        "counter-yellow": "#FFC221",
        placeholder: "#BEBEBE",
      },
    },
  },
  plugins: [],
};
