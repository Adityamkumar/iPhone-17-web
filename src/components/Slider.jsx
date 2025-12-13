import React from "react";
import { snapSlideData } from "../constant";

const Slider = () => {
  return (
    <section className="min-h-screen max-w-full md:mt-16 mt-12">
      <h3 className="md:ml-52 ml-6 md:pt-32 md:text-3xl text-2xl tracking-tighter font-semibold">
        Smile. Snap. Share. Repeat.
      </h3>
      <div className="max-w-full min-h-[80vh] md:mt-12 mt-6 overflow-x-scroll scroll-smooth">
        <div className="flex md:gap-8 gap-2  md:ml-48 ml-6">
          {snapSlideData.map(({id,img,text}) => (
            <div key={id} className="flex flex-col items-start">
               <img className="md:max-w-2xl max-w-[300px]  rounded-3xl" src={img} alt="image" />
               <span className="py-4 pl-6 md:max-w-[440px] max-w-[250px] text-[#6E6E73] text-[16px] md:font-semibold">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
