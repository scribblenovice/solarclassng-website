import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Fade, Zoom } from "react-reveal";
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
    <div className="relative h-[100vh]">
      <div className="carousel-container h-full">
        <div
          className="carousel-slides h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex items-center relative carousel-slide"
            >
              <div
                className={`${
                  currentSlide === slide.id ? "move" : ""
                } h-full w-full absolute top-0 bottom-0 left-0 right-0 z-0 bg-blue-gray-700 ${
                  slide.class
                }`}
              ></div>
              <Fade bottom>
                <div className="mx-auto text-white z-10 relative text-center w-[90%] flex flex-col justify-evenly h-[60%]">
                  <p className="anta text-lg text-center md:text-xl">
                    {slide.header}
                  </p>
                  <h1 className="font-black text-2xl md:text-5xl leading-10 lg:leading-[70px] mb-5 lg:mb-0">
                    {slide.parTxt}
                  </h1>
                  {/* <Link class="anta transition-all ease-linear duration-300 hover:bg-white hover:text-black mx-auto my-5 w-40 py-5 px-2 block bg-black rounded-lg p-4 text-white">
                    LEARN MORE
                  </Link> */}
                </div>
              </Fade>
            </div>
          ))}
        </div>
        <Zoom>
          <div>
            <Link
              to={`quote`}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="bg-solar-blue text-center absolute text-lg text-white bottom-24 lg:bottom-28 left-1/2  -translate-x-1/2 px-4 py-3 lg:px-5 rounded-md cursor-pointer font-bold hover:scale-105 transition-all ease-linear duration-300"
            >
              GET A QUOTE
            </Link>
          </div>
        </Zoom>
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
        <Fade bottom>
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`carousel-indicator mx-5 w-12 h-12 md:w-14 md:h-14 bg-blend-multiply ${
                slide.class
              } ${index === currentSlide ? "active" : "bg-gray-500"}`}
            />
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Carousel;
