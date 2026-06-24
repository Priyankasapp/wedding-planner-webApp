import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Link } from "react-router-dom";

// Mock image imports (Replace these with your actual portfolio image asset paths)
import img1 from "../../assets/images/photo_5.jpg";
import img2 from "../../assets/images/photo_1.jpg";
import img3 from "../../assets/images/photo_4.jpg";
import img4 from "../../assets/images/photo_2.jpg";

interface PortfolioItem {
  id: string;
  slug: string;
  couple: string;
  location: string;
  category: string; // Must match one of the filter keys (lowercase)
  year: string;
  image: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: "elena-marco",
    slug: "elena-marco",
    couple: "Elena & Marco",
    location: "Lake Como, Italy",
    category: "destination",
    year: "2025",
    image: img1, // The bride looking towards the sea from the screenshot
  },
  {
    id: "amara-noah",
    slug: "amara-noah",
    couple: "Amara & Noah",
    location: "Santorini, Greece",
    category: "coastal",
    year: "2024",
    image: img2, // The floral arch wedding sunset scene from the screenshot
  },
  {
    id: "Sophia & James",
    slug: "sophia-james",
    couple: "sophia & James",
    location: "Provence, France",
    category: "chateau",
    year: "2025",
    image: img3,
  },
  {
    id: "Isla & Rhys",
    slug: "isla-rhys",
    couple: "Isla & Rhys",
    location: "Cotswolds, England",
    category: "garden",
    year: "2026",
    image: img4,
  },
];

const categories = ["ALL", "CHATEAU", "COASTAL", "DESTINATION", "GARDEN"];

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
};

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const serifStyle = {
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300,
  };

  const sansStyle = {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 300,
  };

  // Filter logic
  const filteredItems =
    activeFilter === "ALL"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeFilter.toLowerCase());

  return (
    <section className="bg-[#FAF6EE] text-[#2B2623] pb-24 lg:pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Horizontal Top Rule Line */}
        <hr className="border-[#D8D0C8]/60 mb-10" />

        {/* Categories Filter Menu */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-16 lg:mb-20">
          {categories.map((category) => {
            const isSelected = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                style={sansStyle}
                className={`
                  text-[10px] tracking-[0.2em] uppercase px-4 py-1.5 transition-all duration-300 rounded-[1px] border
                  ${
                    isSelected
                      ? "bg-[#33241F] text-[#FAF6EE] border-[#33241F]"
                      : "bg-transparent text-[#6E615A] border-[#D8D0C8]/40 hover:border-[#6E615A]"
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Asymmetrical 2-Column Portfolio Grid */}
        <motion.div
          layout
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-16 lg:gap-y-24 items-start"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              // Create the staggering offset height alignment seen in the layout screenshot
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={`w-full flex flex-col group ${
                    isEven ? "md:mt-0" : "md:mt-16 lg:mt-24"
                  }`}
                >
                  {/* Image Frame Link Wrapper */}
                  <Link
                    to={`/portfolio/${item.slug}`}
                    className="overflow-hidden aspect-[4/5] w-full rounded-sm relative block "
                  >
                    <motion.img
                      src={item.image}
                      alt={item.couple}
                      className="w-full h-full object-cover object-center"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div className="absolute inset-0 bg-[#2B2623]/0 group-hover:bg-[#2B2623]/[0.02] transition-colors duration-300 pointer-events-none" />
                  </Link>

                  {/* Metadata Block below Image */}
                  <div className="mt-6 flex flex-col">
                    {/* Category & Year */}
                    <div 
                      style={sansStyle}
                      className="text-[10px] tracking-[0.25em] text-[#C2A677] uppercase mb-2 flex items-center gap-2"
                    >
                      <span className="text-gold">{item.category}</span>
                      <span className=" text-gold">•</span>
                      <span className="text-gold">{item.year}</span>
                    </div>

                    {/* Couple Names */}
                    <Link to={`/portfolio/${item.slug}`}>
                      <h3
                        style={serifStyle}
                        className="text-2xl lg:text-3xl text-[#352021] tracking-wide hover:text-[#B2964D] transition-colors duration-300 inline-block font-light"
                      >
                        {item.couple}
                      </h3>
                    </Link>

                    {/* Geographical Location */}
                    <span
                      style={sansStyle}
                      className="text-sm text-[#6e605b] mt-1 font-light"
                    >
                      {item.location}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

export default PortfolioGrid;