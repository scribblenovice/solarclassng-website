import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import src from "../assets/logo.png";
import Submenu from "./Submenu";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpenNav(false); // close nav on route change
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services", hasSubmenu: true },
    { name: "Power Audit", path: "/power-audit" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <>
      {openNav && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden"
          onClick={() => setOpenNav(false)}
        ></div>
      )}
      <nav
        className={`fixed siliguri top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black shadow-sm shadow-solar-blue"
            : "bg-gray-600 bg-opacity-30"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <Link to="/">
            <img src={src} alt="Logo" className="h-12" />
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpenNav(!openNav)}
            className="lg:hidden focus:outline-none"
          >
            <div className="space-y-1">
              <span className={`block h-0.5 w-6 bg-white`}></span>
              <span className={`block h-0.5 w-6 bg-white`}></span>
              <span className={`block h-0.5 w-6 bg-white`}></span>
            </div>
          </button>

          {/* Navigation Links */}
          <ul
            className={`
            flex-col lg:flex-row lg:flex lg:static absolute left-0 top-20 w-4/5 lg:w-auto bg-black lg:bg-transparent text-white lg:text-black space-y-6 lg:space-y-0 lg:space-x-8 p-6 lg:p-0 transition-all duration-300 ease-in-out ${
              openNav ? "flex pb-[1000px] lg:pb-0" : "closeNav lg:translate-x-0 pb-[1000px] lg:pb-0"
            }`}
          >
            {navItems.map((item, idx) => (
              <li
                key={idx}
                onMouseEnter={() => item.hasSubmenu && setIsSubmenuOpen(true)}
                onMouseLeave={() => item.hasSubmenu && setIsSubmenuOpen(false)}
                className="relative group"
              >
                <Link
                  to={item.path}
                  className={`text-white block text-lg font-medium hover:text-blue-600 transition-all ease-linear duration-300`}
                >
                  {item.name}
                </Link>
                {item.hasSubmenu && (
                  <Submenu
                    isOpen={isSubmenuOpen}
                    onClose={() => setIsSubmenuOpen(false)}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
