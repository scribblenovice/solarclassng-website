import { Link } from "react-router-dom";
import NavBar from "../../globalcomponents/NavBar";
import ContactForm from "../../globalcomponents/ContactForm";
import { useState } from "react";
import Footer from "../../globalcomponents/Footer";

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="flex gap-y-5 flex-col justify-center items-center contact-page h-[60vh] lg:h-screen bg-no-repeat bg-cover bg-blend-multiply bg-gray-800 bg-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
          CONTACT US
        </h1>
        <div className="text-white">
          <Link
            to={`/`}
            className="mr-2 hover:text-solar-blue transition-all ease-linear duration-100"
          >
            Home
          </Link>
          <span className="mr-2">/</span>Contact Us
        </div>
      </div>
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-20 md:py-40 gap-y-8 gap-x-5">
        <div className="min-h-[15rem] py-5 px-5 md:col-span-2 xl:col-span-1 rounded-lg boxblur transition-all ease-linear duration-200">
          <h2 className="text-center text-solar-blue text-xl font-semibold anta my-2">
            ADDRESS
          </h2>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <i className="ri-map-pin-line text-4xl text-solar-green"></i>{" "}
              <span className="siliguri text-gray-700">
                #2,Close,off Monday Akunna Street, Greenfield Estate, off Ago
                Palace Way, Okota, Isolo LCDA, Lagos, Nigeria.
              </span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <i className="ri-map-pin-line text-4xl text-solar-green"></i>{" "}
              <span className="siliguri text-gray-700">
                15 Discovery Woods Villas, SW. Calgary, Alberta. T3H 5A6, Canada
              </span>
            </div>
          </div>
        </div>
        <div className="min-h-[15rem] py-5 px-5 rounded-lg boxblur transition-all ease-linear duration-200">
          <div className="flex flex-col md:flex-row items-center h-full">
            <div className="w-full md:w-fit grid place-items-center my-3">
              <i className="ri-mail-open-line text-6xl md:text-6xl lg:text-7xl text-solar-green"></i>
            </div>
            <div className="px-3 xl:px-1 h-[90px] max-w-full">
              <h2 className="text-center md:text-left text-solar-blue text-xl font-semibold anta ">
                EMAIL ADDRESS
              </h2>
              <span className="siliguri text-gray-700 text-center text-xl pt-1 inline-block">
                contact@solarclassng.com
              </span>
            </div>
          </div>
        </div>
        <div className="min-h-[15rem] py-5 px-5 rounded-lg boxblur transition-all ease-linear duration-200">
          <div className="flex flex-col md:flex-row items-center h-full">
            <div className="w-full md:w-fit grid place-items-center my-3">
              <i className="ri-whatsapp-line text-6xl md:text-6xl lg:text-7xl text-solar-green"></i>
            </div>
            <div className="px-3 xl:px-1 h-[90px]">
              <h2 className="text-center md:text-left text-solar-blue text-xl font-semibold anta ">
                PHONE
              </h2>
              <span className="siliguri text-gray-700 text-center text-xl">
                <span>NIG:</span>+234(0)802328694
                <br />
                <span>CAN:</span> +1 403 919 3009
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] lg:w-[70%] mx-auto">
        <div className="w-full flex justify-center">
          <div className="flex items-center">
            <hr className="h-1 w-10 bg-solar-green bg-opacity-80" />
            <h2 className="mx-5 text-solar-blue text-center text-xl md:text-4xl font-bold anta">
              SEND A MESSAGE
            </h2>
            <hr className="h-1 w-10 bg-solar-green bg-opacity-80" />
          </div>
        </div>
        <div className="mb-20">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Contact;
