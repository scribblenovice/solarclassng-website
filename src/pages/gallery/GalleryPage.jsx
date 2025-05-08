import { Link } from "react-router-dom";
import Footer from "../../globalcomponents/Footer";
import NavBar from "../../globalcomponents/NavBar";
import GalleryComponent from "./GalleryComponent";

const GalleryPage = () => {
  return (
    <>
      <NavBar />
      <div className="service-bg flex gap-y-5 flex-col justify-center items-center py-40 md:py-52 lg:py-60 bg-no-repeat bg-cover bg-blend-multiply bg-gray-800 bg-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
          PROJECT GALLERY
        </h1>
        <div className="text-white siliguri">
          <Link
            to={`/`}
            className="mr-2 hover:text-solar-blue transition-all ease-linear duration-100"
          >
            Home
          </Link>
          <span className="mr-2">/</span>Gallery
        </div>
      </div>
      <div className="flex flex-col space-y-10 my-20 lg:my-32 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-solar-blue leading-10 text-opacity-90 anta">
          Check out some of our completed projects
        </h2>
        <div className="">
          <GalleryComponent />
        </div>
      </div>

      <Footer />
    </>
  );
};
export default GalleryPage;
