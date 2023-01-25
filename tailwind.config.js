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
        corpo: "clamp(15px, 4vw, 25px)",
        titulo0: "clamp(14px, 3vw, 30px)",
        titulo1: "clamp(17px, 4vw, 25px)",
        titulo2: "clamp(22px, 6vw, 32px)",
        titulo3: "clamp(36px, 8vw, 78px)",
        titulo4: "clamp(40px, 8vw, 78px)",
      },
      backgroundImage: {
        'foto-andre': "url('/photo-andre-site.png')",
      },
      colors: {
        'verde-ti-vivo': '#56DDC1',
        'verde-ti-1': 'rgb(13, 238, 114)',
      },
    },
  },
  plugins: [],
}