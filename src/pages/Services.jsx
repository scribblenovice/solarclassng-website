import { Link } from "react-router-dom";
import InViewPortDetector from "../globalcomponents/ViewPortdetector";
import { Fade } from "react-reveal";
import { servicesArray } from "../resources";

const Services = () => {
  return (
    <>
      <section className="w-screen relative servicebg">
        <div className="w-[90%] py-20 mx-auto relative z-20">
          <h2 className="text-gray-900 text-center text-3xl font-black md:text-5xl anta">
            OUR SERVICES
          </h2>
          <p className="siliguri text-gray-900 py-7 text-base sm:text-lg md:text-xl lg:text-2xl text-center">
            We offer a wide variety of comprehensive solutions to satisfy the
            needs and requirements of our customers
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-center">
            {servicesArray.map((el) => {
              return (
                <div
                  key={el.id}
                  className=" flex flex-col items-center justify-center relative h-[350px] sm:h-[500px] lg:h-[350px] rounded-md"
                >
                  <div className="relative z-10 anta text-white font-bold">
                    {el.headerTxt}
                  </div>
                  <Link
                    to={el.to}
                    class="z-10 absolute bottom-14 anta transition-all ease-linear duration-300 hover:bg-white hover:text-black mx-auto my-5 w-40 py-2 px-2 block bg-black rounded-lg p-4 text-white"
                  >
                    LEARN MORE<i class="ri-arrow-right-line"></i>
                  </Link>
                  <div
                    className={` flex items-center justify-center absolute rounded-md top-0 bottom-0 left-0 right-0 bg-cover bg-no-repeat bg-blend-multiply bg-gray-800 ${el.bg}`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Services;
