import { Link } from "react-router-dom";
import src from "../assets/logo.png";
import { navFooter, servicesFooter } from "../resources";

const Footer = () => {
  return (
    <>
      <div class="bg-gray-900 w-screen">
        <div className="w-[90%] pt-10 pb-5 mx-auto">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10">
            <div>
              <Link to={`/`}>
                <img src={src} alt="" className="h-20" loading="lazy" />
              </Link>
              <p className="siliguri font-normal text-lg text-gray-400 tracking-wide leading-7 my-5">
                To be a leading technology company underpinned by sustainable
                development best practices within Nigeria and beyond. To deliver
                world class services to our clients5
              </p>
            </div>
            <div className="pl-0 lg:pl-10">
              <h2 className="text-white anta text-2xl mb-5">Our Services</h2>
              <div className="siliguri flex flex-col gap-y-5 w-fit">
                {servicesFooter.map((el) => {
                  return (
                    <Link
                      key={el.id}
                      to={el.to}
                      className="text-gray-400 flex items-center text-xl w-fit hover:text-solar-blue transition-all ease-linear duration-150"
                    >
                      <i class="ri-arrow-right-s-fill"></i>
                      {el.headerTxt}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="pl-0 lg:pl-10">
              <h2 className="text-white anta text-2xl mb-5">Useful Links</h2>
              <div className="siliguri flex flex-col gap-y-5 w-fit">
                {navFooter.map((el) => {
                  return (
                    <Link
                      key={el.id}
                      to={el.to}
                      className="text-gray-400 flex items-center text-xl w-fit hover:text-solar-blue transition-all ease-linear duration-150"
                    >
                      <i class="ri-arrow-right-s-fill"></i>
                      {el.headerTxt}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="pl-0 lg:pl-10">
              <h2 className="text-white anta text-2xl mb-5">Location</h2>
              <div className="flex mb-5">
                <i className="ri-map-pin-line text-2xl text-solar-green rounded-full mr-3"></i>
                <div className="">
                  <h3 className="text-white siliguri text-base">Nigeria Address</h3>
                  <p className="text-gray-400 w-fit siliguri">
                    #2,Close,off Monday Akunna Street, Greenfield Estate, off
                    Ago Palace Way, Okota, Isolo LCDA, Lagos, Nigeria.
                  </p>
                </div>
              </div>
              <div className="flex">
                <i className="ri-map-pin-line text-2xl text-solar-green rounded-full mr-3"></i>
                <div>
                  <h3 className="text-white siliguri text-base">Canada Address</h3>
                  <p className="text-gray-400 w-fit siliguri">
                    15 Discovery Woods Villas, SW. Calgary, Alberta. T3H 5A6,
                    Canada
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 mx-auto grid grid-cols-1 md:grid-cols-2">
            <div className="bg-solar-blue flex justify-center items-center gap-y-5 py-4">
              <div className="flex w-80 items-center">
                <div className="mr-5">
                  <i class="ri-mail-line text-solar-blue rounded-full bg-white p-3 text-3xl"></i>
                </div>
                <div>
                  <a
                    href="mailto:contact@solarclassng.com"
                    className="text-white text-xl"
                  >
                    contact@solarclassng.com
                  </a>
                  <p className="text-gray-400">Reach out to us</p>
                </div>
              </div>
            </div>
            <div className="bg-white text-solar-blue flex justify-center items-center gap-y-5 py-4">
              <div className="flex items-center w-80">
                <div className="mr-5">
                  <i class="ri-phone-fill text-white rounded-full bg-solar-blue p-3 text-3xl"></i>
                </div>
                <div>
                  <a
                    href="tel:+234 (802) 328 6942"
                    className="text-solar-blue text-xl"
                  >
                    +234 (802) 328 6942
                  </a>
                  <p className="text-solar-blue">Give us a call</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-center mt-5 text-base  md:text-lg">
            {" "}
            &copy; SOLAR CLASS LTD 2024. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
