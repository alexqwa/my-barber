/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        archivo_500: ["Archivo_500Medium"],
        archivo_600: ["Archivo_600SemiBold"],
        archivo_700: ["Archivo_700Bold"],
        poppins_400: ["Poppins_400Regular"],
        poppins_500: ["Poppins_500Medium"],
        poppins_600: ["Poppins_600SemiBold"],
      },
    },
  },
  plugins: [],
};
