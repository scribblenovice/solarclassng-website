import { ScaleLoader, SyncLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="bg-white h-screen w-screen flex justify-center items-center">
      <ScaleLoader color="#005D9A" size={`30px`} margin={`20px`} />
    </div>
  );
};
export default Loader;
