import { Link } from "react-router-dom";
import hero from "../../assets/images/photo_1.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const serifStyle = {
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300,
  };

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-[#FAF6EE]">

      {/* 1. Pure Background Image Stage */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={hero}
          alt="Maison Lior Wedding Scene"
          className={`
            h-full w-full object-cover
            transition-transform duration-[4000ms] ease-out
            ${isLoaded ? 'scale-100' : 'scale-[1.05]'}
          `}
          style={{
            transformOrigin: 'center 60%', 
          }}
        />
      </div>

      {/* 2. Natural Visual Overlay Layer */}
      {/* Removed the heavy black gradients. Added a minimal bright overlay just to soften the image slightly like the screenshot */}
      <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />

      {/* 3. Content Layout Layer */}
      {/* Moved content to the bottom-left of the screen to precisely match the screenshot placement */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 h-full flex items-end pb-2 md:pb-32">
        <div
          className={`
            transition-all duration-[1500ms] ease-out
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
        
          <p 
          className="uppercase tracking-[6px] text-[#B89150] text-[10px] md:text-xs mb-6 font-medium mix-blend-difference">
            Wedding Atelier · Est. 2008
          </p>

          <h1

           style={{ ...serifStyle, fontWeight: 400 }}
            className="
              font-serif
              text-white
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-7xl
              leading-[1.1]
              font-light
              max-w-10xl
              tracking-wide
            "
          >
            Weddings, <span className="italic text-[#B89150] font-normal">composed</span> like a <br className="hidden md:inline" /> love letter.
          </h1>

          <div className="flex flex-wrap gap-5 mt-12 items-center">
            <Link
              to="/contact"
              className="
                bg-white
                text-[#2B2623]
                px-8
                py-4
                uppercase
                tracking-[3px]
                text-[11px]
                font-light
                hover:bg-[#2B2623]
                hover:text-white
                transition-all
                duration-300
                rounded-sm
              "
            >
              Begin Your Story
            </Link>

            <Link
              to="/portfolio"
              className="
                text-white
                text-[11px]
                uppercase
                tracking-[3px]
                font-light
                border-b
                border-white/40
                pb-1
                hover:border-white
                transition-all
                duration-300
                ml-2
              "
            >
              View Our Weddings
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator from screenshot */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <p className="text-[9px] uppercase tracking-[6px] text-white/60 font-light">
          Scroll
        </p>
      </div>

    </section>
  );
};

export default Hero;