import solar1 from "./assets/services/solar/solution1.png";
import solar2 from "./assets/services/solar/solution2.png";
import solar3 from "./assets/services/solar/solution3.webp"
import solar4 from "./assets/services/solar/solution4.jpg"
import solar5 from "./assets/services/solar/solution5.webp"


export const aboutInfo = [
  {
    id: 0,
    src: "Provision of off-grid solar energy solutions to homes",
  },
  {
    id: 1,
    src: "Provision of electronic security surveillance and access control solutions",
  },
  {
    id: 2,
    src: "Provision of Information and Communication technology services",
  },
  {
    id: 3,
    src: "  Equipment procurement and project management",
  },
  {
    id: 4,
    src: " Technology Training and consultancy services",
  },
];
export const Check = ({ classname }) => {
  return (
    <>
      <svg
        className={classname}
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 512 429.76"
      >
        <path
          className="text-white bg-white"
          fill="white"
          // fill-rule="nonzero"
          d="M96.3 0h242.43c-15.45 14.62-30.92 29.65-46 44.92l-.78.79H96.3c-13.9 0-26.55 5.7-35.72 14.87-9.17 9.17-14.87 21.82-14.87 35.71v237.17c0 27.86 22.73 50.59 50.59 50.59h319.4c27.7 0 50.59-22.89 50.59-50.59V100.71c12.47-14.55 25-28.94 37.48-43.14A94.985 94.985 0 0 1 512 96.29v237.17c0 52.91-43.39 96.3-96.3 96.3H96.3c-52.84 0-96.3-43.47-96.3-96.3V96.29C0 69.8 10.83 45.71 28.27 28.27 45.71 10.83 69.8 0 96.3 0zm92.81 146.72c22.15 12.77 36.58 23.38 53.76 42.31 44.55-71.71 94.83-113.36 157.71-169.76l6.15-2.37h68.8C383.28 119.36 314.7 201.19 245.77 324.73c-41.43-69.82-69.31-114.77-129.55-161.54l72.89-16.47z"
        />
      </svg>
    </>
  );
};
export const servicesArray = [
  {
    id: 0,
    to: "/services/solar-installation",
    headerTxt: "OFF-GRID SOLAR ENERGY SOLUTIONS",
    bg: "solarbg",
  },
  {
    id: 1,
    to: "/services/cctv-and-access-control",
    headerTxt: "ELECTRONIC SECURITY SURVEILLANCE AND ACCESS CONTROL SOLUTIONS",
    bg: "accessbg",
  },
  {
    id: 2,
    to: "/services/ict-solutions",
    headerTxt: "INFORMATION AND COMMUNCATION TECHNOLOGY SERVICES",
    bg: "ictbg",
  },
  {
    id: 3,
    to: "/services/tech-consulting",
    headerTxt: "TECHNOLOGY TRAINING AND CONSULTANCY",
    bg: "techbg",
  },
];

export const solarSolutions = [
  {
    img: solar1,
    title: "SOLAR PANELS AND BATTERIES",
    description: "we provide efficient solar panels and batteries for harnessing solar energy",
  },
  {
    img: solar2,
    title: "SOLAR INVERTERS",
    description:
      "efficient conversion of dc from our solar panels to ac",
  },
  {
    img: solar3,
    title: "SOLAR CHARGE CONTROLLERS",
    description:
      "our charge controllers efficiently ensures your batteries and energy in the system is well managed",
  },
  {
    img: solar4,
    title: "SOLAR GENEATORS",
    description:
      "our solar generators allows you to harvest solar energy whilst being mobile",
    icon: "fas fa-search",
  },
  {
    img: solar5,
    title: "SOLAR STREETLIGHTS",
    description:
      "our streetlights provide environmentally friendly and sustainable lighting solution for outdoor areas.",
    icon: "fas fa-search",
  },
  {
    img: solar2,
    title: "SOLAR HOME APPLIANCES",
    description:
      "our home appliances removes the need for NEPA. power your appliances using solar energy",
    icon: "fas fa-search",
  },
];
