// tailwind.config.js
// tailwind.config.js
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          pink: {
            50: '#fef9f9',   // very light pink
            100: '#fce4ec',  // light pink
            200: '#f8bbd0',  // soft pink
            300: '#f48fb1',  // pastel pink
            400: '#f06292',  // medium pink
            500: '#ec407a',  // standard pink
            600: '#d81b60',  // darker pink
            700: '#c2185b',  // even darker pink
            800: '#ad1457',  // very dark pink
            900: '#880e4f',  // dark red
          },
        },
      },
    },
    plugins: [],
  }
  