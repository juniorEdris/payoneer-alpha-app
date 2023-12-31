/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        tightest: "-0.01em",
      },
      boxShadow: {
        hover: "0px 60px 80px -14px rgba(0, 0, 0, 0.08)",
        "featured-prod-hover": "0px 8px 18px -7px rgba(0, 0, 0, 0.1)",
      },
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
        brand: "url('/assets/images/hero/brand-bg.png')",
      },
      colors: {
        // #475E68
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
        "card-border": "#f3f3f3",
        "secondary-bg": "#F4FCFF",
      },
    },
  },
  plugins: [],
};
