import NavBar from "../globalcomponents/NavBar";
import AboutUs from "./AboutUs";
import CarouselSlider from "../globalcomponents/Carousel";
import Services from "./Services";
import Footer from "../globalcomponents/Footer";
import Quote from "./Quote";
import { Element } from "react-scroll";
import Testimonial from "./testimonial/Testimonial";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <CarouselSlider />
      <div className="relative">
        <div className="absolute top-0 bottom-0 left-0 right-0 aboutbg bg-no-repeat bg-left bg-opacity-80 z-[-10]"></div>
        <div className="absolute top-0 bottom-0 left-0 right-0 aboutbg bg-no-repeat bg-right-top bg-opacity-80 z-[-10]"></div>
        <div className="absolute top-0 bottom-0 left-0 right-0 aboutbg bg-no-repeat bg-right-bottom bg-opacity-80 z-[-10]"></div>
        <AboutUs />
        <Services />
      </div>
      <Testimonial />
      <Element name="quote">
        <Quote homepage={true}/>
      </Element>
      <Footer />
    </>
  );
};
export default HomePage;
