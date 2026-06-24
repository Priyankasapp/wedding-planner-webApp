// import { motion, type Variants } from "framer-motion";

// interface ProcessStep {
//   number: string;
//   title: string;
//   description: string;
// }

// const processSteps: ProcessStep[] = [
//   {
//     number: "I",
//     title: "Discovery",
//     description:
//       "An unhurried conversation to learn your story, taste, and dream.",
//   },
//   {
//     number: "II",
//     title: "Design",
//     description:
//       "Moodboards, palette, paper goods, and a full creative direction.",
//   },
//   {
//     number: "III",
//     title: "Curation",
//     description:
//       "We assemble the right vendors, venues, and craftspeople for you.",
//   },
//   {
//     number: "IV",
//     title: "Production",
//     description: "Detailed run-of-show, rehearsals, and on-site orchestration.",
//   },
//   {
//     number: "V",
//     title: "Celebration",
//     description: "You are present. We hold every thread so you don't have to.",
//   },
// ];

// // FIX: Explicitly type your animation configurations as Variants
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.12,
//       delayChildren: 0.2,
//     },
//   },
// };

// // FIX: Explicitly type as Variants to satisfy the nested cubic-bezier array checks
// const itemVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 30,
//     scale: 0.95,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.6,
//       ease: [0.22, 1, 0.36, 1], // TypeScript now validates this correctly as a fixed ease tuple array
//     },
//   },
// };

// const Process = () => {
//   const serifStyle = {
//     fontFamily: '"Cormorant Garamond", serif',
//     fontWeight: 300,
//   };

//   const sansStyle = {
//     fontFamily: '"Montserrat", sans-serif',
//     fontWeight: 300,
//   };

//   return (
//     <section className="bg-[#FAF6EE] py-24 lg:py-32 relative overflow-hidden text-[#2B2623]">
//       {/* Decorative background element */}
//       <motion.div
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#C2A677]/5"
//         initial={{ scale: 0.5, opacity: 0 }}
//         whileInView={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1.5 }}
//         viewport={{ once: true }}
//       />

//       <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
//         {/* Heading Area */}
//         <motion.div
//           className=" mb-20"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//           viewport={{ once: true }}
//         >
//           <motion.p
//             style={{ ...sansStyle, fontWeight: 400 }}
//             className="uppercase tracking-[0.25em] text-xs text-gold"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             — The Process
//           </motion.p>

//           <motion.h2
//             style={serifStyle}
//             className="text-4xl md:text-6xl  mt-4 text-[#352021]"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//             Five movements, gently <br /> composed.
//           </motion.h2>

//           <motion.div
//             className="mx-auto mt-6 w-0 h-px bg-[#C2A677]"
//             whileInView={{ width: 60 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             viewport={{ once: true }}
//           />
//         </motion.div>

//         {/* Timeline Matrix Layout */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5  relative"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//         >
//           {/* Connecting line */}
//           <motion.div
//             className="hidden xl:block absolute top-1/2 left-0 right-0 h-px bg-[#C2A677]/20"
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             transition={{ duration: 1.5, delay: 0.5 }}
//             viewport={{ once: true }}
//           />

//           {processSteps.map((step, index) => (
//             <motion.div
//               key={index}
//               className="
//                 group
//                 p-10
//                 relative
//                 transition-all
//                 duration-300

//               "
//               variants={itemVariants}
//               whileHover={{
//                 y: -4,
//                 transition: { duration: 0.2 },
//               }}
//             >
//               {/* Step indicator context design */}

//               <div className="relative inline-block">
//                 <motion.div
//                   className="absolute inset-0 "
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
//                   viewport={{ once: true }}
//                 />
//                 <i className="font-serif text-2xl text-gold italic">
//                   {step.number}
//                 </i>
//               </div>

//               <h3 className="font-serif text-2xl mt-4">{step.title}</h3>

//               <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
//                 {step.description}
//               </p>

//               {/* Step number signature accent (mobile layout) */}
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Process;




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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Process = () => {
   const serifStyle = {
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300,
  };
  return (
    <section className="bg-[#FAF6EE] py-24 lg:py-32 text-[#2B2623] overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Heading Area */}
        <div className="mb-24 max-w-3xl">
          <motion.p
            className="uppercase tracking-[0.3em] text-[10px] sm:text-xs text-[#C2A677] font-medium"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            — The Process
          </motion.p>

          <motion.h2
          style={serifStyle}
            className="text-4xl md:text-6xl  mt-4 text-[#352021]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            Five movements, gently <br className="hidden md:block" /> composed.
          </motion.h2>
        </div>

        {/* Column Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-x-8 gap-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="relative pt-6 flex flex-col justify-between group"
              variants={itemVariants}
            >
              {/* Subtle Top Border Line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-[#2B2623]/10" />

              <div>
                {/* Roman Numeral */}
                <span className="font-serif italic text-xl text-[#C2A677] font-light block mb-5">
                  {step.number}
                </span>

                {/* Title */}
                <h3 className="font-serif text-2xl lg:text-3xl font-light text-[#2B2623] tracking-wide mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#2B2623]/70 text-[14px] leading-relaxed font-light font-sans max-w-[240px] md:max-w-none">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Process;