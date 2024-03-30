/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    // "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    colors: {
      'solar-blue': '#005D9A',
      'solar-green': '#4CAF50',
    },
    extend: {},
  },
  // plugins: [require("flowbite/plugin")],
});

