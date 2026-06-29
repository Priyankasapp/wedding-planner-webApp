

import { Link } from "react-router-dom";
import hero from "../../assets/images/photo_1.jpg";
import { useEffect, useState } from "react";
import { ArrowRight } from 'lucide-react';
const Hero = () => {
 
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
      {/* 1. Pure Background Image Stage */}
      
       <img
  src={hero}
  alt="Cinematic outdoor wedding at golden hour"
  className={`
    absolute inset-0 h-full w-full object-cover
    transition-transform duration-[4000ms] ease-out
    ${isLoaded ? "scale-100" : "scale-[1.05]"}
  `}
  style={{ transformOrigin: "center 60%" }}
/>
     

      {/* 2. Natural Visual Overlay Layer */}

      <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />

      {/* 3. Content Layout Layer */}

      <div className="relative z-10 mx-auto max-w-[1400px] h-full px-6 lg:px-12 flex flex-col justify-end pb-24 lg:pb-32 ">
        <div >
          <p className="font-sans text-gold uppercase text-[0.7rem] text-4xl tracking-[0.35em] text-champagne">
            Wedding Atelier · Est. 2008
          </p>

          <h1
            
            className="
              text-ivory text-[12vw] md:text-[8vw] lg:text-[6.5vw] mt-6 font-serif tracking-[-0.02em] font-light leading-[1.02] max-w-5xl
              
            "
            
          >
           <span className="block">
             Weddings,{" "}
            <em className="italic text-[#B89154] ">composed</em>{" "}
            like a love letter.
           </span>
          </h1>

          <div className="flex flex-wrap gap-5 mt-12 items-center">
          
    <a
   
      className="
        inline-flex items-center gap-3 
        px-8 py-4 
        bg-[#fdfcf0] text-[#1a1916] 
        text-xs tracking-[0.25em] uppercase 
        hover:bg-[#f2eecb] 
        transition-colors duration-150
      "
    >
     begin yojur story
      <ArrowRight className="h-4 w-4" />
    </a>

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
     <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
  <p className="inline-flex items-center gap-3   font-light px-8 py-4 text-white text-foreground text-[11px] tracking-[0.25em] uppercase hover:bg-champagne transition-colors">
    Scroll

  
  </p>

  
</div>
    </section>
  );
};

export default Hero;

