import { motion, type Variants } from "framer-motion";

// Import your image assets here
import img1 from "../../assets/images/photo_11.jpg";
import img2 from "../../assets/images/photo_6.jpg";
import img3 from "../../assets/images/photo_3.jpg";
import img4 from "../../assets/images/photo_1.jpg";
import img5 from "../../assets/images/photo_10.jpg";
import img6 from "../../assets/images/photo_2.jpg";
import img7 from "../../assets/images/photo_5.jpg";
import img8 from "../../assets/images/photo_4.jpg";

interface ServiceBlock {
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
}

const servicesData: ServiceBlock[] = [
  {
    number: "01",
    title: "Bridal Assistance",
    tagline: "Personal styling, fittings, and day-of attention from a dedicated lead.",
    description: "Every engagement is custom. We share preliminary direction within two weeks of our discovery call, then iterate until the vision is unmistakably yours.",
    image: img1,
  },
  {
    number: "02",
    title: "Catering Curation",
    tagline: "Menus designed with Michelin-trained chefs and seasonal sourcing.",
    description: "Every engagement is custom. We share preliminary direction within two weeks of our discovery call, then iterate until the vision is unmistakably yours.",
    image: img2,
  },
  {
    number: "03",
    title: "Decor & Floral Styling",
    tagline: "Bespoke design direction with editorial florals and tactile textures.",
    description: "Every engagement is custom. We share preliminary direction within two weeks of our discovery call, then iterate until the vision is unmistakably yours.",
    image: img3,
  },
  {
    number: "04",
    title: "Destination Weddings",
    tagline: "Curated celebrations in Europe's most romantic estates and coastlines.",
    description: "Every engagement is custom. We share preliminary direction within two weeks of our discovery call, then iterate until the vision is unmistakably yours.",
    image: img4,
  },
  {
    number: "05",
    title: "Entertainment & Music",
    tagline: "From string quartets to headline DJs — every cue, perfectly timed.",
    description: "Every engagement is custom. We share preliminary direction within two weeks of our discovery call, then iterate until the vision is unmistakably yours.",
    image: img5,
  },
  {
    number: "06",
    title: "Full Wedding Planning",
    tagline: "End-to-end orchestration of every detail, from concept to last dance.",
    description: "Every engagement is custom. We share preliminary direction within two weeks of our discovery call, then iterate until the vision is unmistakably yours.",
    image: img6,
  },
  {
    number: "07", 
    title: "Photography Coordination",
    tagline: "We pair you with photographers whose eye matches your story.",
    description: "Every engagement is custom. We share preliminary direction within two weeks of our discovery call, then iterate until the vision is unmistakably yours.",
    image: img7,
  },
  {
    number: "08", 
    title: "Venue Management",
    tagline: "Sourcing, negotiation, and stewardship of unforgettable settings.",
    description: "Every engagement is custom. We share preliminary direction within two weeks of our discovery call, then iterate until the vision is unmistakably yours.",
    image: img8,
  },
];

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// Image inner zoom variants
const imageZoomVariants: Variants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
  }
};

const ServiceSections = () => {
  const serifStyle = {
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300,
  };

  const sansStyle = {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 300,
  };

  return (
    <section className="bg-[#FAF6EE] text-[#2B2623] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col gap-28 lg:gap-40">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUpVariants}
                className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 items-center w-full"
              >
                {/* Image Wrap Side — using whileHover context trigger */}
                <motion.div
                  whileHover="hover"
                  className={`
                    w-full lg:col-span-5 overflow-hidden rounded-sm aspect-[4/5] cursor-pointer relative group
                    ${isEven ? "lg:order-1" : "lg:order-2 lg:col-start-8"}
                  `}
                >
                  <motion.img
                    variants={imageZoomVariants}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                  />
                  {/* Luxury soft overlay hint tint on image hover */}
                  <div className="absolute inset-0 bg-[#2B2623]/0 group-hover:bg-[#2B2623]/[0.02] transition-colors duration-500 pointer-events-none" />
                </motion.div>

                {/* Content description wrapper */}
                <div
                  className={`
                    w-full lg:col-span-5 flex flex-col justify-center
                    ${isEven ? "lg:order-2 lg:col-start-7 xl:col-start-8" : "lg:order-1 lg:col-start-1 xl:col-start-2"}
                  `}
                >
                  {/* Service Number Accent */}
                  <span
                    style={{ ...sansStyle, fontWeight: 400 }}
                    className="text-xs tracking-[0.25em] text-gold mb-6 block"
                  >
                    {service.number}
                  </span>

                  {/* Primary Heading */}
                  <h2
                    style={serifStyle}
                    className="text-4xl md:text-5xl lg:text-5xl leading-[1.1] text-[#352021] tracking-wide mb-4 font-light"
                  >
                    {service.title}
                  </h2>

                  {/* Tagline / Sub-description */}
                  <p
                    style={sansStyle}
                    className="mt-6 text-muted-foreground leading-relaxed max-w-xl"
                  >
                    {service.tagline}
                  </p>

                  {/* Secondary Body Paragraph */}
                  <p
                    style={sansStyle}
                    className="mt-6 text-muted-foreground leading-relaxed max-w-xl"
                  >
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSections;