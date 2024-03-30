import { useState } from "react";
import { Link } from "react-router-dom";
import src from "../assets/logo.png";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [scrollNumber, setScrollNumber] = useState(window.scrollY);
  window.addEventListener("scroll", () => {
    setScrollNumber(window.scrollY);
  });
  return (
    <>
      <nav
        className={`${
          scrollNumber >100 ? "bg-white shadow-lg opacity-100" : "bg-transparent opacity-0"
        } transition-all ease-linear
       duration-200 w-screen fixed top-0 z-50`}
      >
        <div className="h-20 flex navbar justify-between mx-auto w-[90%] sm:w-[80%]">
          <div className="w-36 static h-20 flex items-center">
            <Link href="/" className="">
              <img src={src} alt="" className=" h-16" />
            </Link>
          </div>
          <div
            className={`${
              openNav
                ? "openNav lg:-translate-x-0"
                : "closeNav lg:translate-x-0"
            } siliguri transition-all ease-linear duration-300  absolute top-20 left-0 bg-black lg:bg-transparent lg:static h-screen flex-col lg:flex-row lg:h-20 flex w-[70vw] sm:w-[60vw] md:w-[45vw] lg:w-[60%] lg:justify-between items-center ${
              scrollNumber > 0 ? "text-white lg:text-black" : "text-white"
            }`}
          >
            <Link
              to={`/`}
              className={`border-b-2 lg:border-b-0 py-5 lg:my-10 nav-link text-center relative text-base lg:text-xl w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
                scrollNumber > 0
                  ? "hover:text-black hover:bg-white lg:hover:text-solar-blue after:bg-black lg:after:bg-solar-blue"
                  : "lg:after:bg-white hover:text-black lg:hover:text-white hover:bg-white lg:hover:bg-transparent"
              }  transition-all ease-linear duration-200`}
            >
              <i class=" mr-3 ri-home-2-line lg:hidden text-2xl"></i>
              HOME
            </Link>
            <Link
            to={`/about-us`}
              className={`border-b-2 lg:border-b-0 py-5 lg:my-10 nav-link text-center relative text-base lg:text-xl w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
                scrollNumber > 0
                  ? "hover:text-black hover:bg-white lg:hover:text-solar-blue after:bg-black lg:after:bg-solar-blue"
                  : "lg:after:bg-white hover:text-black lg:hover:text-white hover:bg-white lg:hover:bg-transparent"
              }  transition-all ease-linear duration-200`}
            >
              <i class="mr-3 ri-community-line lg:hidden text-2xl"></i>
              ABOUT
            </Link>
            <Link
            to={`/services`}
              className={`border-b-2 lg:border-b-0 py-5 lg:my-10 nav-link text-center relative text-base lg:text-xl w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
                scrollNumber > 0
                  ? "hover:text-black hover:bg-white lg:hover:text-solar-blue after:bg-black lg:after:bg-solar-blue"
                  : "lg:after:bg-white hover:text-black lg:hover:text-white hover:bg-white lg:hover:bg-transparent"
              }  transition-all ease-linear duration-200`}
            >
              <i class="mr-3 ri-service-fill lg:hidden text-2xl"></i>
              SERVICES
            </Link>

            <Link
            to={`/contact-us`}
              className={`border-b-2 lg:border-b-0 py-5 lg:my-10 nav-link text-center relative text-base lg:text-xl w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
                scrollNumber > 0
                  ? "hover:text-black hover:bg-white lg:hover:text-solar-blue after:bg-black lg:after:bg-solar-blue"
                  : "lg:after:bg-white hover:text-black lg:hover:text-white hover:bg-white lg:hover:bg-transparent"
              }  transition-all ease-linear duration-200`}
            >
              <i class="mr-3 ri-contacts-line lg:hidden text-2xl"></i>
              CONTACT
            </Link>
          </div>
          <button
            className={`hamburger block lg:hidden ${openNav ? "active" : ""}`}
            onClick={() => {
              setOpenNav((prev) => {
                return !prev;
              });
            }}
          >
            <div
              className={`bar ${scrollNumber > 0 ? "bg-black" : "bg-white"}`}
            ></div>
            <div
              className={`bar ${scrollNumber > 0 ? "bg-black" : "bg-white"}`}
            ></div>
            <div
              className={`bar ${scrollNumber > 0 ? "bg-black" : "bg-white"}`}
            ></div>
          </button>
        </div>
      </nav>
    </>
  );
};
export default NavBar;

{
  /* <ul
          className={`z-0 absolute bg-black text-white w-screen left-0 flex flex-wrap justify-evenly ${
            active
              ? "service-menu-open top-20"
              : "service-menu-close -translate-y-full top-0"
          }`}
        >
          <li className=" text-center w-[50%] py-20 solar-bg bg-gray-700 font-bold">
            <Link to="home">OFF-GRID SOLAR ENERGY SOLUTIONS</Link>
          </li>

          <li className="text-center w-[50%] py-20 ict-bg bg-gray-700 font-bold">
            <Link to="home">
              INFORMATION AND COMMUNCATION TECHNOLOGY SERVICES
            </Link>
          </li>
          <li className="w-[50%] py-20 text-center tech-bg bg-gray-700 font-bold">
            <Link to="home">TECHNOLOGY TRAINING AND CONSULTANCY</Link>
          </li>
          <li className="text-center w-[50%] py-20 access-bg bg-gray-700 font-bold">
            <Link to="home">
              ELECTRONIC SECURITY SURVEILLANCE AND ACCESS CONTROL SOLUTIONS
            </Link>
          </li>
        </ul> */
}
