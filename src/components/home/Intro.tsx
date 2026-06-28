import { motion } from "framer-motion";

const Intro = () => {
  const serifStyle = {
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300,
  };

  return (
    <section className="bg-[#F8F6F2] py-30 lg:py-42">
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
            <p
              className="
              font-sans
              uppercase
              tracking-[0.35em]
              text-[0.7rem]
             font-normal
             text-[var(--gold)]
            "
            >
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
              style={{ ...serifStyle }}
              className="
                font-serif
    text-[#352021]
    text-3xl
    md:text-xl
    lg:text-5xl
    leading-[1.03]
    font-light
              "
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We design{" "}
              <span className="italic text-[#B89150] font-light">a dozen</span>{" "}
              weddings each year — no more — for couples who value craft over
              spectacle, and presence over performance.
            </motion.h2>

            <motion.p
              className="
                mt-10
                text-[#808080]
                text-sm
                
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
