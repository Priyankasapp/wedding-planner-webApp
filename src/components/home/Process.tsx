import { motion, type Variants } from "framer-motion";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "I",
    title: "Discovery",
    description: "An unhurried conversation to learn your story, taste, and dream.",
  },
  {
    number: "II",
    title: "Design",
    description: "Moodboards, palette, paper goods, and a full creative direction.",
  },
  {
    number: "III",
    title: "Curation",
    description: "We assemble the right vendors, venues, and craftspeople for you.",
  },
  {
    number: "IV",
    title: "Production",
    description: "Detailed run-of-show, rehearsals, and on-site orchestration.",
  },
  {
    number: "V",
    title: "Celebration",
    description: "You are present. We hold every thread so you don't have to.",
  },
];

// FIX: Explicitly type your animation configurations as Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

// FIX: Explicitly type as Variants to satisfy the nested cubic-bezier array checks
const itemVariants: Variants = {
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
      ease: [0.22, 1, 0.36, 1], // TypeScript now validates this correctly as a fixed ease tuple array
    },
  },
};

const Process = () => {
  const serifStyle = { 
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300 
  };

  const sansStyle = { 
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 300
  };

  return (
    <section className="bg-[#FAF6EE] py-24 lg:py-32 relative overflow-hidden text-[#2B2623]">
      
      {/* Decorative background element */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#C2A677]/5"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Heading Area */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <motion.p 
            style={{ ...sansStyle, fontWeight: 400 }}
            className="uppercase tracking-[0.25em] text-xs text-[#C2A677]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            — The Process
          </motion.p>

          <motion.h2 
            style={serifStyle}
            className="text-5xl md:text-[5.5rem] leading-[1.05] tracking-wide mt-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Five movements, gently <span style={{ ...serifStyle, fontStyle: 'italic' }} className="text-[#8B6B2E]">composed.</span>
          </motion.h2>

          <motion.div 
            className="mx-auto mt-6 w-0 h-px bg-[#C2A677]"
            whileInView={{ width: 60 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Timeline Matrix Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 border-y border-[#D8D0C8] relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Connecting line */}
          <motion.div 
            className="hidden xl:block absolute top-1/2 left-0 right-0 h-px bg-[#C2A677]/20"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          />

          {processSteps.map((step, index) => (
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
              {/* Step indicator context design */}
              <div className="relative inline-block">
                <motion.div 
                  className="absolute inset-0 rounded-full bg-[#C2A677]/10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                />
                <i 
                  style={serifStyle}
                  className="text-[#8B6B2E] text-3xl relative z-10 not-italic block px-3 py-1"
                >
                  {step.number}
                </i>
              </div>

              <h3 
                style={serifStyle}
                className="text-2xl text-[#2B2623] mt-6 tracking-wide"
              >
                {step.title}
              </h3>

              <p 
                style={sansStyle}
                className="mt-4 text-[#5A5450] text-sm md:text-base leading-relaxed"
              >
                {step.description}
              </p>

              <div className="mt-4 w-8 h-px bg-[#C2A677]/40 group-hover:w-14 transition-all duration-300" />

              {/* Step number signature accent (mobile layout) */}
              <div 
                style={serifStyle}
                className="xl:hidden absolute top-4 right-4 text-[#C2A677]/10 text-6xl pointer-events-none select-none"
              >
                {index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note Accent */}
        <div className="text-center mt-16">
          <p 
            style={sansStyle}
            className="text-[#5A5450] text-xs tracking-[0.25em] uppercase"
          >
            — Every detail, thoughtfully orchestrated —
          </p>
        </div>

      </div>
    </section>
  );
};

export default Process;