import { Link } from "react-router-dom";
import { motion, type Transition, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Begin = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Explicit inline typography definitions matching your editorial design style
  const serifStyle = { 
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300 
  };

  const sansStyle = { 
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 300
  };

  // FIX: Type this strictly using Framer Motion's 'Transition' type.
  // The 'ease' curve accepts a fixed array of 4 numbers natively.
  const defaultTransition: Transition = {
    duration: 0.7,
    ease: [0.33, 1, 0.68, 1],
  };

  // FIX: Explicitly type your Framer Motion configuration blocks as 'Variants'
  const slideUpVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: defaultTransition,
    },
  };

  // FIX: Explicitly return 'Variants' out of the delayed variant function generator
  const slideUpWithDelay = (delay: number): Variants => ({
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ...defaultTransition,
        delay,
      },
    },
  });

  return (
    <section className="bg-[#3A241F] text-[#F7F1EB] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="py-16">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Column */}
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideUpVariants}
              className="lg:col-span-6"
            >
              <motion.p
                style={{ ...sansStyle, fontWeight: 400 }}
                variants={slideUpWithDelay(0.1)}
                className="uppercase tracking-[0.25em] text-xs text-[#F0E8E2]mb-6"
              >
                — Begin
              </motion.p>

              <motion.h2
                style={serifStyle}
                variants={slideUpWithDelay(0.2)}
                className="text-4xl md:text-6xl leading-[1.1] tracking-wide"
              >
                When you're ready,
                <br />
                we'd love to <span style={{ ...serifStyle, fontStyle: 'italic' }} className="text-[#C6A15B]">listen.</span>
              </motion.h2>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideUpWithDelay(0.3)}
              className="lg:col-span-6 flex flex-col lg:items-start justify-center"
            >
              <motion.p
                style={sansStyle}
                variants={slideUpWithDelay(0.4)}
                className="text-[#E2C48A] text-base md:text-lg leading-relaxed max-w-md"
              >
                We accept a small number of weddings each year.
                Tell us about yours.
              </motion.p>

              <motion.div
                variants={slideUpWithDelay(0.5)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/contact"
                  style={sansStyle}
                  className="
                    mt-10
                    inline-flex
                    bg-[#ffffff]
                    items-center
                    justify-center
                    px-10
                    py-5
                    border
                    border-[#43342F]  
                    uppercase
                    tracking-[0.2em]
                    text-xs
                    text-[#43342F]
                    hover:bg-[#43342F]
                    hover:text-white
                    transition-colors
                    duration-300
                  "
                >
                  Make an Enquiry
                </Link>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Begin;