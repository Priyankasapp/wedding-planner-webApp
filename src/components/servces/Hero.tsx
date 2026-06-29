import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants for a clean staggered fade-up effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delays the heading slightly after the subtitle
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as const, // Custom cubic-bezier for a smooth glide
      },
    },
  };

  return (
    <section className="bg-[#fdfcf5] pt-40 pb-24 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Subtitle fading up */}
          <motion.p 
            variants={itemVariants}
            className="font-sans text-[11px] font-normal uppercase tracking-[0.35em] text-[#b89154] mb-7"
          >
            — Services
          </motion.p>

          {/* Heading fading up */}
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-8xl mt-6 max-w-4xl leading-[0.95] font-serif font-light tracking-[-0.02em]"
          >
            <span className="block">
              From the first{" "}
              <em className="font-serif italic font-normal text-[#b89154]">
                spark
              </em>{" "}
              to the last dance.
            </span>
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;