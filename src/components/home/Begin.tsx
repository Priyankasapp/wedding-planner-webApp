

import { Link } from "react-router-dom";
import { motion, type Transition, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from 'lucide-react';
const Begin = () => {
 const serifStyle = { 
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300 
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const defaultTransition: Transition = {
    duration: 0.7,
    ease: [0.33, 1, 0.68, 1],
  };

  const slideUpVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: defaultTransition },
  };

  const slideUpWithDelay = (delay: number): Variants => ({
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { ...defaultTransition, delay } },
  });

  return (
    <section className="bg-espresso text-ivory py-24 lg:py-36 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16 items-end">
            
            {/* Left Column - Heading Block */}
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideUpVariants}
              className="lg:col-span-8 space-y-4"
            >
              <motion.p
                variants={slideUpWithDelay(0.1)}
                className="font-sans uppercase tracking-[0.3em] text-[10px] md:text-xs text-gold/80 font-normal"
              >
                — Begin
              </motion.p>

              <motion.h2
              style={serifStyle}
                variants={slideUpWithDelay(0.2)}
                className="font-serif text-ivory text-4xl sm:text-5xl md:text-6xl lg:text-[76px] leading-[1.1] font-light max-w-3xl tracking-wide"
              >
                When you're ready,
                <span className="italic text-gold font-normal ">
                  we'd love to listen.
                </span>
              </motion.h2>
            </motion.div>

            {/* Right Column - Subtext & Action Block */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideUpWithDelay(0.3)}
              className="lg:col-span-4 flex flex-col items-start lg:items-end space-y-10 text-left lg:text-right"
            >
              <motion.p
                variants={slideUpWithDelay(0.4)}
                className="font-sans text-ivory/80 text-base md:text-base font-light leading-relaxed max-w-sm lg:text-right"
              >
                We accept a small number of weddings each year. 
                Tell us about yours.
              </motion.p>

              <motion.div
                variants={slideUpWithDelay(0.5)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/contact"
                  className="
                    w-full
                    sm:w-auto
                    inline-flex
                    bg-champagne
                    text-espresso
                    items-center
                    justify-between
                    sm:justify-center
                    gap-6
                    px-8
                    py-4.5
                    uppercase
                    tracking-[0.25em]
                    text-[10px]
                    md:text-xs
                    font-light
                    hover:bg-gold
                    hover:text-espresso
                    transition-all
                    duration-300
                    rounded-sm
                    shadow-sm
                    group
                  "
                >
                  <span>Make an Enquiry</span>
                   <ArrowRight className="h-4 w-4" />
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