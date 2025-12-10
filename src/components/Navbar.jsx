import { useEffect, useRef, useState } from "react";
import {navLinks} from "../constant/index.js";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const isTabletOrAbove = useMediaQuery({ query: "(min-width: 860px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 860px)" });
  const [expandNav, setExpandNav] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const fullNav = useRef();

  // close on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setExpandNav(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useGSAP(
    () => {
      if (!fullNav.current) return;

      if (expandNav) {
        setShowNav(true);
        gsap.set(fullNav.current, { y: "-100%", opacity: 0 });
        gsap.to(fullNav.current, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.3,
          ease: "power1.out",
        });
      } else {
        gsap.to(fullNav.current, {
          y: "-100%",
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
          onComplete: () => setShowNav(false),
        });
      }
    },
    { dependencies: [expandNav] }
  );

  return (
    <nav className="w-full  bg-[#FFFFFF] shadow-gray-200/50 shadow-lg px-4">
      <div className="flex items-center   lg:justify-center justify-between lg:gap-6">
        <div className="cursor-pointer lg:-pl-8">
          <svg
            height="50"
            viewBox="0 0 14 44"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
          </svg>
        </div>
        {isTabletOrAbove && (
          <ul className="flex items-center gap-9 p-2 text-[12px] text-gray-600">
            {navLinks.map(({ label }) => (
              <li key={label} className="cursor-pointer">
                <a href={label}>{label}</a>
              </li>
            ))}
          </ul>
        )}
        <div className="flex items-center gap-6 cursor-pointer">
          <IoIosSearch size={18} />
          <IoBagOutline size={18} />
          {isMobile && (
            <CiMenuFries size={18} onClick={() => setExpandNav((v) => !v)} />
          )}
        </div>
      </div>

      {(expandNav || showNav) && ( 
        <div
          ref={fullNav}
          className="h-screen fixed left-0 z-9999 top-0 w-full bg-white"
        >
          <IoCloseOutline
            size={26}
            className="absolute right-9 top-4 cursor-pointer"
            onClick={() => setExpandNav((v) => !v)}
          />
          <div className="absolute top-20 left-12">
            <ul className="flex flex-col gap-6 text-2xl font-semibold text-gray-800">
              {navLinks.map(({ label }) => (
                <li key={label} className="cursor-pointer">
                  <a href={label}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;