import { Link } from "react-router-dom";

const WhatsappBtn = () => {
  return (
    <>
      <Link
        to="https://wa.link/h3683t"
        target="_blank"
        className="scale-75 lg:scale-100 shadow-xl fixed bottom-8 left-0 lg:left-4 text-3xl font-extralight siliguri bg-[#25D366] py-1 px-5 rounded-2xl text-white hover:scale-90  lg:hover:scale-105 transition-all ease-linear duration-200 z-[1000]"
      >
        <i className="ri-whatsapp-line mr-1"></i>
        Chat
      </Link>
    </>
  );
};
export default WhatsappBtn;
