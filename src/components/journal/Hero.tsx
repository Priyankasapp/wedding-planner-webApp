import { motion, type Variants } from "framer-motion";
import SectionKicker from "../sections/SectionKicker";

export function Hero() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="bg-[#FAF6EE] pt-24 pb-0 overflow-hidden mt-16 select-none">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="pb-16" /* Adds clean spacing above the line */
        >
          {/* Reusable SectionKicker component */}
          <motion.div variants={itemVariants}>
            <SectionKicker title='THE JOURNAL' className="mb-8" />
          </motion.div>          
          
          {/* Main Heading scaled down slightly to look crisp on a single line */}
          <motion.h1
            variants={itemVariants}
            style={serifStyle}
            className="text-6xl md:text-8xl mt-6 leading-[1.02] tracking-[-0.02em] font-serif font-light "
          >
            Notes from the{" "}
            <span
              style={{ ...serifStyle, fontStyle: "italic" }}
              className="text-[#C2A677]"
            >
              atelier.
            </span>
          </motion.h1>
        </motion.div>
        
      </div>
     
      {/* The full-width thin divider line matching the picture */}
      <motion.hr 
        initial={{ opacity: 0, scaleX: 0.98 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="border-[#2B2623]/10 w-full mb-9"
      />
    </section>
  );
}