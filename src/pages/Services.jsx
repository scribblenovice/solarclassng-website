import { NavLink } from "react-router-dom";
import { servicesArray } from "../resources";
import { useState } from "react";

const Services = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="w-screen relative">
      <div className="w-[80%] h-[1.5px] bg-solar-green mx-auto rounded-md bg-opacity-30"></div>
      <div className="w-[90%] py-20 lg:py-32 mx-auto relative z-20">
        <div className="lg:flex items-center mb-10">
          <div className="w-full mb-6 lg:mb-0">
            <h2 className="text-lg font-black anta flex items-center text-solar-blue">
              Best quality solutions
              <div className="ml-3 inline-block w-[30px] h-[3px] bg-solar-blue"></div>
            </h2>
            <p className="anta font-extrabold mt-2 text-3xl lg:text-5xl text-gray-900 leading-10 text-opacity-90">
              Our Services
            </p>
          </div>
          <p className="siliguri text-gray-800 text-base sm:text-lg md:text-2xl w-full">
            We offer a wide variety of comprehensive solutions to satisfy the
            needs and requirements of our customers. We have all resources
            required to complete any size of project anywhere in Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-8 lg:pt-16">
          {servicesArray.map((service, index) => (
            <NavLink to={service.to} key={index}>
              <div
                onMouseEnter={() => setActiveId(service.id)}
                onMouseLeave={() => setActiveId(null)}
                className="cursor-pointer flex flex-col justify-between bg-gray-50 p-6 rounded-lg hover:shadow-lg transition ease-linear duration-300 shadow-2xl border-[1px] border-gray-400 h-full"
              >
                <img src={service.img} className="w-full h-[180px]" alt="" />

                <h3 className="text-xl font-semibold anta text-solar-blue pt-5">
                  {service.title}
                </h3>
                <p className="siliguri text-gray-800 text-sm md:text-base my-5">
                  {service.description}
                </p>
                <button className={`w-full rounded-sm transition-all ease-linear duration-300 ${activeId===service.id?"bg-solar-blue bg-opacity-90 text-white": "bg-gray-300 text-gray-900"} text-left flex justify-between items-center h-[50px] overflow-hidden`}>
                  <span className="pl-5 py-5 siliguri tracking-wide font-semibold">Learn More</span>
                  <TrapeziumArrow isActive={activeId === service.id} />
                </button>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


const TrapeziumArrow = ({ isActive }) => {
  return (
    <div className="relative w-[60px] h-[60px] transition-all duration-500">
      {/* Trapezium */}
      <div
        className={`w-full h-full transition-all duration-500 ${
          isActive ? "bg-solar-green" : "bg-solar-blue"
        }`}
        style={{
          clipPath: "polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      ></div>

      {/* Arrow line */}
      <div className="absolute top-1/2 left-[12px] w-[50%] h-1 bg-white transform -translate-y-1/2 transition-all duration-500" />

      {/* Arrow head */}
      <div
        className="absolute top-1/2"
        style={{
          left: "60%",
          transform: "translateY(-50%)",
        }}
      >
        <div className="w-0 h-0 border-t-[8px] border-b-[8px] border-l-[8px] border-transparent border-l-white transition-all duration-500"></div>
      </div>
    </div>
  );
};
