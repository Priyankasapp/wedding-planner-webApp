import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import img1 from "../../assets/images/photo_2.jpg";
import img2 from "../../assets/images/photo_1.jpg";
import img3 from "../../assets/images/photo_3.jpg";
import img4 from "../../assets/images/photo_4.jpg";

interface ServiceItem {
  image: string;
  number: string;
  title: string;
  description: string;
  path: string; 
}

const services: ServiceItem[] = [
  {
    image: img1,
    number: "01",
    title: "Full Wedding Planning",
    description: "End-to-end orchestration of every detail, from concept to last dance.",
    path: "/services",
  },
  {
    image: img2,
    number: "02",
    title: "Destination Weddings",
    description: "Curated celebrations in Europe's most romantic estates and coastlines.",
    path: "/services",
  },
  {
    image: img3,
    number: "03",
    title: "Decor & Floral Styling",
    description: "Bespoke design direction with editorial florals and tactile textures.",
    path: "/services",
  },
  {
    image: img4,
    number: "04",
    title: "Venue Management",
    description: "Sourcing, negotiation, and stewardship of unforgettable settings.",
    path: "/services",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
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

        {/* Heading Area */}
        <motion.div 
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div>
            <motion.p 
              style={{ ...sansStyle, fontWeight: 400 }}
              className="uppercase tracking-[0.25em] text-xs text-[#493718]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              — What We Do
            </motion.p>

            <motion.h2 
              style={serifStyle}
              className="text-5xl md:text-[5.5rem] leading-[1.05] tracking-wide mt-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Services tailored to your <br /> <span style={{ ...serifStyle, fontStyle: 'italic' }} className="text-[#493718]">story.</span>
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
              style={sansStyle}
              className="mt-8 lg:mt-0 uppercase tracking-[0.15em] text-xs flex items-center gap-4 group font-normal"
            >
              <span className="w-10 h-px bg-[#2B2623] group-hover:w-16 transition-all duration-300"></span>
              All Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Services Grid Layout */}
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
              className="group "
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Card Image Wrapper wrapped inside Link anchor context */}
              <Link to={service.path} className="block overflow-hidden relative rounded-sm shadow-sm cursor-pointer">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[450px] object-cover object-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
                
                {/* Subtle Image Mask Hover Overlay */}
                <div className="absolute inset-0 bg-[#2B2623]/0 group-hover:bg-[#2B2623]/[0.03] transition-colors duration-300 pointer-events-none" />
                
                {/* Graphic absolute number signature overlay */}
                <span 
                  style={serifStyle}
                  className="absolute bottom-4 right-4 text-white/20 text-7xl select-none pointer-events-none"
                >
                  {service.number}
                </span>
              </Link>

              {/* Meta Content Metadata area */}
              <div className="mt-6">
                <p 
                  style={{ ...sansStyle, fontWeight: 400 }}
                  className="text-[#5F4B2B] tracking-[0.15em] text-xs uppercase"
                >
                  {service.number}
                </p>

                <Link to={service.path} className="inline-block group-hover:text-[#B2964D] transition-colors duration-300">
                  <h3 
                    style={serifStyle}
                    className="mt-2 text-2xl lg:text-3xl text-[#2B2623] tracking-wide inherit-color"
                  >
                    {service.title}
                  </h3>
                </Link>

                <p 
                  style={sansStyle}
                  className="mt-3 text-[#5A5450] text-sm md:text-base leading-relaxed"
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;