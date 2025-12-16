import { useState } from "react";
import { iphoneData } from "../constant";
const IphoneComparison = () => {
  const [selectedIphone, setSelectedIphone] = useState("iPhone 13");
  const data = iphoneData[selectedIphone];

  return (
    <section className="md:min-h-[56vh] min-h-[65vh] max-w-full mt-16 px-5 pt-6 ">
      <div className="md:h-80 h-fit md:px-10 md:max-w-4xl max-w-full bg-gray-200 rounded-2xl md:pt-16 pt-6 m-auto">
        <div className="md:flex md:flex-col ml-8 pb-6 pt-4">
          <div className="md:flex md:flex-row lg:px-8 md:px-4  md:ml-2 flex flex-col gap-6">
            <label className="text-xl text-[#6E707B] font-light">
              Compare With
            </label>
            <select
              value={selectedIphone}
              onChange={(e) => setSelectedIphone(e.target.value)}
              className="border rounded-3xl w-64 px-4 py-2"
            >
              {Object.keys(iphoneData).map((phone) => (
                <option key={phone} className="text-lg">{phone}</option>
              ))}
            </select>
          </div>

          <div className="md:flex md:flex-row md:justify-between  lg:px-8 md:px-4 flex flex-col gap-4  lg:mt-10  mt-8">
            <div className="md:flex md:flex-col flex flex-col gap-1 md:items-start">
              <span className="text-[#6E707B]">Up to</span>
              <span className="camera-text text-3xl font-semibold">{data.cpu}</span>
              <span className="text-[#6E707B]">CPU</span>
            </div>
            <div className="md:flex md:flex-col flex flex-col gap-1 md:items-start">
              <span className="text-[#6E707B]">Up to</span>
              <span className="camera-text text-3xl font-semibold">{data.gpu}</span>
              <span className="text-[#6E707B]">5‑core GPU</span>
            </div>
            <div className="md:flex md:flex-col flex flex-col gap-1 md:items-start">
              <span className="text-[#6E707B]">Up to</span>
              <span className="camera-text text-3xl font-semibold">{data.battery}</span>
              <span className="text-[#6E707B]">video playback</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IphoneComparison;
