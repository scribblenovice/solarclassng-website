import React from "react";
import { servicesArray } from "../resources";
import { Link, NavLink } from "react-router-dom";

const Submenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <></>
    //to be worked on

    
    // <div
    //   className={`absolute text-black py-2 w-80 bg-white rounded-lg shadow-lg ${
    //     isOpen ? "fade" : ""
    //   } hidden lg:top-10 lg:right-0 lg:flex lg:flex-col`}
    // >
    //   {servicesArray.map((el) => {
    //     return <NavLink to={el.to}>{el.headerTxt}</NavLink>;
    //   })}
    // </div>
  );
};

export default Submenu;
