import NavBar from "../globalcomponents/NavBar";
import AboutUs from "./AboutUs";
import CarouselSlider from "../globalcomponents/Carousel";
import Services from "./Services";
import Vision from "./Vision";
import Footer from "../globalcomponents/Footer";
import Quote from "./Quote";
import MailBtn from "../globalcomponents/MailBtn";
import { Element } from "react-scroll";
import WhatsappBtn from "../globalcomponents/WhatsappBtn";
import Gallery from "../globalcomponents/Gallery";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <CarouselSlider />
      {/* <Vision /> */}
      <AboutUs />
      <Services />
      {/* <Gallery/> */}
      <Element name="quote">
        <Quote />
      </Element>
      <WhatsappBtn />
      <Footer />
    </>
  );
};
export default HomePage;
