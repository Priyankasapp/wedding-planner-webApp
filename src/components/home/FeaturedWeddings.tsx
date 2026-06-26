import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from "../../assets/images/photo_5.jpg";
import img2 from "../../assets/images/photo_4.jpg";
import img3 from "../../assets/images/photo_1.jpg";
import img4 from "../../assets/images/photo_2.jpg";

const weddings = [
  {
    title: "Elena & Marco",
    location: "Lake Como, Italy · 2025",
    description: "A villa romance under cypress light.",
    image: img1,
    path: "/portfolio/elena-marco"
  },
  {
    title: "Sophia & James",
    location: "Provence, France · 2024",
    description: "Lavender fields and a candlelit chateau.",
    image: img2,
    path: "/portfolio/sophia-james"
  },
  {
    title: "Amara & Noah",
    location: "Santorini, Greece · 2024",
    description: "Bougainvillea, sea breeze, and gold hour.",
    image: img3,
    path: "/portfolio/amara-noah"
  },
  {
    title: "Isla & Rhys",
    location: "Cotswolds, England · 2023",
    description: "An English garden in full bloom.",
    image: img4,
    path: "/portfolio/isla-rhys"
  },
];

const FeaturedWeddings = () => {
  const serifStyle = { 
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300 
  };

  const sansStyle = { 
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 300
  };

  return (
    <section className="bg-[#FAF6EE] py-24 lg:py-32 text-[#2B2623]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div 
          className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div>
            <p style={sansStyle} className="uppercase tracking-[0.25em] text-xs text-gold">
              — Featured Weddings
            </p>
            <h2 style={serifStyle} className="text-5xl md:text-6xl text-[#2B2623] mt-4">
              Stories worth telling.
            </h2>
          </div>

         
        </motion.div>

        {/* Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {weddings.map((wedding, index) => (
            <motion.div
              key={index}
              className={`group flex flex-col w-full cursor-pointer ${
                index % 2 !== 0 ? "md:mt-28" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-40px" }}
            >
              {/* Image Frame Wrapper linked dynamicall y */}
              <Link to={wedding.path} className="overflow-hidden rounded-sm relative block w-full aspect-[4/3] md:aspect-[1.37/1] h-[800px]">
                <motion.img
                  src={wedding.image}
                  alt={wedding.title}
                  className="w-full h-full object-cover object-center"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-[#2B2623]/0 group-hover:bg-[#2B2623]/[0.02] transition-colors duration-300" />
              </Link>

              {/* Text Card Content & Bottom Minimal Arrow Container */}
              <div className="mt-6 relative pr-8 w-full">
                
                {/* Gold location tag header row */}
                <p 
                  style={sansStyle} 
                  className="text-[#B89154] text-[10px] tracking-[0.2em] uppercase font-medium mb-2.5"
                >
                  {wedding.location}
                </p>

                {/* Wedding Title context */}
                <Link to={wedding.path} className="inline-block">
                  <h3 
                    style={{ ...serifStyle, fontStyle: "italic" }}  
                    className="text-3xl md:text-4xl text-[#2B2623] tracking-wide transition-colors duration-300 group-hover:text-[#B2964D]"
                  >
                    {wedding.title}
                    
                  </h3>
                </Link>

                {/* Description subhead snippet */}
                <p 
                  
                  className="text-[#6e605b] text-sm  mt-3 max-w-md"
                >
                  {wedding.description}
                </p>

                {/* Editorial minimal diagonal link indicator arrow aligned precisely to the right side */}
                <Link 
                  to={wedding.path}
                  style={serifStyle}
                  className="absolute right-0 bottom-1 text-[#2B2623] opacity-40 group-hover:opacity-100 group-hover:text-[#B2964D] text-lg transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Bottom Section Entry Anchor Button */}
        <div className="flex justify-center mt-24 md:mt-32">
  <Link
    to="/portfolio"
    style={sansStyle}
    className="inline-flex items-center gap-3 border border-foreground px-8 py-4 uppercase tracking-[0.2em] text-xs transition-all duration-300 hover:bg-[#2B2623] hover:text-[#FAF6EE] rounded-sm"
  >
    <span>The Full Portfolio</span>
    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </Link>
</div>

      </div>
    </section>
  );
};

export default FeaturedWeddings;