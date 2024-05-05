import { Link } from "react-router-dom";
import NavBar from "../../globalcomponents/NavBar";
import src1 from "../../assets/services/solarsolutions/solar.webp";
import { solarSolutions } from "../../resources";
import { useState } from "react";
import Quote from "../Quote";
import Footer from "../../globalcomponents/Footer";
import { Fade } from "react-reveal";

const Solar = () => {
  const [active, setActive] = useState(false);
  const [id, setId] = useState(0);
  // function parText(id) {
  //   setActive(true);
  //   setId(id);
  // }
  return (
    <>
      <section>
        <NavBar />
        <div className="flex gap-y-5 flex-col justify-center items-center solar-service h-[60vh] lg:h-screen bg-no-repeat bg-cover bg-blend-multiply bg-gray-800 bg-center">
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
        <div className="bg-gray-50">
          <div className="w-[90%] mx-auto py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="w-full mb-10 lg:mb-0 ">
                <div className="">
                  <Fade>
                    <p className="siliguri text-left text-lg leading-8 font-normal tracking-wide py-3">
                      SolarClass Ltd is a vendor-neutral solutions provider
                      offering industry-leading solar panels, inverters, and
                      batteries. We customize solutions to meet clients' energy
                      needs, aiming to reduce reliance on generators and lower
                      monthly costs. Our process involves studying clients'
                      energy consumption patterns to dimension and procure the
                      right equipment. SolarClass Ltd employs experienced
                      installers who prioritize safety in delivering
                      professional installations.
                    </p>
                    <p className="siliguri text-lg leading-7 font-normal tracking-wide">
                      We offer a wide variety of solar solutions such as:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-3 siliguri">
                      {solarSolutions.map((el) => {
                        return (
                          <div className="flex items-center ">
                            <div className="">
                              <i class="ri-arrow-right-s-fill text-solar-blue"></i>
                            </div>
                            <p className="text-lg">{el.title}</p>
                          </div>
                        );
                      })}
                    </div>
                  </Fade>
                </div>
              </div>
              <Fade>
                <img
                  loading="lazy"
                  src={src1}
                  alt=""
                  className="w-full h-full rounded-md"
                />
              </Fade>
            </div>
          </div>
        </div>
      </section>
      <Fade>
        <Quote />
      </Fade>
      <Footer />
    </>
  );
};
export default Solar;
