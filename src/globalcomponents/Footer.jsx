const Footer = () => {
  return (
    <>
      <div class="bg-black">
        <div class=" max-w-screen-lg py-10 px-4 sm:px-6 text-gray-400 sm:flex justify-between mx-auto">
          <div class="p-5 sm:w-2/12 border-r">
            <div class="text-sm uppercase solarblue font-bold anta">Menu</div>
            <ul className="siliguri">
              <li class="my-2">
                <a
                  class="hover:text-blue-400 transition-all ease-linear duration-200"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li class="my-2">
                <a
                  class="hover:text-blue-400 transition-all ease-linear duration-200"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li class="my-2">
                <a
                  class="hover:text-blue-400 transition-all ease-linear duration-200"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li class="my-2">
                <a
                  class="hover:text-blue-400 transition-all ease-linear duration-200"
                  href="#"
                >
                 Get a Quote
                </a>
              </li>
            </ul>
          </div>
          <div class="p-5 sm:w-7/12 border-r text-center">
            <h3 class="font-bold text-xl solarblue mb-4 anta">About</h3>
            <p class="text-sm mb-10 siliguri text-gray-400">
              Thank you for your time! It will be a worthwhile experience
              working with SolarClass Ltd as your preferred solutions provider
            </p>
          </div>
          <div class="p-5 sm:w-3/12">
            <div class="text-sm uppercase solarblue font-bold anta">Contact Us</div>
            <ul className="siliguri">
              <li class="my-2">Lagos, Nigeria</li>
              <li class="my-2">
                <a
                  class="hover:text-blue-400 transition-all ease-linear duration-200"
                  href="mailto:contact@solarclassng.com"
                >
                  <i class="ri-mail-line mr-1"></i>
                  contact@solarclassng.com
                </a>
              </li>
              <li class="my-2">
                <i class="ri-phone-line mr-1"></i>
                +234(0)8023286942 <br /><i class="ri-phone-line mr-2"></i>{" "}
                +1 403 919 3009
              </li>
            </ul>
          </div>
        </div>
        <div class="flex py-5 m-auto text-gray-500 text-sm flex-col items-center border-t-2 border-white max-w-screen-xl">
          <div class="my-5 siliguri">© Solarclas Ltd 2024. All Rights Reserved.</div>
        </div>
      </div>
    </>
  );
};
export default Footer;
