import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MobileShowCase = () => {
  const textRef = useRef(null);
  const sectionRef = useRef(null);


  useEffect(() => {
  const mm = gsap.matchMedia();

  mm.add("(max-width: 767px)", () => {
    gsap.fromTo(
      textRef.current,
      { backgroundSize: "0% 100%" },
      {
        backgroundSize: "100% 100%",
        duration: 0.8,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  mm.add("(min-width: 768px)", () => {
    gsap.fromTo(
      textRef.current,
      { backgroundSize: "0% 100%" },
      {
        backgroundSize: "70% 100%", 
        duration: 0.8,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  return () => mm.revert();
}, []);



  return (
    <section ref={sectionRef} className="md:min-h-[60vh] md:mt-36 mt-12">
      <div className="flex flex-col md:gap-10 gap-4 md:ml-32 py-10 px-4">
        <h4 className="text-3xl font-semibold">Design</h4>
        <h2
          ref={textRef}
          className="showcaseText md:text-7xl text-3xl font-bold"
        >
          <span>Even more delightful.</span>
          <br />
          <span>Even more durable.</span>
        </h2>

        <p className="md:text-xl text-sm text-[#7d7d7d] font-semibold md:w-[62%]">
          Meet the new iPhone 17. Designed with contoured edges, thinner borders
          and durable materials like Ceramic Shield 2 on the front, it{" "}
          <span className="text-black">looks — and stays — beautiful</span>. You
          can see and do more of everything you love on a 15.93 cm (6.3″) Super
          Retina XDR display.5 And enjoy{" "}
          <span className="text-black">
            smoother scrolling and more immersive gaming with ProMotion
          </span>
          , with an adaptive refresh rate up to 120Hz. Take it for a spin.
          Colours
        </p>
      </div>
    </section>
  );
};

export default MobileShowCase;
