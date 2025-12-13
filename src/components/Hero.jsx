import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { IoIosPlay } from "react-icons/io";
import { IoPauseSharp } from "react-icons/io5";

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const isLargeScreen = useMediaQuery({ query: '(min-width:1072px)' })
  const isLargeScreenOrBelow = useMediaQuery({ query: '(max-width:1072px)' })

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className={` ${isLargeScreen && 'h-screen'}  w-full bg-white relative overflow-hidden mt-5`}>
      <div className={`flex flex-col gap-10 ${isLargeScreenOrBelow && 'items-center'} ${isLargeScreen && 'flex-row md:items-end md:justify-around'} px-20`}>
        <div className={`flex flex-col ${isLargeScreenOrBelow && 'items-center'} ${isLargeScreen && 'md:items-start'} z-60 py-10`}>
          <p className="md:text-[2vw] text-2xl font-bold md:leading-1">
            iPhone 17
          </p>
          <p className="mag md:text-[5vw] text-4xl font-bold md:tracking-tight">
            Magichromatic.
          </p>
        </div>
        <div className="relative md:pr-16">
          <video
            ref={videoRef}
            className="lg:scale-[1.3] md:pt-24  w-[50vh] m-auto mix-blend-darken"
            src="/video/video_1.mp4"
            autoPlay
            playsInline
            loop
            muted
          />
          <button
            onClick={togglePlayPause}
            className="hidden lg:block absolute top-10 -right-72 cursor-pointer bg-[#E9E9EB] bg-opacity-60 hover:bg-opacity-80 text-white p-2 rounded-full transition-all duration-300 z-50"
          >
            {isPlaying ? <IoPauseSharp size={24} color="black"/> : <IoIosPlay size={24} color="black" />}
          </button>
        </div>
        <div className="mt-6 md:mb-14 mb-6 z-60 flex justify-around items-center rounded-4xl h-16 w-80 px-2  bg-[#F3F3F6]">
          <div className="font-semibold">
            <span>
              From $799 <br /> or $33.29/mo. for 24 mo.*
            </span>
          </div>
          <div className="bg-[#0076DF] text-white px-6 py-2 rounded-4xl cursor-pointer">
            Buy
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-52 bg-linear-to-b from-transparent to-white pointer-events-none"></div>
    </section>
  );
};

export default Hero;
