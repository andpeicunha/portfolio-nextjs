/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        dynamicSm: "clamp(17px, 4vw, 22px)",
        dynamicSm1: "clamp(23px, 6vw, 30px)",
        dynamicMd: "clamp(10px, 8vw, 25px)",
        dynamicLg: "clamp(40px, 7vw, 70px)",
      },
      backgroundImage: {
        'foto-andre': "url('/photo-andre-site.png')",
      },
      colors: {
        'verde-ti-vivo': '#56DDC1',
      },
    },
  },
  plugins: [],
}