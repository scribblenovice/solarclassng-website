import solar from "/images/about-img/solar.png";
import cctv from "/images/about-img/cctv.png";
import ict from "/images/about-img/ict.png";
import consulting from "/images/about-img/consulting.png";

import solarServices from "/images/project-gallery/project4.jpg";
import cctvServices from "/images/services/cctv.png";
import ictServices from "/images/services/ict.png";
import consultingServices from "/images/services/consulting.png";

export const aboutInfo = [
  {
    id: 0,
    src: "Provision of off-grid solar energy solutions to homes",
    description: "Solar installation",
    img: solar,
  },
  {
    id: 1,
    src: "Provision of electronic security surveillance and access control solutions",
    description: "CCTV installation",
    img: cctv,
  },
  {
    id: 2,
    src: "Provision of Information and Communication technology services",
    description: "ICT services",
    img: ict,
  },
  {
    id: 4,
    src: "Technology Training and consultancy services",
    description: "Consulting services",
    img: consulting,
  },
];

export const servicesArray = [
  {
    id: 0,
    title: "Solar Installation",
    img: solarServices,
    description:
      "We design and install efficient solar energy systems tailored for residential, commercial, and industrial use.",
    to: "/services/solar-installation",
  },
  {
    id: 1,
    title: "CCTV Installation",
    img: cctvServices,
    description:
      "Secure your property with advanced CCTV solutions and professional installation services.",
    to: "/services/cctv-and-access-control",
  },
  {
    id: 2,
    title: "ICT Services",
    img: ictServices,
    description:
      "From networking to system integration, we provide a wide range of ICT services to power your digital needs.",
    to: "/services/ict-solutions",
  },
  {
    id: 3,
    title: "Tech Consulting",
    img: consultingServices,
    description:
      "Expert guidance on technology strategy, digital transformation, and infrastructure optimization.",
    to: "/services/tech-consulting",
  },
];

export const solarSolutions = [
  {
    title: "Solar panel and batteries",
    description:
      "we provide efficient solar panels and batteries for harnessing solar energy",
  },
  {
    title: "Solar inverters",
    description: "efficient conversion of dc from our solar panels to ac",
  },
  {
    title: "Solar charge controllers",
    description:
      "our charge controllers efficiently ensures your batteries and energy in the system is well managed",
  },
  {
    title: "Solar generators",
    description:
      "our solar generators allows you to harvest solar energy whilst being mobile",
    icon: "fas fa-search",
  },
  {
    title: "Solar streetlights",
    description:
      "our streetlights provide environmentally friendly and sustainable lighting solution for outdoor areas.",
    icon: "fas fa-search",
  },
  {
    title: "Solar home appliances",
    description:
      "our home appliances removes the need for NEPA. power your appliances using solar energy",
    icon: "fas fa-search",
  },
];

export const servicesFooter = [
  {
    id: 0,
    to: "/services/solar-installation",
    headerTxt: "Solar Solutions",
  },
  {
    id: 1,
    to: "/services/cctv-and-access-control",
    headerTxt: "CCTV and Access Control",
  },
  {
    id: 2,
    to: "/services/ict-solutions",
    headerTxt: "ICT Services",
  },
  {
    id: 3,
    to: "/services/tech-consulting",
    headerTxt: "Training and Consultancy",
  },
];

export const navFooter = [
  {
    id: 0,
    to: "/",
    headerTxt: "Home",
  },
  {
    id: 1,
    to: "/about-us",
    headerTxt: "About Us",
  },
  {
    id: 2,
    to: "/services",
    headerTxt: "Services",
  },
  {
    id: 3,
    to: "/contact-us",
    headerTxt: "Contact Us",
  },
];

export const accessControl = [
  { id: 0, title: "Perimeter Intrusion and detection system (PIDS)" },
  {
    id: 1,
    title:
      "Indoor and outdoor closed-circuit television (CCTV) surveillance & monitoring",
  },
  { id: 2, title: "Command and control room" },
  { id: 3, title: "Biometric and identification systems" },
  { id: 4, title: " Electronic (key, Card, barrier) access control systems" },
];

export const ictArray = [
  {
    id: 0,
    title:
      "Telecommunications services using various technologies (microwave radio, VSAT, Fiber Optics)",
  },
  {
    id: 1,
    title:
      "IT infrastructure deployment and management / Structured office cabling",
  },
  { id: 2, title: "LAN/WAN deployment" },
  {
    id: 3,
    title:
      "General IT equipment procurement, deployment and maintenance support",
  },
  {
    id: 4,
    title:
      "Onsite and remote telecommunication and IT facility management services",
  },
];
