import solarImg from "/images/project-gallery/project1.jpg";
const TestimonialCard = () => {
  return (
    <>
      <div className="relative shadow-2xl p-5 md:p-8 bg-white grid grid-cols-1 gap-y-5 lg:gap-y-10">
        <div className="grid place-items-center">
          <div className="flex items-center space-x-5 lg:space-x-10">
            <div className="w-[50px] lg:w-[100px] h-[1px] bg-solar-blue"></div>
            <div className="mx-auto flex items-center justify-center bg-solar-green rounded-full w-10 lg:w-14 h-10 lg:h-14">
              <svg
                className="w-7 lg:w-10 h-7 lg:h-10 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
              </svg>
            </div>
            <div className="w-[50px] lg:w-[100px] h-[1px] bg-solar-blue"></div>
          </div>
        </div>

        <p className="siliguri tracking-widest leading-8 text-gray-800 text-base sm:text-lg">
          I get business update everyday which includes the spends on Diesel and
          petrol. I'm happy to announce that our Diesel spend has gone
          drastically low since the installation of the solar. It gladdens my
          heart really.
        </p>
          <img src={solarImg} alt="" className="w-16 h-16 rounded-full mx-auto" />
          <p className="font-semibold text-center siliguri text-gray-800 text-base sm:text-lg md:text-xl">
            {" "}
            MD/CEO, KIWAT Interglobal Table water producer
          </p>
      </div>
    </>
  );
};
export default TestimonialCard;
