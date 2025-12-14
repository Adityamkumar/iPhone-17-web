import React from "react";

const Energy = () => {
  return (
    <section className="md:min-h-screen max-w-full mt-16">
      <h3 className="text-center font-semibold  text-2xl">
        A19 chip. All‑day battery life.
      </h3>
      <h2 className="energy text-center mt-6 md:text-7xl text-3xl font-semibold">
        Power player. <br /> Energy expert.
      </h2>
      <div className="mt-14 md:px-6">
        <img
          className="mix-blend-darken max-w-full"
          src="/img/energy_img1.jpg"
          alt=""
        />
      </div>

      <div className="mt-20 md:flex md:flex-row flex flex-col pl-5 gap-6 md:px-24 md:items-center md:justify-around text-[#6E6E73]">
        <p className=" md:text-[20px] text-[18px] max-w-xl font-medium">
          The A19 chip{" "}
          <span className="text-black">powers everything you do on iPhone</span>
          , including Apple Intelligence features like Live Translation and
          Image Playground, and ProMotion for playing advanced AAA games. And
          with <span className="text-black">all-day battery life</span>, you can work, watch and wander with no
          worries. If you need a quick top-up, just 10 minutes <span className="text-black">of charge gives
          you up to 8 hours of video playback</span> with a high-wattage adapter.9
        </p>
        <div className="flex flex-col items-start gap-1">
          <span className="text-sm">Up to</span>
          <p className="energy sm:text-4xl text-2xl font-semibold leading-tight">
            50% charge in <br /> 20 minutes
          </p>
          <span className="text-sm">with a 40W power adapter or higher10</span>
        </div>
      </div>
    </section>
  );
};

export default Energy;
