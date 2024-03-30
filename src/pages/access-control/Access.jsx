import { Link } from "react-router-dom";
import NavBar from "../../globalcomponents/NavBar";

const Access = () => {
  return (
    <>
      <section>
        <NavBar />
        <div className="accessbg flex gap-y-5 flex-col justify-center items-center h-screen bg-no-repeat bg-cover bg-blend-multiply bg-gray-800 bg-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
          ELECTRONIC SECURITY SURVEILLANCE AND ACCESS CONTROL SOLUTIONS
          </h1>
          <div className="text-white">
            <Link
              to={`/`}
              className="mr-2 hover:text-solar-blue transition-all ease-linear duration-100"
            >
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              to={`/services`}
              className="mr-2 hover:text-solar-blue transition-all ease-linear duration-100"
            >
              Services
            </Link>
            <span className="mr-2">/</span>CCTV and access control
          </div>
        </div>
        <div>
            
        </div>
      </section>
    </>
  );
};
export default Access;
