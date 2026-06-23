import { motion, type Variants } from "framer-motion";

// FIX: Added 'export' right before the function declaration
export function Hero() {
  const serifStyle = {
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300,
  };

  const sansStyle = {
    fontFamily: '"Montserrat", sans-serif',
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
    <section className="bg-[#FAF6EE] min-h-[60vh] flex items-center py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="select-none"
        >
          <motion.p
            variants={itemVariants}
            style={{ ...sansStyle, fontWeight: 400 }}
            className="text-xs md:text-sm tracking-[0.25em] text-gold uppercase mb-6"
          >
            — PORTFOLIO
          </motion.p>
          
          <motion.h1
            variants={itemVariants}
            style={serifStyle}
            className="text-6xl md:text-[5.5rem] leading-[1.05] tracking-wide text-[#2B2623]"
          >
            A quiet archive of {" "}
            <span
              style={{ ...serifStyle, fontStyle: "italic" }}
              className="text-gold"
            >
              love.
            </span>{" "}
           
          </motion.h1>
        </motion.div>
        
      </div>
      <hr />
    </section>
  );
}
