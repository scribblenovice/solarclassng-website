import Footer from "../../globalcomponents/Footer";
import WhatsappBtn from "../../globalcomponents/WhatsappBtn";
import Quote from "../Quote";
import { Link } from "react-router-dom";
import NavBar from "../../globalcomponents/NavBar";
import { accessControl, ictArray } from "../../resources";
import src1 from "../../assets/carousel/techbg.webp";

const TechConsulting = () => {
  return (
    <>
      <section>
        <NavBar />
        <div className="techbg flex gap-y-5 flex-col justify-center items-center py-40 md:py-52 lg:py-60 bg-no-repeat bg-cover bg-blend-multiply bg-gray-800 bg-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            TECHNOLOGY TRAINING AND CONSULTANCY
          </h1>
          <div className="text-white siliguri">
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
            <span className="mr-2">/</span>Tech Consulting
          </div>
        </div>
        <div className="">
          <div className="w-[90%] mx-auto py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="w-full mb-10 lg:mb-0 flex items-center">
                <div className="">
                  <p className="siliguri text-left text-lg leading-8 font-normal tracking-wide py-3">
                    At SolarClass ltd, we engage in continual improvement of the
                    knowledge of its own personnel and her clients in evolving
                    technology areas to better equip them for service delivery.
                    We do this by leveraging on in-house expertise, as well as
                    in association with established local and international
                    training bodies in the specific technology area.
                  </p>
                </div>
              </div>
              <img
                loading="lazy"
                src={src1}
                alt=""
                className="w-full h-full rounded-md"
              />
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
export default TechConsulting;
