// import { Link } from "react-router-dom";
// import hero from "../../assets/images/photo_1.jpg";
// import { useEffect, useState } from "react";
// import { ArrowRight } from 'lucide-react';
// const Hero = () => {
 
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 100);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section className="relative h-[100svh] min-h-[680px]  w-full overflow-hidden bg-[#FAF6EE]">
//       {/* 1. Pure Background Image Stage */}
//       <div className="absolute inset-0 overflow-hidden">
//         <img
//           src={hero}
//           alt="Maison Lior Wedding Scene"
//           className={`
//             h-full w-full object-cover
//             transition-transform duration-[4000ms] ease-out
//             ${isLoaded ? "scale-100" : "scale-[1.05]"}
//           `}
//           style={{
//             transformOrigin: "center 60%",
//           }}
//         />
//       </div>

//       {/* 2. Natural Visual Overlay Layer */}

//       <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />

//       {/* 3. Content Layout Layer */}

//       <div className="relative z-0 max-w-[1400px] mx-auto px-6 lg:px-12 h-full flex items-end pb-24 md:pb:48">
//         <div
//           className={`
//             transition-all duration-[1500ms] ease-out
//             ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
//           `}
//         >
//           <p className="uppercase tracking-[6px] text-[#B89150] text-[10px] md:text-xs mb-6 font-medium mix-blend-difference">
//             Wedding Atelier · Est. 2008
//           </p>

//           <h1
            
//             className="
//               font-serif
//               text-white
//               text-[12vw]
//               sm:text-6xl
//               md:text-7xl
//               lg:text-[6.5vw]
//               leading-[1]
//               font-light
//               max-w-5xl
              
//             "
//           >
//             {/* display text-ivory text-[12vw] md:text-[8vw] lg:text-[6.5vw] mt-6 max-w-5xl */}
//             Weddings,{" "}
//             <span className="italic text-[#B89150] font-normal">composed</span>{" "}
//             like a <br className="hidden md:inline" /> love letter.
//           </h1>

//           <div className="flex flex-wrap gap-5 mt-12 items-center">
          
//     <a
   
//       className="
//         inline-flex items-center gap-3 
//         px-8 py-4 
//         bg-[#fdfcf0] text-[#1a1916] 
//         text-xs tracking-[0.25em] uppercase 
//         hover:bg-[#f2eecb] 
//         transition-colors duration-150
//       "
//     >
//      begin yojur story
//       <ArrowRight className="h-4 w-4" />
//     </a>

//             <Link
//               to="/portfolio"
//               className="
//                 text-white
//                 text-[11px]
//                 uppercase
//                 tracking-[3px]
//                 font-light
//                 border-b
//                 border-white/40
//                 pb-1
//                 hover:border-white
//                 transition-all
//                 duration-300
//                 ml-2
//               "
//             >
//               View Our Weddings
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Scroll Indicator from screenshot */}
//      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
//   <p className="inline-flex items-center gap-3   font-light px-8 py-4 text-white text-foreground text-[11px] tracking-[0.25em] uppercase hover:bg-champagne transition-colors">
//     Scroll

  
//   </p>

  
// </div>
//     </section>
//   );
// };

// export default Hero;


import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="https://cdn.sanity.io/images/xfzlvuer/production/66419b5160b31f6f99576827db09d5311b0918cc-1600x1066.jpg?w=2200&q=80&auto=format"
        alt="Cinematic outdoor wedding at golden hour"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0" 
        style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 100%)' }} 
      />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-[1400px] h-full px-6 lg:px-12 flex flex-col justify-end pb-16 lg:pb-20">
        <p className="text-[#B89154] uppercase tracking-[0.25em] text-xs font-medium">
          Wedding Atelier · Est. 2008
        </p>

        {/* Updated Heading to match original text and styling */}
        <h1 className="text-white font-serif text-[11vw] md:text-[7xl] lg:text-[11vw] mt-4 max-w-4xl leading-[1.15] font-light">
          Weddings, <span className="text-[#B89154] italic font-serif">composed</span> <br className="hidden md:inline" />
          like a love letter.
        </h1>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#F5F5F0] text-black text-xs tracking-[0.25em] uppercase hover:bg-[#B89154] hover:text-white transition-colors duration-300"
          >
            Begin your story
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/portfolio"
            className="text-white/90 text-xs tracking-[0.25em] uppercase border-b border-white/40 pb-1 hover:text-[#B89154] hover:border-[#B89154] transition-colors duration-300"
          >
            View our weddings
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-[10px] tracking-[0.4em] uppercase">
        Scroll
      </div>
    </section>
  );
};

export default Hero;