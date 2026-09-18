import herobg from "../assets/hero-images/hero-banner.png";
import mobileherobg from "../assets/hero-images/mobile-hero-banner.png";

const Hero = () => {
  return (
    <div className="w-full mx-auto relative min-h-screen">
      <img
        src={herobg}
        alt="hero-banner"
        className="hidden md:block object-center object-cover h-auto w-full"
      />
      <img
        src={mobileherobg}
        alt="mobile-hero-img"
        className="md:hidden absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute bg-gradient-to-b from-[#000]/60 via-[#000]/30 to-[#000]/60 inset-0"></div>

      {/* Mobile content — stacked, centered */}
      <div className="md:hidden absolute bottom-8 left-0 right-0 flex flex-col items-center text-center gap-5 px-6">
        <p className="text-[12px] text-white font-sans leading-relaxed">
          Michelangelo's The Creation of Adam captures the spark that gives life
          meaning. The near-touch of God and Adam reflects potential awakening
          and reminds us that life matters when we strive—connecting with
          purpose, others, and something greater. In reaching, we find the power
          to live fully and create meaning
        </p>
        <button className="text-white capitalize border border-white px-8 py-3 text-sm">
          Explore gallery
        </button>
      </div>

      {/* Desktop content — side-by-side */}
      <div className="hidden md:flex absolute w-[1302px] items-center bottom-10 left-20 justify-between">
        <button className="text-white capitalize bg-[#000]/60 p-2 ml-28 border border-white text-2xl">
          explore gallery
        </button>
        <p className="text-[11px] text-white font-sans text-base w-[378px]">
          Michelangelo's The Creation of Adam captures the spark that gives life
          meaning. The near-touch of God and Adam reflects potential awakening
          and reminds us that life matters when we strive—connecting with
          purpose, others, and something greater. In reaching, we find the power
          to live fully and create meaning
        </p>
      </div>
    </div>
  );
};

export default Hero;
