import React from "react";

const CameraResolution = () => {
  return (
    <section className="md:min-h-[60vh] w-full mt-16">
      <h3 className="camera-text text-center font-bold md:text-5xl text-2xl md:py-14 py-8 md:leading-14 md:max-w-[650px] m-auto">
        All 48MP rear cameras.
        <br /> An evolution in resolution.
      </h3>
      <p className="text-center md:text-[18px]  md:max-w-[720px] m-auto md:-mt-10  px-4 font-semibold text-[#6E6E73]">
        iPhone 17 has a 48MP Fusion Main camera with a 2x optical-quality
        telephoto and a{" "}
        <span className="text-black">
          48MP Fusion Ultra Wide camera with 4x the resolution
        </span>{" "}
        of the Ultra Wide camera on iPhone 16. And now Ultra Wide photos are
        24MP by default, the perfect file size for high‑quality storing and
        sharing. So you’ll get stunning, super-high-resolution shots — up close
        or far away, indoors and out, in conditions that go from bright to low
        light. And at 256GB, it has{" "}
        <span className="text-black">double the starting storage</span> of the
        previous model.7 So you can capture to your heart’s content — and
        beyond.
      </p>
      <div className="mt-10 md:px-6 w-full">
        <div className="md:rounded-2xl overflow-hidden">
          <img src="/img/lens_img.png" alt="" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default CameraResolution;
