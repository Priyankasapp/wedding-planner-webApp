import { Link } from "react-router-dom";
import hero from "../../assets/images/photo_1.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Small delay for smoother effect
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background with zoom animation */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={hero}
          alt=""
          className={`
            h-full w-full object-cover
            transition-transform duration-[4000ms] ease-out
            ${isLoaded ? 'scale-[1.08]' : 'scale-[1.15]'}
          `}
          style={{
            transformOrigin: 'center 60%', // Slightly off-center for more dynamic feel
          }}
        />
      </div>

      {/* Overlay with subtle fade */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content with fade-in */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 h-full flex items-center">
        <div
          className={`
            transition-all duration-[1500ms] ease-out
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
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