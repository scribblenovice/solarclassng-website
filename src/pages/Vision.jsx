import { Fade } from "react-reveal";

const Vision = () => {
  return (
    <>
      <section
        id="about"
        class="visionbg h-fit mx-auto w-4.5/5 py-20 flex items-center"
      >
        <Fade bottom>
          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="about py-10 px-4 text-neutral-200 rounded-2xl mb-8 md:mb-0">
              <div className="mx-4 border-b-4 border-green-500 w-fit">
                <h2 className="text-left text-2xl font-bold anta">
                  OUR VISION
                </h2>
              </div>
              <p class="pl-4 my-5 siliguri">
                To be a leading technology company underpinned by sustainable
                development best practices within Nigeria and beyond.
              </p>
            </div>
            <div class="mission py-10 px-4 rounded-2xl revealLeft">
              <div className="mx-4 border-b-4 border-green-500 w-fit">
                <h2 className="text-left text-2xl font-bold anta">
                  OUR MISSION / OBJECTIVE
                </h2>
              </div>
              <p class="pl-4 my-5 siliguri">
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