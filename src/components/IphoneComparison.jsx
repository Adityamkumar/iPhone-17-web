import { useState } from "react";
import { iphoneData } from "../constant";
const IphoneComparison = () => {
  const [selectedIphone, setSelectedIphone] = useState("iPhone 13");
  const data = iphoneData[selectedIphone];

  return (
    <section className="md:min-h-[80vh] min-h-screen max-w-full mt-16 ">
      <div className="md:min-h-[45vh] min-h-[65vh] px-10 md:w-6xl w-full bg-gray-200 rounded-2xl md:pt-16 pt-6 m-auto">
        <div className="md:flex md:flex-col">
          <div className="md:flex md:flex-row md:items-center md:ml-24 flex flex-col gap-6">
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

          <div className="md:flex md:flex-row md:items-center md:justify-between md:px-24 flex flex-col gap-4  md:mt-16 mt-8">
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
