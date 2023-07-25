/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontSize: {
      sm: "10px",
      md: "14px",
      lg: "16px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "28px",
      "4xl": "30px",
    },

    screens: {
      mobile: { max: "576px" },
      // => @media (max-width: 576px) {...}

      tablet: { min: "576px", max: "991" },
      // => @media (min-width: 640px) { ... }

      desktop: "992px",
      // => @media (min-width: 992px) { ... }
    },

    extend: {
      colors: {
        primary: "#15202b",
        secondary: "#1363DF",
        sadafi: "#E8E2E2",
        glassMorphism: "rgba(255, 255, 255, 0.2)",
        smokeWhite: "#F5F5F5",
        white: "#FFFFFF",
        black: "#212121",
        success: "#3BD49B",
        warning: "#FFE15D",
        error: "#DC3535",
      },
    },
  },
  plugins: [],
};
