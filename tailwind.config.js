/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // content:["*"],
  //content: [
  //   "./index.html",
  //   "./src/**/*.{js,ts,jsx,tsx}",
  // ],
  theme: {
    extend: { //se agregan fuentes y colores no existentes
      fontFamily:{
        dmSans: "'DM Sans', sans-serif",
      },
      colors:{
          "green-color":"#802bb1",
        // "green-color":"#27AE60",
        "gray-color":"#828282",
        "card-color":"#212121",
        "color-background":"#171717",
        "menu-color":"#172554"
      },
      backgroundImage:{
        "open-menu": "url('src/assets/bx-menu.svg')",
        "close-menu": 'url("src/assets/bx-close.svg")',
        "open-menu-img": "url('src/assets/bg-img.jpg')",
      },
    },
  },
  plugins: [],
}

