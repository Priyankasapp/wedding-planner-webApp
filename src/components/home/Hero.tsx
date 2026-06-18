// import heroImage from "../../assets/images/photo_1.jpg";
// import {Link} from "react-router-dom";

// const Hero = () => {
//   return (
//     <div>
//       {/* Background Image  */}
//       <img src={heroImage} alt="Luxury Wedding" className="absolute inset-0 h-full w-full object-cover" />

//       {/* Overlay */} <div className="absolute inset-0 bg-black/30"></div>

//       {/* Content */}
//       <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center ">

//         <div className="max-w-3xl">
//           <p className="uppercase tracking-[6px] text-sm text-[#E8D7B0] mb-6"> Wedding Atelier · Est. 2008 </p>

//           <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-white">Weddinngs, <span>composed</span> like a love letter.</h1>

//          <div className="flex flex-wrap gap-4 mt-10">

//             <Link
//             className="px-8 py-4 bg-[#FFFFFF] text-black  uppercase tracking-[4px] text-xs hover:opacity-90 transition"
//             >BEGIN YOUR STORY</Link>
//             <Link
//             className="px-8 py-4 border border-white text-white uppercase tracking-[4px] text-xs hover:bg-white hover:text-black transition">VIEW OUR WEDDING</Link>
//           </div>
//         </div>
        
//       </div>
//     </div>
//   )
// }

// export default Hero


import { Link } from "react-router-dom";
import hero from "../../assets/images/photo_1.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background */}

      <img
        src={hero}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 h-full flex items-center">

        <div>

          <p className="uppercase tracking-[8px] text-[#D4B06A] text-xs md:text-sm mb-6">
            Wedding Atelier · Est. 2008
          </p>

          <h1
            className="
              font-serif
              text-white
              text-6xl
              md:text-8xl
              lg:text-[60px]
              leading-[0.9]
              font-light
              max-w-4xl
            "
          >
           Weddings, <i className="text-[#D4B06A]">composed</i> like a love letter.
          </h1>

          <div className="flex flex-wrap gap-4 mt-12">

            <Link
              to="/contact"
              className="
                bg-white
                text-[#3B2A24]
                px-10
                py-5
                uppercase
                tracking-[5px]
                text-xs
                hover:bg-[#D4B06A]
                transition
              "
            >
              Begin Your Story
            </Link>

            <Link
              to="/portfolio"
              className="
                border
                border-white
                text-white
                px-10
                py-5
                uppercase
                tracking-[5px]
                text-xs
                hover:bg-white
                hover:text-[#3B2A24]
                transition
              "
            >
              View Our Weddings
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;