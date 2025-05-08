import ContactForm from "../globalcomponents/ContactForm";
import quoteImg from "/images/services/solar.jpg";

const Quote = ({ homepage }) => {
  return (
    <>
      <div
        className={`${
          homepage
            ? "hidden"
            : "w-[80%] h-[1.5px] bg-solar-green mx-auto rounded-md bg-opacity-30"
        }`}
      ></div>
      <div className="py-20 md:py-32">
        <div className="relative w-[90%] max-w-6xl mx-auto md:grid md:grid-cols-2 lg:block">
          <div className="w-full">
            <img
              src={quoteImg}
              alt="Get a Quote"
              className="w-full lg:w-[60%] h-full object-cover"
            />
          </div>
          <div className=" bg-white p-5 shadow-2xl lg:absolute lg:top-[55%] lg:right-8 lg:transform lg:-translate-y-1/2  lg:w-[50%]">
            <h2 className="anta font-extrabold text-2xl md:text-3xl lg:text-4xl text-solar-blue leading-snug mb-3">
              Get a Free Quote from us today!
            </h2>
            <div className="-mt-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Quote;

// md:w-1/2