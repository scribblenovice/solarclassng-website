import src from "../assets/logo.png";
const Loader = () => {
  return (
    <div className="bg-white h-screen w-screen flex justify-center items-center">
      <img src={src} alt="" className="animate-bounce w-24 h-auto opacity-80" />
    </div>
  );
};
export default Loader;
