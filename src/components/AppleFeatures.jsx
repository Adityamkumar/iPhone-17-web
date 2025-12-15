import { CiCirclePlus } from "react-icons/ci";
import Lights from "./three/Lights";
const AppleFeatures = () => {
  
  return (
    <section className="relative flex items-center justify-center">
      <div className="h-[700px] w-[95%] bg-white rounded-3xl lg:flex lg:flex-row flex flex-col-reverse md:items-center md:justify-between md:px-32 gap-10">
        <div className="mb-16 max-w-full sm:mb-10 lg:flex lg:flex-col flex flex-row overflow-x-scroll gap-4 px-8 lg:items-start lg:mt-32 mt-8">
          <div className="flex items-center gap-3 px-3 md:h-10 md:w-36 h-7 w-42  rounded-4xl py-6 bg-[#EEEEF2]">
            <div className="h-8 w-8 rounded-full bg-[#DF885C]"></div>
            <span className="md:font-semibold cursor-pointer">Colours</span>
          </div>
          <div className="flex items-center gap-3 px-4 md:h-10 md:w-36 h-7 w-48 rounded-4xl py-6 bg-[#EEEEF2]">
            <CiCirclePlus size={32} fontWeight={900} />
            <span className="md:font-semibold cursor-pointer">Display</span>
          </div>
          <div className="flex items-center gap-3 px-3 md:h-10 md:w-72 h-8 min-w-60  rounded-4xl py-7 bg-[#EEEEF2]">
            <CiCirclePlus size={32} fontWeight={900} />
            <span className="md:font-semibold cursor-pointer">
              Ceramic Shield 2 front
            </span>
          </div>
          <div className="flex items-center gap-3 px-3 md:h-10 md:w-52 h-8 min-w-48 rounded-4xl py-7 bg-[#EEEEF2]">
            <CiCirclePlus size={32} fontWeight={900} />
            <span className="md:font-semibold cursor-pointer">Camera Control</span>
          </div>
          <div className="flex items-center gap-3 px-3 md:h-10 md:w-48 h-8 min-w-44 rounded-4xl py-7 bg-[#EEEEF2]">
            <CiCirclePlus size={32} fontWeight={900} />
            <span className="md:font-semibold cursor-pointer">Action button</span>
          </div>
          <div className="flex items-center gap-3 px-3 md:h-10 md:w-48 h-8 min-w-48 rounded-4xl py-7 bg-[#EEEEF2]">
            <CiCirclePlus size={32} fontWeight={900} />
            <span className="md:font-semibold cursor-pointer">Dynamic Island</span>
          </div>
        </div>
        <div className="md:h-[530px] md:w-sm h-[50vh] absolute top-4 md:static w-full">
           <Lights />
        </div>
      </div>
    </section>
  );
};

export default AppleFeatures;
