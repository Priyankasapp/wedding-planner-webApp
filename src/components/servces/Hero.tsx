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
    // FIX: Added a semantic wrapper section with padding and a centered max-width constraint
    <section className="bg-[#FAF6EE] min-h-[60vh] flex items-center mt-20 py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="select-none "
        >
          <SectionKicker title='services'/>
          
          <motion.h1
            variants={itemVariants}
            style={serifStyle}
            className="text-6xl md:text-[5.5rem] leading-[1.05] tracking-wide text-[#2B2623]"
          >
            From the first{" "}
            <span
              style={{ ...serifStyle, fontStyle: "italic" }}
              className="text-gold"
            >
              spark
            </span>{" "}
            to <br /> the last dance.
          </motion.h1>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;