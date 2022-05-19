
module.exports = {
  content: ["./src/**/*.tsx",
            "./src/**/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        cyan:{
          300:"#26b8c5",
          100:"#3cc5ec"
        }
      },
      borderRadius:{
      md: '4px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
