import { aboutInfo } from "../resources";
import imgSrc from "../assets/about/solarclass2.webp";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <section name="about" className="py-20 lg:py-32">
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 gap-y-16 lg:gap-y-0">
            <div className="grid place-items-center rounded-md">
              <img
                src={imgSrc}
                alt=""
                loading="lazy"
                className="rounded-md h-[400px] md:h-[500px] border-solar-green border-[4px]"
              />
            </div>
            <div className="w-full">
              <div className="text-gray-900  grid grid-cols-1- gap-y-5">
                <h2 className=" text-lg font-black anta flex items-center text-solar-blue">
                  About Solar Class Ltd{" "}
                  <div className="ml-3 inline-block w-[30px] h-[3px] bg-solar-blue"></div>
                </h2>
                <p className="anta font-extrabold text-3xl text-gray-900 leading-10 text-opacity-90">
                  Providing Smart Technology Solutions for Home and Businesses
                </p>
                <p className="siliguri text-base tracking-wide text-gray-700 leading-7">
                  Solarclass Ltd:{" "}
                  <span className="font-extrabold">RC7336149</span> is a wholly
                  owned Nigerian company established by seasoned to provide
                  best-in-class services in diverse technology areas to meet the
                  needs of our clients. Our abridged areas of business focus
                  are:
                </p>
                <div className="grid grid-cols-2 gap-y-10 mt-5 lg:mt-0">
                  {aboutInfo.map((el) => {
                    return (
                      <div className="">
                        <img src={el.img} className="w-14 h-14" alt="" />
                        <p className=" pt-3 siliguri text-solar-blue text-opacity-90 font-bold">
                          {el.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <Link
                  to="/contact-us"
                  className="mt-2 p-2 w-fit bg-white border-2 hover:bg-solar-blue hover:text-white transition-all ease-linear duration-300 border-solar-blue text-center text-lg text-solar-blue font-semibold rounded-md cursor-pointer"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutUs;
