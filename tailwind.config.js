/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "1287px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      sl: { max: "720px" },
      kl: { max: "480px" },
      km: { max: "320px" },
    },
  },
  plugins: [],
};
