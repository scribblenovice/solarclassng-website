import NavBar from "../globalcomponents/NavBar";
import scr1 from "../assets/carousel/solarbg.jpg";
import src2 from "../assets/carousel/accessbg.jpg";
import src3 from "../assets/carousel/ictbg.jpg";
import src4 from "../assets/carousel/techbg.jpg";
import AboutUs from "./AboutUs";
import CarouselSlider from "../globalcomponents/Carousel";
import Services from "./Services";
import Vision from "./Vision";
import Footer from "../globalcomponents/Footer";
import Quote from "./Quote";
import MailBtn from "../globalcomponents/MailBtn";
import Loader from "../globalcomponents/Loader";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <CarouselSlider />
      <Vision />
      <AboutUs />
      <Services />
      <Quote />
      <Footer />
    </>
  );
};
export default HomePage;
