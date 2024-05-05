import { Link } from "react-router-dom";
import NavBar from "../../globalcomponents/NavBar";
import Footer from "../../globalcomponents/Footer";
import { accessControl } from "../../resources";
import src1 from "../../assets/services/cctv/camera.webp";
import { Fade } from "react-reveal";
import Quote from "../Quote";

const Access = () => {
  return (
    <>
      <section>
        <NavBar />
        <div className="accessbg flex gap-y-5 flex-col justify-center items-center h-screen bg-no-repeat bg-cover bg-blend-multiply bg-gray-800 bg-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            ELECTRONIC SECURITY SURVEILLANCE AND ACCESS CONTROL SOLUTIONS
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
            <span className="mr-2">/</span>CCTV and access control
          </div>
        </div>
        <div className="bg-gray-50">
          <div className="w-[90%] mx-auto py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="w-full mb-10 lg:mb-0 ">
                <div className="">
                  <Fade>
                    <p className="siliguri text-left text-lg leading-8 font-normal tracking-wide py-3">
                      At SolarClass ltd, we provide access control and CCTV
                      solutions to enhance security for various environments by
                      managing entry, monitoring premises, and deterring
                      threats. These technologies work together to ensure
                      safety, privacy, and asset protection, forming a
                      comprehensive security framework.
                    </p>
                    <p className="siliguri text-lg leading-7 font-normal tracking-wide">
                      We offer a wide variety of access control and CCTV
                      solutions such as:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-3 siliguri">
                      {accessControl.map((el) => {
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
export default Access;
