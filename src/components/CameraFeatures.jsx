import { useState } from "react";
import { features } from "../constant/index.js";
import "../index.css";

const CameraFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
      <div className="relative w-full max-w-sm mb-6 md:mb-8">
        <div className="relative h-full w-full">
          {/* Phone Mask Frame */}
          <img
            src="/img/phone_mask.png"
            alt="Phone frame"
            className="height relative z-30 m-auto pointer-events-none"
          />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-full h-full flex flex-col items-center justify-center">
              {/* Camera Preview with Video/Image */}
              <div className="relative w-full flex items-center justify-center">
                {features[activeIndex].type === "video" ? (
                  <video
                    key={activeIndex}
                    src={features[activeIndex].media}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="video-h height radius h-full w-auto m-auto object-cover animate-fadeIn"
                  />
                ) : (
                  <img
                    key={activeIndex}
                    src={features[activeIndex].media}
                    alt={features[activeIndex].title}
                    className="video-h radius h-full w-auto m-auto  object-cover animate-fadeIn"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Navigation - Below Phone */}
      <div className="w-full max-w-lg px-4 mt-6">
        <div className="relative bg-[#F5F5F7] rounded-2xl shadow-lg overflow-hidden">
          {/* Sliding Highlight Box */}
          <div
            className="absolute top-0 bottom-0 bg-gray-900 rounded-2xl transition-all duration-300 ease-out z-0"
            style={{
              left: `${activeIndex * 25}%`,
              width: "25%",
            }}
          ></div>

          {/* Feature Items */}
          <div className="relative grid grid-cols-4 gap-0 z-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = index === activeIndex;

              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className=" cursor-pointer relative flex flex-col items-center justify-center py-5 px-2 transition-colors duration-300"
                >
                  <Icon
                    className={`w-6 h-6 mb-2 transition-colors duration-300 ${
                      isActive ? "text-white" : "text-gray-400"
                    }`}
                  />
                  <div
                    className={`text-xs font-medium text-center transition-colors duration-300 ${
                      isActive ? "text-white" : "text-gray-600"
                    }`}
                  >
                    <div className="leading-tight">{feature.title}</div>
                    <div className="text-[0.65rem] opacity-80 leading-tight">
                      {feature.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Description Text */}
        <div className="mt-6 text-center px-4">
          <p
            key={activeIndex}
            className="text-[#6E6E73] font-semibold text-base leading-relaxed animate-fadeIn"
          >
            {features[activeIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CameraFeatures;
