import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

import { Link } from "react-scroll";

const slides = [
  {
    id: 0,
    class: "solarbg",
    header: "Solar energy solutions",
    parTxt: "WE PROVIDE INNOVATIVE OFF-GRID SOLAR SOLUTIONS FOR OUR CUSTOMERS",
  },
  {
    id: 1,
    class: "accessbg",
    header: "Access control and surveillance solutions",
    parTxt:
      "EMPOWERING SECURITY THROUGH SEAMLESS ACCESS AND VIGILANT SURVEILLANCE SOLUTIONS",
  },
  {
    id: 2,
    class: "ictbg",
    header: "Information and Communication Technology",
    parTxt:
      "EMPOWERING CONNECTIVITY AND EFFICIENCY THROUGH CUTTING-EDGE ICT SOLUTIONS",
  },
  {
    id: 3,
    class: "techbg",
    header: "Technology training and consultancy",
    parTxt:
      "  DRIVING BUSINESS THROUGH STRATEGIC TECHNOLOGY INSIGHTS AND INNOVATIVE SOLUTIONS",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative">
      <div className="carousel-container h-full">
        <div
          className="carousel-slides h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex items-center relative carousel-slide py-32 md:py-48 lg:py-52"
            >
              <div
                className={`${
                  currentSlide === slide.id ? "move" : ""
                } h-full w-full absolute top-0 bottom-0 left-0 right-0 z-0 bg-blue-gray-700 ${
                  slide.class
                }`}
              ></div>
                <div className="mx-auto text-white z-10 relative text-center w-[95%] flex flex-col justify-evenly">
                  <h1 className="anta text-lg text-center md:text-xl">
                    {slide.header}
                  </h1>
                  <p className="mt-5 md:mt-7 font-semibold text-xl md:text-3xl lg:text-5xl leading-10 lg:leading-[70px] mb-5 lg:mb-0 siliguri">
                    {slide.parTxt}
                  </p>
                </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="carousel-control carousel-control-prev"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="carousel-control carousel-control-next"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>

      <div className="carousel-indicators bottom-5 lg:bottom-4 left-1/2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`carousel-indicator mx-5 w-6 h-6 md:w-10 md:h-10 bg-blend-multiply ${
                slide.class
              } ${index === currentSlide ? "active" : "bg-gray-500"}`}
            />
          ))}
      </div>
    </div>
  );
};

export default Carousel;
