import { Link } from "react-router-dom";
import NavBar from "../globalcomponents/NavBar";
import Footer from "../globalcomponents/Footer";

import PowerAuditCalculator from "../globalcomponents/PowerAuditCalc";

const PowerAudit = () => {
  return (
    <>
      <NavBar />
      <div className="flex gap-y-5 flex-col justify-center items-center contact-page py-40 md:py-52 lg:py-60 bg-no-repeat bg-cover bg-blend-multiply bg-gray-800 bg-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
          Power Audit
        </h1>
        <div className="text-white siliguri">
          <Link
            to={`/`}
            className="mr-2 hover:text-solar-blue transition-all ease-linear duration-100"
          >
            Home
          </Link>
          <span className="mr-2">/</span>Power Audit
        </div>
      </div>
      <div className="flex flex-col p-6 max-w-6xl mx-auto space-y-10 my-10">
        <p className="mx-auto siliguri text-gray-800 text-base sm:text-lg md:text-xl ">
          We have provided a simple power audit calculator for calculating how
          much electricity you use (in kWh) and also the likely maximum power
          usage (in kW).
        </p>
        <PowerAuditCalculator />
      </div>

      <Footer />
    </>
  );
};
export default PowerAudit;
