import React from "react";

const IphoneTech = () => {
  return (
    <section className="md:min-h-[80vh] w-full mt-10">
      <h2 className="text-center text-3xl md:pt-24 pt-8">All in the family.</h2>
      <h1 className="energy text-center md:text-7xl text-3xl font-bold md:leading-18 md:pt-6 pt-4">
        All the must‑haves.
        <br /> All on iPhone.
      </h1>
      <div className="md:mt-16 mt-12 flex justify-center md:gap-24">
         <img className="md:w-[580px] w-[350px]"  src="/img/tech_img.png" alt="" />
      </div>
      <p className="md:text-center pl-4 md:text-[17px] text-[#6E6E73] font-semibold md:mt-12 mt-6 md:w-3xl w-full m-auto">The latest iPhone models come with tons to love. Helpful Apple Intelligence features such as visual intelligence and Writing Tools to make your every day easier.11 Fast, secure connections with <span className="text-black">Wi-Fi 712, Bluetooth 6, 5G connectivity13 and eSIM.14</span></p>
    </section>
  );
};

export default IphoneTech;
