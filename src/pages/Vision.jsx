import { Fade } from "react-reveal";

const Vision = () => {
  return (
    <>
      <section
        id="about"
        class="servicebg h-fit mx-auto w-4.5/5 py-20 flex items-center"
      >
        <Fade>
          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class=" bg-white py-10 px-4 text-neutral-200 rounded-2xl mb-8 md:mb-0 shadow-xl">
              <div className="mx-4 border-none border-green-500 w-fit">
                <h2 className="text-left text-2xl font-bold anta">
                  OUR VISION
                </h2>
              </div>
              <p class="pl-4 my-5 siliguri text-lg">
                To be a leading technology company underpinned by sustainable
                development best practices within Nigeria and beyond.
              </p>
            </div>
            <div class=" bg-white py-10 px-4 rounded-2xl revealLeft shadow-xl">
              <div className="mx-4 border-none border-green-500 w-fit">
                <h2 className="text-left text-2xl font-bold anta">
                  OUR MISSION
                </h2>
              </div>
              <p class="pl-4 my-5 siliguri text-lg">
                To deliver world class services to our clients and create
                enabling work environment that help our workers be the best they
                can be. To be a responsible corporate organization that deliver
                value to all stakeholders
              </p>
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
};
export default Vision;
