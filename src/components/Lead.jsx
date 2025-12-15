import React from "react";

const Lead = () => {
  return (
    <section className="md:min-h-[30vh] md:mt-12">
      <h2 className="lg:ml-54 md:ml-10 ml-7 md:text-5xl text-2xl  font-semibold md:font-bold tracking-tighter md:pt-6 pt-4">
        Our values lead the way.
      </h2>
      <div className="lg:ml-54 md:ml-6 overflow-x-auto scroll-smooth md:mt-8 mt-6 px-4 md:flex md:flex-row md:justify-start gap-4 flex flex-col items-center justify-center">
         <div className="h-64 w-[340px] pl-8 pt-6 bg-white rounded-3xl">
            <img className="w-8" src="/img/earth.png" alt="earth_icon" />
            <h4 className="pt-3 md:text-[20px] leading-6 md:font-semibold">A plan as innovative as <br/> our products.</h4>
            <p className="mt-3 w-60 text-gray-800  text-[13px] leading-5">We’re committed to bringing net emissions to zero across our entire carbon footprint by 2030.</p>
         </div>
         <div className="h-64 w-[340px] pl-8 pt-6 bg-white rounded-3xl">
            <img className="w-8" src="/img/lock.png" alt="lock_icon" />
            <h4 className="pt-3 md:text-[20px]  md:font-semibold">Privacy. That’s Apple.</h4>
            <p className="mt-3 w-60 text-gray-800  text-[13px] leading-5">Privacy is a fundamental human right. Every product and service is designed to help keep your data safe and secure.</p>
         </div>
         <div className="h-64 w-[340px] pl-8 pt-6 bg-white rounded-3xl">
            <img className="w-8" src="/img/human.png" alt="human_icon" />
            <h4 className="pt-3 md:text-[20px] leading-6 md:font-semibold">Innovation that’s <br/> accessible by design.</h4>
            <p className="mt-3 w-60 text-gray-800  text-[13px] leading-5">Our products and services are designed for everyone, with built-in features to help you do what you love, your way.</p>
         </div>
      </div>
    </section>
  );
};

export default Lead;
