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
  },
  {
    title: "Sophia & James",
    location: "Provence, France · 2024",
    description: "Lavender fields and a candlelit chateau.",
    image: img2,
  },
  {
    title: "Amara & Noah",
    location: "Santorini, Greece · 2024",
    description: "Bougainvillea, sea breeze, and gold hour.",
    image: img3,
  },
  {
    title: "Isla & Rhys",
    location: "Cotswolds, England · 2023",
    description: "An English garden in full bloom.",
    image: img4,
  },
];

const FeaturedWeddings = () => {
  return (
    <section className="bg-[#F8F6F2] py-24 lg:py-32 relative overflow-hidden">
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 right-20 w-40 h-40 rounded-full border border-[#C6A15B]/10"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{ once: true }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div 
          className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div>
            <motion.p 
              className="uppercase tracking-[8px] text-xs text-[#C6A15B]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Featured Weddings
            </motion.p>

            <motion.h2 
              className="font-serif text-4xl md:text-6xl text-[#3B2A24] font-light mt-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Stories worth telling.
            </motion.h2>
          </div>

          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to="/portfolio"
              className="group mt-8 lg:mt-0 flex items-center gap-4 uppercase tracking-[5px] text-xs"
            >
              <motion.span 
                className="w-10 h-px bg-[#3B2A24]"
                whileHover={{ width: 60 }}
                transition={{ duration: 0.3 }}
              />
              The Full Portfolio
            </Link>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {weddings.map((wedding, index) => (
            <motion.div
              key={index}
              className={`group ${index % 2 !== 0 ? "md:mt-24" : ""}`}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="overflow-hidden relative"
                whileHover="hover"
              >
                <motion.img
                  src={wedding.image}
                  alt={wedding.title}
                  className="w-full h-[500px] object-cover"
                  variants={{
                    hover: { scale: 1.1 }
                  }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
                
                {/* Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-[#3B2A24]/0 via-transparent to-transparent"
                  whileHover={{ from: '#3B2A24/20' }}
                  transition={{ duration: 0.3 }}
                />

                {/* Location badge that appears on hover */}
                <motion.div 
                  className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-[#3B2A24] text-xs tracking-[2px] uppercase">
                    {wedding.location}
                  </p>
                </motion.div>
              </motion.div>

              <motion.div 
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="font-serif text-3xl text-[#3B2A24]"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {wedding.title}
                </motion.h3>

                <motion.p 
                  className="mt-3 text-[#6E615A] leading-7"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {wedding.description}
                </motion.p>

                {/* Learn more link */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to="/portfolio" 
                    className="inline-flex items-center gap-2 mt-4 text-xs uppercase tracking-[3px] text-[#C6A15B] group/link"
                  >
                    <span className="w-8 h-px bg-[#C6A15B] transition-all group-hover/link:w-12" />
                    View Story
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Bottom Button */}
      <motion.div 
        className="flex justify-center mt-16"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            to="/portfolio"
            className="
              group
              inline-flex
              items-center
              gap-3
              px-10
              py-5
              border-2
              border-[#43342F]
              uppercase
              tracking-[4px]
              text-xs
              text-[#43342F]
              transition-all
              duration-300
              hover:bg-[#43342F]
              hover:text-white
              hover:border-[#43342F]
            "
          >
            The Full Portfolio
            <motion.span 
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default FeaturedWeddings;