import { Link } from "react-router-dom";

const WhatsappBtn = () => {
  return (
    <>
      <Link
        to="https://wa.link/h3683t"
        target="_blank"
        className="shadow-xl fixed bottom-10 left-3 text-3xl font-extralight siliguri bg-[#25D366] py-1 px-5 rounded-2xl text-white hover:scale-105 transition-all ease-linear duration-200 z-50"
      >
        <i className="ri-whatsapp-line mr-1"></i>
        Chat
      </Link>
    </>
  );
};
export default WhatsappBtn;
