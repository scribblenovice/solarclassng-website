import { Link } from "react-router-dom";
import NavBar from "../../globalcomponents/NavBar";
import src from "../../assets/services/solar-man.png";
import src1 from "../../assets/solar.jpg";
import { solarSolutions } from "../../resources";
import { useState } from "react";
import Quote from "../Quote";
import Footer from "../../globalcomponents/Footer";

const Solar = () => {
  const [active, setActive] = useState(false)
  const [id, setId]= useState(0)
 function parText(id){
  setActive(true);
  setId(id)
  console.log(id)
 }

  console.log(window.location);
  return (
    <>
    <section>
      <NavBar />
      <div className="flex gap-y-5 flex-col justify-center items-center solar-service h-screen bg-no-repeat bg-cover bg-blend-multiply bg-gray-800 bg-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
          SOLAR ENERGY SOLUTIONS
        </h1>
        <div className="text-white">
          <Link
            to={`/`}
            className="mr-2 hover:text-solar-blue transition-all ease-linear duration-100"
          >
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            to={`/services`}
            className="mr-2 hover:text-solar-blue transition-all ease-linear duration-100"
          >
            Services
          </Link>
          <span className="mr-2">/</span>Solar energy solutions
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="w-[90%] mx-auto py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <img src={src1} alt="" className="w-full h-full rounded-md" />

            <div className="w-full mb-10 lg:mb-0 ">
              <div className="">
                <div className="px-4 pb-3 pl-4 mx-auto border-b-4 border-green-500 w-fit">
                  <h2 className="text-left lg:text-left  text-3xl font-black md:text-5xl anta">
                    OFF GRID SOLAR ENERGY SOLUTIONS
                  </h2>
                </div>
                <p className="siliguri text-left my-5 text-base leading-7 font-light tracking-wide">
                  SolarClass Ltd is a vendor-neutral solutions provider offering
                  industry-leading solar panels, inverters, and batteries. They
                  customize solutions to meet clients' energy needs, aiming to
                  reduce reliance on generators and lower monthly costs. Their
                  process involves studying clients' energy consumption patterns
                  to dimension and procure the right equipment. SolarClass Ltd
                  employs experienced installers who prioritize safety in
                  delivering professional installations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-gray-200 pb-20 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="px-4 pb-3 pl-4 mx-auto border-b-4 border-green-500 w-fit">
                  <h2 className="text-center  text-2xl font-black md:text-5xl anta">
                    OUR SOLAR SOLUTIONS
                  </h2>
                </div>
              <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-16">
                {solarSolutions.map((service, index) => (
                  <div
                    key={index}
                    onMouseEnter={()=>parText(index)}
                    onMouseLeave={()=>setActive(false)}
                    className={`cursor-pointer bg-white rounded-lg shadow-md flex flex-col items-center  hover:shadow-xl overflow-hidden`}
                  >
                    <div className="w-full relative">
                      <img src={service.img} className="h-64 w-full relative z-10" alt="" />
                      <p className={`${(active && index===id)? "opacity-100 bg-opacity-70": 'opacity-0'} font-medium transition-all ease-linear duration-300 siliguri text-lg md:text-xl text-white grid place-items-center text-center absolute z-20 left-0 right-0 top-0 bottom-0 bg-solar-blue`}>
                        {service.description.toUpperCase()}
                      </p>
                    </div>
                    <div className="w-full bg-white py-3 relative z-30">
                      <h3 className="siliguri text-lg text-center font-semibold text-solar-blue">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Quote/>
    <Footer/>
    </>
  );
};
export default Solar;
