import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="bg-[#F8F6F2] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <p className="
              uppercase
              tracking-[8px]
              text-xs
             text-[#7A5A2A]
            ">
              — A Few Words
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            className="lg:col-span-9"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="
                font-serif
    text-[#3B2A24]
    text-3xl
    md:text-5xl
    lg:text-6xl
    leading-[1.2]
    font-light
              "
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We design a dozen weddings each year —
              no more — for couples who value craft
              over spectacle, and presence over
              performance.
            </motion.h2>

            <motion.p 
              className="
                mt-10
                text-[#7B6B63]
                italic
                text-lg
              "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="inline-block mr-2"
                initial={{ opacity: 0, x: -5 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                viewport={{ once: true }}
              >
                ——
              </motion.span> 
              Lior Amari, Founder
            </motion.p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Intro;