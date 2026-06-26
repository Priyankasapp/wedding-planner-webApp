// or use simple text strings if you prefer

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  { question: "How far in advance should we book?", answer: "Detail goes here..." },
  { question: "Do you travel internationally?", answer: "Detail goes here..." },
  { question: "What is your typical investment?", answer: "Detail goes here..." },
  { question: "Do you offer partial planning?", answer: "Detail goes here..." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[var(--ivory)] text-[var(--foreground)] pb-24 lg:pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        
        {/* EYEBROW HEADER */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-4 h-[1px] bg-[var(--gold)] opacity-60"></span>
          <span className="font-sans tracking-[0.35em] uppercase text-[0.7rem] font-light text-[var(--gold)]">
            Frequently Asked
          </span>
        </div>

        {/* MAIN HEADING */}
        <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] font-light italic leading-tight text-[var(--foreground)]/90 tracking-wide mb-16">
          Questions, gently answered.
        </h2>

        {/* ACCORDION LIST */}
        <div className="w-full border-t border-[var(--foreground)]/10">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border-b border-[var(--foreground)]/10"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center py-7 text-left group"
                >
                  <span className="font-serif text-lg md:text-xl font-light text-[var(--foreground)]/80 group-hover:text-[var(--gold)] transition-colors duration-300">
                    {item.question}
                  </span>
                  <span className="text-[var(--gold)] opacity-70 text-lg font-light pl-4">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                
                {/* Smooth Expandable Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="font-sans text-sm font-light text-[var(--foreground)]/70 max-w-2xl leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}