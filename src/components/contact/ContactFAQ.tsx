import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How far in advance should we book?",
    answer: "Most couples reserve us 12–18 months ahead, though we accept a small number of short-notice weddings each year.",
  },
  {
    question: "Do you travel internationally?",
    answer: "Yes, Roughly half of our weddings take place outside our home studio, primarilly across Europe and Mediterranean.",
  },
  {
    question: "What is your typical investment?",
    answer: "Our full-service celebrations begin at €45,000 in planning fees, with total wedding budgets typically ranging from €150,000 upward.",
  },
  {
    question: "Do you offer partial planning?",
    answer: "We offer a refined month-of coordination package for couples who have planned independently and need a steady hand for execution.",
  },
  {
    question: "How many weddings do you take per year?",
    answer: "A maximum of twelve. We believe in deep attention over volume.",
  },
  {
    question: "Can you work with our existing vendors?",
    answer: "Absolutely. We collaborate with vendors you love and supplement with our trusted network where helpful.",
  },
];

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default like the screenshot

  const serifStyle = {
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300,
  };

  const sansStyle = {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 300,
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FAF6EE] text-[#2B2623] pb-32 w-full">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 w-full">
        
        {/* Left Spacing Grid Block matching editorial indentation */}
        <div className="w-full lg:col-span-8 lg:col-start-4">
          
          {/* Section Header */}
          <div className="mb-14">
            <p
              style={sansStyle}
              className="text-[10px] tracking-[0.25em] text-[#C2A677] uppercase mb-4 font-medium"
            >
              — FREQUENTLY ASKED
            </p>
            <h2
              style={serifStyle}
              className="text-4xl md:text-5xl lg:text-6xl text-[#2B2623] font-light tracking-wide"
            >
              Questions, gently answered.
            </h2>
          </div>

          {/* Accordion List Container */}
          <div className="border-t border-[#D8D0C8] w-full">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="border-b border-[#D8D0C8] w-full">
                  {/* Interactive Header Row */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full py-6 md:py-8 flex justify-between items-center text-left group transition-colors duration-300 focus:outline-none"
                  >
                    <span
                      style={serifStyle}
                      className="text-lg md:text-xl lg:text-2xl text-[#2B2623] tracking-wide font-light transition-colors duration-300 group-hover:text-[#B2964D]"
                    >
                      {item.question}
                    </span>
                    
                    {/* Plus / Minus Indicator Icon */}
                    <span 
                      style={serifStyle} 
                      className="text-xl md:text-2xl text-[#C2A677] font-light pl-4 select-none"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Smooth Collapsible Body Panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: "auto", 
                          opacity: 1,
                          transition: { height: { duration: 0.4, ease: [0.25, 1, 0.5, 1] }, opacity: { duration: 0.3 } }
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: { height: { duration: 0.3, ease: [0.25, 1, 0.5, 1] }, opacity: { duration: 0.2 } }
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pr-8">
                          <p
                            style={sansStyle}
                            className="text-[#795757] text-xs md:text-sm leading-relaxed font-light opacity-90 max-w-2xl"
                          >
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
        
      </div>
    </section>
  );
}

export default ContactFAQ;