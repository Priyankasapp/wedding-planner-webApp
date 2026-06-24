import { motion, type Variants } from "framer-motion";
import SectionKicker from "../sections/SectionKicker";

function Hero() {
  const serifStyle = {
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300,
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    // Changed mt-20 to safe padding blocks to prevent layout overlaps with your sticky navbar
    <section className="bg-[#FAF6EE] min-h-[50vh] sm:min-h-[60vh] flex items-center pt-28 pb-16 md:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="select-none text-left"
        >
          {/* Reusable Section Kicker */}
          <motion.div variants={itemVariants}>
            <SectionKicker title='services' className="mb-6 md:mb-8" />
          </motion.div>
          
          {/* Fluid responsive text scaling from text-4xl up to text-7xl / 8xl */}
          <motion.h1
            variants={itemVariants}
            style={serifStyle}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.2] sm:leading-[1.15] md:leading-[1.1] tracking-wide text-[#2B2623]"
          >
            From the first{" "}
            <span
              style={{ ...serifStyle, fontStyle: "italic" }}
              className="text-[#C2A677]"
            >
              spark
            </span>{" "}
            to <br className="hidden sm:block" /> the last dance.
          </motion.h1>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;