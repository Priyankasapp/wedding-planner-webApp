import { motion } from "framer-motion";

const process = [
  {
    number: "I",
    title: "Discovery",
    description:
      "An unhurried conversation to learn your story, taste, and dream.",
  },
  {
    number: "II",
    title: "Design",
    description:
      "Moodboards, palette, paper goods, and a full creative direction.",
  },
  {
    number: "III",
    title: "Curation",
    description:
      "We assemble the right vendors, venues, and craftspeople for you.",
  },
  {
    number: "IV",
    title: "Production",
    description:
      "Detailed run-of-show, rehearsals, and on-site orchestration.",
  },
  {
    number: "V",
    title: "Celebration",
    description:
      "You are present. We hold every thread so you don't have to.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Process = () => {
  return (
    <section className="bg-[#F8F6F2] py-24 lg:py-32 relative overflow-hidden">
      
      {/* Decorative background elements */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#C6A15B]/5"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Heading with animation */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="uppercase tracking-[8px] text-xs text-[#C6A15B]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The Process
          </motion.p>

          <motion.h2 
            className="font-serif text-4xl md:text-6xl text-[#3B2A24] font-light mt-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Five movements, gently composed.
          </motion.h2>

          {/* Decorative underline */}
          <motion.div 
            className="mx-auto mt-6 w-0 h-px bg-[#C6A15B]"
            whileInView={{ width: 60 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Timeline */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 border-y border-[#D8D0C8] relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Animated connecting line */}
          <motion.div 
            className="hidden xl:block absolute top-1/2 left-0 right-0 h-px bg-[#C6A15B]/20"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          />

          {process.map((step, index) => (
            <motion.div
              key={index}
              className="
                group
                p-8
                last:border-r-0
                relative
                border-r border-[#D8D0C8]
                hover:bg-[#F2EEE8]
                transition-all
                duration-300
              "
              variants={itemVariants}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.2 }
              }}
            >
              {/* Step number with circular background */}
              <motion.div 
                className="relative inline-block"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-full bg-[#C6A15B]/10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                />
                <i className="
                  text-[#C6A15B]
                  font-serif
                  text-3xl
                  relative
                  z-10
                ">
                  {step.number}
                </i>
              </motion.div>

              <motion.h3 
                className="
                  font-serif
                  text-2xl
                  text-[#3B2A24]
                  mt-6
                "
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                viewport={{ once: true }}
              >
                {step.title}
              </motion.h3>

              <motion.p 
                className="
                  mt-5
                  text-[#6E615A]
                  leading-7
                "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
              >
                {step.description}
              </motion.p>

              {/* Decorative line below title */}
              <motion.div 
                className="mt-3 w-0 h-px bg-[#C6A15B]/50"
                whileInView={{ width: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                viewport={{ once: true }}
              />

              {/* Step number indicator (mobile) */}
              <motion.div 
                className="xl:hidden absolute top-4 right-4 text-[#C6A15B]/10 font-serif text-6xl"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
              >
                {index + 1}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative text */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-[#6E615A] text-sm tracking-[6px] uppercase">
            — Every detail, thoughtfully orchestrated —
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Process;