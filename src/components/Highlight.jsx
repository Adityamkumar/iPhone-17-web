import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style.css";
import { SLIDE_DATA } from "../constant";


const SlideContent = ({ slide }) => {
  const baseTextClasses = "absolute  leading-6 md:leading-7 text-[#1D1D1F] md:font-semibold tracking-wide";
  const textSizeClasses = slide.titleSize || "md:text-[1.6rem] text-[1.2rem]";
  
  return (
    <>
      <div className={`${baseTextClasses} ${textSizeClasses} ${slide.textPosition}`}>
        <p>
          {slide.hasGradient ? (
            <>
              <span className="gradient-text">{slide.title}</span>
              <br />
              {slide.subtitle}
            </>
          ) : (
            slide.title
          )}
        </p>
      </div>

      {slide.media.type === "video" ? (
        <div>
          <video
            className={slide.media.className || ""}
            src={slide.media.src}
            autoPlay
            loop
            muted
            playsInline
            aria-label={slide.title}
          />
        </div>
      ) : (
        <div className={slide.media.containerClass || ""}>
          <img
            className={slide.media.imgClass || ""}
            src={slide.media.src}
            alt={slide.title}
            loading="lazy"
          />
        </div>
      )}
    </>
  );
};

const Highlight = () => {
  return (
    <section 
      className="md:mt-36 mt-20 md:min-h-screen overflow-x-hidden"
      aria-labelledby="highlights-title"
    >
      <h3 
        id="highlights-title"
        className="md:px-34 px-8 text-[#1D1D1F] md:text-6xl text-3xl font-semibold"
      >
        Get the highlights.
      </h3>

      <div className="swiper-container h-[400px] md:h-[600px]">
        <Swiper
          spaceBetween={30}
          slidesPerView={1.2}
          centeredSlides={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay]}
          className="mySwiper"
          aria-label="Product highlights carousel"
        >
          {SLIDE_DATA.map((slide) => (
            <SwiperSlide key={slide.id}>
              <SlideContent slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Highlight;