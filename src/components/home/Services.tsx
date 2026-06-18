import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from "../../assets/images/photo_2.jpg"
import img2 from "../../assets/images/photo_1.jpg"
import img3 from "../../assets/images/photo_3.jpg"
import img4 from "../../assets/images/photo_4.jpg"

const services = [
  {
    image: img1,
    number: "01",
    title: "Full Wedding Planning",
    description:
      "End-to-end orchestration of every detail, from concept to last dance.",
  },
  {
    image: img2,
    number: "02",
    title: "Destination Weddings",
    description:
      "Curated celebrations in Europe's most romantic estates and coastlines.",
  },
  {
    image: img3,
    number: "03",
    title: "Decor & Floral Styling",
    description:
      "Bespoke design direction with editorial florals and tactile textures.",
  },
  {
    image: img4,
    number: "04",
    title: "Venue Management",
    description:
      "Sourcing, negotiation, and stewardship of unforgettable settings.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Services = () => {
  return (
    <section className="bg-[#f7f2f0] py-24 lg:py-32">

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Heading with animation */}
        <motion.div 
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div>
            <motion.p 
              className="uppercase tracking-[8px] text-xs text-[#C6A15B]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              What We Do
            </motion.p>

            <motion.h2 
              className="font-serif text-[#3B2A24] text-4xl md:text-6xl font-light mt-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Services tailored to your <br /> story.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/services"
              className="
                mt-8
                lg:mt-0
                uppercase
                tracking-[5px]
                text-xs
                text-[#3B2A24]
                flex
                items-center
                gap-4
                group
              "
            >
              <span className="w-10 h-px bg-[#3B2A24] group-hover:w-16 transition-all duration-300"></span>
              All Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.number} 
              className="group"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image */}
              <div className="overflow-hidden relative">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[450px] object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
                
                {/* Overlay on hover */}
                <motion.div 
                  className="absolute inset-0 bg-[#3B2A24]/0"
                  whileHover={{ backgroundColor: 'rgba(59, 42, 36, 0.15)' }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Decorative number overlay */}
                <motion.span 
                  className="absolute bottom-4 right-4 text-white/20 font-serif text-7xl font-light"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {service.number}
                </motion.span>
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.p 
                  className="mt-5 text-[#C6A15B] tracking-[4px] text-xs"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {service.number}
                </motion.p>

                <motion.h3 
                  className="mt-3 font-serif text-3xl text-[#3B2A24]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {service.title}
                </motion.h3>

                <motion.p 
                  className="mt-4 text-[#6E615A] leading-7"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {service.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;