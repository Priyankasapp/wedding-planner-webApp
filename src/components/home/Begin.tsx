import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Begin = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Bottom to top animation variants
  const defaultTransition = {
    duration: 0.7,
    ease: [0.33, 1, 0.68, 1] as any,
  };

  const slideUpVariants = {
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

  const slideUpWithDelay = (delay: number) => ({
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
            
            {/* Left */}
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideUpVariants}
              className="lg:col-span-6"
            >
              <motion.p
                variants={slideUpWithDelay(0.1)}
                className="uppercase tracking-[8px] text-xs text-[#C6A15B] mb-6"
              >
                Begin
              </motion.p>

              <motion.h2
                variants={slideUpWithDelay(0.2)}
                className="font-serif text-4xl md:text-6xl font-light leading-tight"
              >
                When you're ready,
                <br />
                we'd love to listen.
              </motion.h2>
            </motion.div>

            {/* Right */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideUpWithDelay(0.3)}
              className="lg:col-span-6 flex flex-col lg:items-start justify-center"
            >
              <motion.p
                variants={slideUpWithDelay(0.4)}
                className="text-[#6E615A] text-lg leading-8 max-w-md"
              >
                We accept a small number of weddings each year.
                Tell us about yours.
              </motion.p>

              <motion.div
                variants={slideUpWithDelay(0.5)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/contact"
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
                    tracking-[5px]
                    text-xs
                    text-[#43342F]
                    hover:bg-[#43342F]
                    hover:text-white
                    transition
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