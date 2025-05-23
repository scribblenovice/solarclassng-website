import { Link } from "react-router-dom";
import { servicesArray } from "../../resources";
import NavBar from "../../globalcomponents/NavBar";
import Footer from "../../globalcomponents/Footer";
import Services from "../Services";
import Quote from "../Quote";

const OurServices = () => {
  return (
    <>
      <NavBar />
      <div className="service-bg flex gap-y-5 flex-col justify-center items-center py-40 md:py-52 lg:py-60 bg-no-repeat bg-cover bg-blend-multiply bg-gray-800 bg-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
          OUR SERVICES
        </h1>
        <div className="text-white siliguri">
          <Link
            to={`/`}
            className="mr-2 hover:text-solar-blue transition-all ease-linear duration-100"
          >
            Home
          </Link>
          <span className="mr-2">/</span>Services
        </div>
      </div>
      <Services />
      <Quote />
      <Footer />
    </>
  );
};
export default OurServices;
