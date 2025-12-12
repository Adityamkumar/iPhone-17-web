
export const navLinks = [
  { label: "Store" },
  { label: "Mac" },
  { label: "iPad" },
  { label: "iPhone" },
  { label: "Watch" },
  { label: "Vision" },
  { label: "Airpods" },
  { label: "TV & Home" },
  { label: "Entertainment" },
  { label: "Accessories" },
  { label: "Support" },
];

export const SLIDE_DATA = [
  {
    id: 1,
    title: "Brighter display, now with ProMotion up to 120Hz. Durable Ceramic Shield 2 front with 3x better scratch resistance.1",
    media: { 
      type: "video", 
      src: "/video/video_2.mp4",
      className: "mt-10"
    },
    textPosition: "top-4 md:top-16 left-2 md:left-10 md:w-[42%]",
  },
  {
    id: 2,
    title: "New Center Stage front camera. Flexible ways to frame your shot. Smarter group selfies. And so much more.",
    media: { 
      type: "video", 
      src: "/video/video_3.mp4"
    },
    textPosition: "md:top-8 top-2 text-center md:w-[48%] px-6",
  },
  {
    id: 3,
    title: "48MP Dual Fusion camera system. Super-stunning shots up close and far away.",
    media: { 
      type: "image", 
      src: "/img/slide_img.png",
      containerClass: "absolute bottom-0",
      imgClass: "md:h-[50%] md:w-[40%] h-[50%] w-[60%] md:ml-[10%] m-auto"
    },
    textPosition: "md:top-10 md:right-4 top-4 text-center md:w-[32%] px-2",
  },
  {
    id: 4,
    title: "A19 chip. All-day battery life.2 Powers everything you love about iPhone.",
    media: { 
      type: "image", 
      src: "/img/slide_img2.jpg",
      containerClass: "mt-16 mb-8",
      imgClass: "w-[86%] h-[50%] m-auto"
    },
    textPosition: "top-6 text-center md:w-[39%]",
  },
  {
    id: 5,
    title: "iOS 26. New look. Even more magic.",
    media: { 
      type: "image", 
      src: "/img/slide_img3.png",
      containerClass: "mt-16 mb-8",
      imgClass: "w-[86%] h-[30%] mt-[38%] m-auto"
    },
    textPosition: "top-10 text-center md:w-[22%] px-6",
    titleSize: "md:text-[1.6rem] text-[1.4rem]",
  },
  {
    id: 6,
    title: "Apple Intelligence.",
    subtitle: "Effortlessly helpful features — from image creation to Live Translation.3,4",
    media: { 
      type: "image", 
      src: "/img/slide_img4.jpg",
      containerClass: "mt-16 md:mb-8",
      imgClass: "w-[86%] h-[30%] m-auto"
    },
    textPosition: "top-6 text-center md:w-[45%] leading-2 px-4",
    hasGradient: true,
  },
];


export default {
  navLinks,
  SLIDE_DATA,
};