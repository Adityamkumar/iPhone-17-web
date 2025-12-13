import { Camera, Users, Video, Zap } from "lucide-react";

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

export const features = [
    {
      icon: Camera,
      title: "Centre Stage",
      subtitle: "video",
      media: "/video/camera_video_1.mp4",
      type: "video",
      description:
        "An all-new square sensor enables zoom and rotate options, for more flexible ways to frame selfies and videos. And it gets everyone in a group shot — automatically.",
    },
    {
      icon: Video,
      title: "Dual Capture",
      subtitle: "video",
      media: "/video/camera_video_2.mp4",
      type: "video",
      description:
        "Record yourself and the world around you with simultaneous front and rear video capture.",
    },
    {
      icon: Zap,
      title: "Ultra-stabilised",
      subtitle: "video",
      media: "/video/camera_video_3.mp4",
      type: "video",
      description:
        "Capture stunningly smooth 4K 60 fps video in Dolby Vision, even when you’re in action.",
    },
    {
      icon: Users,
      title: "Centre Stage",
      subtitle: "for video calls",
      media: "/img/camera_img.jpg",
      type: "image",
      description:
        "Artificial intelligence automatically adjusts the frame, so you’re front and centre for virtual meetings and FaceTime calls.6",
    },
  ];


export const snapSlideData = [
   {
      id: 1,
      img: '/img/snap_img1.jpg',
      text: '2x Telephoto. Close in or zoom out on your subjects with exceptional detail.'
   },
   {
      id: 2,
      img: '/img/snap_img2.jpg',
      text: 'Clean Up. Remove unwanted objects, people and background distractions from your photos.'
   },
   {
      id: 3,
      img: '/img/snap_img3.jpg',
      text: 'Low-light and Night mode photography. Capture sharper, more detailed and brighter images with natural colours and reduced noise, even when it’s dark.'
   },
   {
      id: 4,
      img: '/img/snap_img4.jpg',
      text: 'Latest‑generation Photographic Styles. Choose from different preset styles, including the new Bright option, to customise the tone, colour and look of your photos.'
   },
   {
      id: 5,
      img: '/img/snap_img5.jpg',
      text: 'Macro. Take compelling close-ups and capture sharp details with incredible clarity.'
   },
   {
      id: 6,
      img: '/img/snap_img6.jpg',
      text: 'Pro-level videos. Record up to 4K 60 fps videos or enable Cinematic mode for theatre-quality results. And Audio Mix lets you adjust the way voices sound in your videos.'
   }
]

export default {
  navLinks,
  SLIDE_DATA,
  features,
  snapSlideData
};