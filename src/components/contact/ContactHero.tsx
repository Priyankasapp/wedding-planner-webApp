import { motion, type Variants } from "framer-motion";
import SectionKicker from "../sections/SectionKicker";

export function ContactHero() {
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
    <section className="bg-[#FAF6EE] text-[#2B2623] pt-24 pb-16 lg:pt-32 mt-10 lg:pb-20 select-none">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        
        {/* Asymmetrical Layout Split Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 items-end"
        >
          
          {/* Left Block: Heading and Tag */}
          <div className="w-full lg:col-span-8">
            {/* <motion.p
              variants={itemVariants}
              style={{ ...sansStyle, fontWeight: 400 }}
              className="text-xs md:text-sm tracking-[0.25em] text-gold uppercase mb-6"
            >
              — ENQUIRIES
            </motion.p> */}
            <SectionKicker title='ENQUIRIES'/>         
            
            <motion.h1
              variants={itemVariants}
              style={serifStyle}
              className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] tracking-wide text-[#352021]"
            >
              We'd{" "}
              <span
                style={{ ...serifStyle, fontStyle: "italic" }}
                className="text-gold"
              >
                love
              </span>{" "}
              to hear about your day.
            </motion.h1>
          </div>

          {/* Right Block: Response Timeline Info */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:col-span-4 lg:col-start-9 lg:pl-4 xl:pl-12"
          >
            <p
              style={sansStyle}
              className="text-[#795757] text-sm md:text-base leading-relaxed opacity-90 max-w-sm"
            >
              Tell us a little about yourselves and your wedding. We respond to every enquiry personally, within three days.
            </p>
          </motion.div>

        </motion.div>
        
      </div>
    </section>
  );
}

export default ContactHero;