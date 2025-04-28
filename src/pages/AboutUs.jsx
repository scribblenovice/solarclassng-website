import { aboutInfo } from "../resources";
import imgSrc from "../assets/about/solarclass2.webp";

const AboutUs = () => {
  return (
    <>
      <section
        name="about"
        className="py-5 lg:py-20 bg-gray-900 bg-blend-multiply aboutbg bg-cover bg-no-repeat bg-center bg-fixed"
        id="about"
      >
        <div className="w-[90%] mx-auto py-10 lg:py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="w-full mb-10 lg:mb-0 ">
              <div className="">
                <h2 className="text-left lg:text-left text-white text-3xl font-black md:text-5xl anta">
                  ABOUT US
                </h2>
                <p className="siliguri my-5 text-lg leading-7 text-gray-300 font-light tracking-wide">
                  Solarclass Ltd:{" "}
                  <span className="font-extrabold">RC7336149</span>, is a wholly
                  owned Nigerian company established by seasoned professionals
                  and businessmen to provide best-in-class services in diverse
                  technology areas to meet the needs of our clients. With
                  operational base in Lagos, Nigeria, and presence in Canada,
                  the company is poised to harness the more than 40 years
                  cognate experience of its founders to deliver innovative
                  solutions to residential customers, small, medium, and large
                  businesses. Our abridged areas of business focus are:
                </p>
                <div>
                  {aboutInfo.map((el) => {
                    return (
                      <div className="flex items-center">
                        {/* <Check classname={`inline w-5 h-5 mr-2`} /> */}
                        <i class="ri-checkbox-circle-line text-solar-green text-xl mr-1"></i>
                        <p className="text-lg leading-7 py-1 text-white siliguri font-light tracking-wide">
                          {el.src}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className=" grid place-items-center">
              <img
                src={imgSrc}
                alt=""
                loading="lazy"
                className="aboutimg rounded-md h-[450px] md:h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutUs;
