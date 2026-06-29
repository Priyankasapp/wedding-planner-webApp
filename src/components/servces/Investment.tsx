import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";

interface TierCard {
  number: string;
  title: string;
  description: string;
  priceText: string;
  isBespokePrice?: boolean;
  features: string[];
  isDarkHighlighted?: boolean;
}

const tiersData: TierCard[] = [
  {
    number: "01",
    title: "L'Essentiel",
    description: "Month-of coordination for couples who've planned and want a flawless day.",
    priceText: "From €18,000",
    features: [
      "Six weeks of coordination",
      "Vendor management",
      "Day-of leadership",
      "Two coordinators on site",
    ],
  },
  {
    number: "02",
    title: "Atelier",
    description: "Full design and planning for an editorial celebration.",
    priceText: "From €45,000",
    isDarkHighlighted: true, 
    features: [
      "Concept & creative direction",
      "Full vendor curation",
      "Bespoke stationery suite",
      "Three on-site coordinators",
      "Rehearsal dinner planning",
    ],
  },
  {
    number: "03",
    title: "Maison",
    description: "Multi-day destination experiences with no detail spared.",
    priceText: "Bespoke",
    isBespokePrice: true,
    features: [
      "Welcome to farewell programming",
      "Private travel coordination",
      "Custom-built installations",
      "Dedicated concierge per couple",
      "Pre-wedding moodboard retreat",
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const Investment = () => {
  const serifStyle = {
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300,
  };

  const sansStyle = {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 300,
  };

  return (
    <section className="bg-[#FAF6EE] text-[#2B2623] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16 lg:mb-20">
          <p
            style={{ ...sansStyle, fontWeight: 400 }}
            className="text-xs tracking-[0.25em] text-gold uppercase mb-4"
          >
            — Investment
          </p>
          <h2
            style={serifStyle}
            className="text-5xl md:text-5xl lg:text-6xl text-[#3B2A24] tracking-wide"
          >
            Three ways to begin.
          </h2>
        </div>

        {/* 3-Column Card Layout Matrix */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {tiersData.map((tier) => {
            return (
              <motion.div
                key={tier.number}
                variants={cardVariants}
                  className={`
                    p-10 lg:p-14 flex flex-col justify-between min-h-[580px] rounded-[2px] transition-transform duration-300 hover:-translate-y-1
                    ${tier.isDarkHighlighted 
                      ? "bg-[#33241F] text-[#FAF6EE] shadow-xl" 
                      : "bg-white text-[#2B2623] shadow-[0_4px_30px_rgba(0,0,0,0.015)]"
                    }
                  `}
              >
                <div>
                  {/* Card Number */}
                  <span
                    style={{ ...sansStyle, fontWeight: 400 }}
                    className={`text-xs tracking-widest block mb-6 ${
                      tier.isDarkHighlighted ? "text-[#C2A677]" : "text-gold"
                    }`}
                  >
                    {tier.number}
                  </span>

                  {/* Card Title */}
                  <h3
                    style={serifStyle}
                    className="text-3xl lg:text-4xl tracking-wide mb-4 font-light"
                  >
                    {tier.title}
                  </h3>

                  {/* Card Description Text */}
                  <p
                    style={sansStyle}
                    className={`text-sm leading-relaxed mb-8 h-12 ${
                      tier.isDarkHighlighted ? "text-[#FAF6EE]/70" : "text-[#6E615A]"
                    }`}
                  >
                    {tier.description}
                  </p>

                  {/* Dynamic Price Tag Row */}
                  <p
                    style={{
                      ...serifStyle,
                      fontStyle: "italic",
                    }}
                    className={`text-2xl tracking-wide mb-8 ${
                      tier.isDarkHighlighted ? "text-[#FFFFFF]" : "text-[#3B2A24]"
                    }`}
                  >
                    {tier.priceText}
                  </p>

                  {/* Checkbox Feature Blueprint Stack */}
                  <ul className="flex flex-col gap-3.5 mb-12">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3.5 text-sm lg:text-base">
                        <span
                          className={`mt-0.5 select-none text-xs ${
                            tier.isDarkHighlighted ? "text-[#C2A677]" : "text-[#C2A677]"
                          }`}
                        >
                          ✓
                        </span>
                        <span
                          style={sansStyle}
                          className={tier.isDarkHighlighted ? "text-[#FAF6EE]/80" : "text-[#2B2623]/80"}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Footer Button Link */}
                <div>
                  <Link
                    to="/contact"
                    style={sansStyle}
                    className={`
                      inline-flex items-center gap-2 uppercase tracking-[0.2em] text-xs pb-1 border-b transition-colors duration-300 group
                      ${tier.isDarkHighlighted 
                        ? "border-[#FAF6EE]/30 text-[#FAF6EE] hover:text-[#C2A677] hover:border-[#C2A677]" 
                        : "border-[#2B2623]/20 text-[#2B2623] hover:text-[#B2964D] hover:border-[#B2964D]"
                      }
                    `}
                  >
                    Enquire{" "}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Investment;