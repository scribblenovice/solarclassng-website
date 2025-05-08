import { useState } from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="w-screen relative testimonialbg bg-[#f6f3ee] bg-top">
      <div className="w-[80%] h-[1.5px] bg-solar-green mx-auto rounded-md bg-opacity-30"></div>
      <div className="w-[90%] py-20 lg:py-32 mx-auto relative z-20">
        <div className="lg:flex items-center mb-10">
          <div className="w-full mb-6 lg:mb-0">
            <h2 className="text-lg font-black anta flex items-center text-solar-blue">
              Our Clients testimonials
              <div className="ml-3 inline-block w-[30px] h-[3px] bg-solar-blue"></div>
            </h2>
            <p className="anta font-extrabold mt-2 text-3xl lg:text-5xl text-gray-900 leading-10 text-opacity-90">
              What People Say
            </p>
          </div>
          <p className="siliguri text-gray-800 text-base sm:text-lg md:text-2xl w-full">
            We take pride in delivering projects of the highest quality and
            standard to our customers.
          </p>
        </div>
        <div className="px-2 lg:px-64 mt-5 lg:mt-10">
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
