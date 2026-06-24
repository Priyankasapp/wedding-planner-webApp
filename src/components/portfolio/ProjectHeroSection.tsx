import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ProjectHeroProps {
  title: string;
  location: string;
  year: string;
  heroImage: string;
}

const ProjectHeroSection = ({ title, location, year, heroImage }: ProjectHeroProps) => {
  const serifStyle = {
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300,
  };

  const sansStyle = {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 300,
  };

  return (
    <section className="relative w-full h-[85vh] sm:h-screen overflow-hidden bg-neutral-900">
      
      {/* 1. Immersive Immersive Background Layer */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={heroImage} 
          alt={title} 
          className="w-full h-full object-cover object-center brightness-[0.85]"
        />
        {/* Subtle vignette gradient over image to guarantee typography readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      {/* 2. Overlaid Floating Content Elements */}
      <div className="absolute inset-0 flex flex-col justify-between max-w-[1440px] mx-auto px-6 sm:px-12 pt-32 pb-16 w-full text-white z-10">
        
        {/* Top Segment: Minimal Back Navigation Trigger Link */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link 
            to="/portfolio" 
            style={sansStyle}
            className="text-[10px] tracking-[0.25em] uppercase font-medium text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 w-fit group"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform duration-300">←</span> 
            All Weddings
          </Link>
        </motion.div>

        {/* Bottom Segment: Title Meta Copy Layout Block */}
        <div className="space-y-3 max-w-4xl">
          
          {/* Location & Vintage Metadata Labels */}
          <motion.p 
            style={sansStyle}
            className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#fff] shadow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {location} — {year}
          </motion.p>

          {/* Elegant Script Couple Name Display Title */}
          <motion.h1 
            style={serifStyle}
            className="text-5xl sm:text-7xl md:text-8xl tracking-wide leading-tight font-light"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {title}
          </motion.h1>

        </div>

      </div>
    </section>
  );
};

export default ProjectHeroSection;