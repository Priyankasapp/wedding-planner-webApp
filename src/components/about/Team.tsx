import { motion, type Variants} from "framer-motion";
import img1 from "../../assets/images/photo_7.jpg"
import img2 from "../../assets/images/photo_8.jpg"
import img3 from "../../assets/images/photo_9.jpg"

// 1. Explicitly define an interface for your data structure
interface TeamMember {
  image: string;
  title: string;
  role: string;
  description: string;
}

const teams: TeamMember[] = [
  {
    image: img1,
    title: "Lior Amari",
    role: "Founder & Creative Director",
    description: "Eighteen years designing celebrations across four continents.",
  },
  {
    image: img2,
    title: "Camille Devereaux",
    role: "Head of Design",
    description: "Former editor at Vogue Living, now shaping our visual language.",
  },
  {
    image: img3,
    title: "Henri Marchetti",
    role: "Director of Production",
    description: "Logistics maestro, fluent in five languages and every venue's quirks.",
  },
];

// Animation variants explicitly typed as Variants
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
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      // FIX: Changed from string "cubic-bezier" to a valid TypeScript number array array format
      ease: [0.22, 1, 0.36, 1], 
    },
  },
};

const Team = () => {
  const serifStyle = { 
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300 
  };

  const sansStyle = { 
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 300
  };

  return (
    <section className="py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Heading Area */}
        <motion.div 
          className="flex flex-col mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div>
            <motion.p 
              
              className="font-sans
              uppercase
              tracking-[0.35em]
              text-[0.7rem]
             font-normal
             text-[var(--gold)]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              — The team
            </motion.p>

            <motion.h2 
              style={serifStyle}
              className="text-[#2B2623] text-5xl md:text-[4.0rem] leading-[1.05] tracking-wide mt-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Hands that shape your day.
            </motion.h2>
          </div>
        </motion.div>

        {/* Team Grid Layout adjusted for 3 items */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {teams.map((member, index) => (
            <motion.div 
              key={index} 
              className="group"
              variants={itemVariants}
            >
              {/* Image Container with subtle rounded edge style */}
              <div className="overflow-hidden relative rounded-sm shadow-sm">
                <motion.img
                  src={member.image}
                  alt={member.title}
                  className="w-full h-[500px] object-cover object-center"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                
                {/* Subtle refined overlay on hover */}
                <motion.div 
                  className="absolute inset-0 bg-[#2B2623]/0 pointer-events-none"
                  whileHover={{ backgroundColor: 'rgba(43, 38, 35, 0.04)' }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Text Meta Content Info */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="mt-6"
              >
                {/* Member Name */}
                <h3 
                  style={serifStyle}
                  className="text-2xl lg:text-2xl text-[#2B2623] tracking-wide"
                >
                  {member.title}
                </h3>

                {/* Subtitle / Role Tag */}
                <p 
                 
                  className="font-sans
              uppercase
              tracking-[0.40em]
              text-[0.7rem]
             font-normal
             text-[var(--gold)]"
                >
                  {member.role}
                </p>

                {/* Description info */}
                <p 
                  style={sansStyle}
                  className="mt-4 text-[#6e605b] text-sm md:text-base font-light  leading-relaxed "
                >
                  {member.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Team;