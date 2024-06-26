import { Fade } from "react-reveal";
import Footer from "../../globalcomponents/Footer";
import WhatsappBtn from "../../globalcomponents/WhatsappBtn";
import Quote from "../Quote";
import { Link } from "react-router-dom";
import NavBar from "../../globalcomponents/NavBar";
import { accessControl, ictArray } from "../../resources";
import src1 from "../../assets/services/ict/ictpic.webp";

const IctServices = () => {
  return (
    <>
      <section>
        <NavBar />
        <div className="ictbg flex gap-y-5 flex-col justify-center items-center h-screen bg-no-repeat bg-cover bg-blend-multiply bg-gray-800 bg-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            INFORMATION AND COMMUNCATION TECHNOLOGY SERVICES
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
            <span className="mr-2">/</span>ICT Services
          </div>
        </div>
        <div className="">
          <div className="w-[90%] mx-auto py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="w-full mb-10 lg:mb-0 ">
                <div className="">
                  <Fade>
                    <p className="siliguri text-left text-lg leading-8 font-normal tracking-wide py-3">
                      At SolarClass ltd, we provide a wide variety of ICT
                      services to satisfy the very needs and requirements of our
                      customers
                    </p>
                    {/* <p className="siliguri text-lg leading-7 font-normal tracking-wide">
                      We offer a wide variety of access control and CCTV
                      solutions such as:
                    </p> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-3 siliguri">
                      {ictArray.map((el) => {
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

      <Quote />

      <Footer />
      <WhatsappBtn />
    </>
  );
};
export default IctServices;
