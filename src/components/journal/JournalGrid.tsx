import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";

// Import your journal grid image assets here
import gridImg1 from "../../assets/images/photo_1.jpg";
import gridImg2 from "../../assets/images/photo_6.jpg";
import gridImg3 from "../../assets/images/photo_11.jpg";
import gridImg4 from "../../assets/images/photo_4.jpg";
import gridImg5 from "../../assets/images/photo_5.jpg";

interface GridPost {
  id: string;
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

const journalGridPosts: GridPost[] = [
  {
    id: "destination-planning",
    slug: "planning-a-destination-wedding",
    category: "GUIDES",
    date: "MARCH 2026",
    title: "Planning a Destination Wedding Without Losing Yourself",
    excerpt: "Twelve gentle principles we share with every couple before they board the plane.",
    image: gridImg1, // Floral arch sunset
  },
  {
    id: "garden-florals",
    slug: "florals-that-feel-like-a-garden",
    category: "DESIGN",
    date: "APRIL 2026",
    title: "Florals That Feel Like a Garden, Not a Showroom",
    excerpt: "A conversation with our lead floral designer on wildness, asymmetry, and trust.",
    image: gridImg2, // Bride holding pink bouquet
  },
  {
    id: "brides-letter",
    slug: "a-brides-letter-to-herself",
    category: "INSPIRATION",
    date: "DECEMBER 2025",
    title: "A Bride's Letter to Herself the Morning Of",
    excerpt: "Words to read with coffee in hand, before anyone else arrives.",
    image: gridImg3, // Bride by the window
  },
  {
    id: "multi-day-celebration",
    slug: "the-rise-of-the-multi-day-celebration",
    category: "TRENDS",
    date: "JANUARY 2026",
    title: "The Rise of the Multi-Day Celebration",
    excerpt: "Why couples are abandoning the single Saturday in favor of slow, layered weekends.",
    image: gridImg4, // Courtyard dinner lights
  },
  {
    id: "elena-marco-real",
    slug: "real-wedding-elena-marco",
    category: "REAL WEDDINGS",
    date: "FEBRUARY 2026",
    title: "Real Wedding — Elena & Marco at Villa del Balbianello",
    excerpt: "Three days at Lake Como, cypress lanterns, and the most romantic first dance we've ever witnessed.",
    image: gridImg5, 
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageZoomVariants: Variants = {
  hover: {
    scale: 1.03,
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
  },
};

export function JournalGrid() {
  const serifStyle = {
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300,
  };

  const sansStyle = {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 300,
  };

  return (
    <section className="bg-[#FAF6EE] text-[#2B2623] pb-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Responsive 3-Column Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 lg:gap-y-20 items-start w-full"
        >
          {journalGridPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              className="flex flex-col w-full group"
            >
              {/* Image Frame Wrapper with Zoom Animation */}
              <motion.div
                whileHover="hover"
                className="w-full overflow-hidden rounded-sm aspect-[4/5] cursor-pointer relative bg-[#F0EAE1] mb-6"
              >
                <Link to={`/journal/${post.slug}`} className="block w-full h-full">
                  <motion.img
                    variants={imageZoomVariants}
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center shadow-[0_4px_20px_rgba(0,0,0,0.015)]"
                  />
                  <div className="absolute inset-0 bg-[#2B2623]/0 group-hover:bg-[#2B2623]/[0.01] transition-colors duration-500 pointer-events-none" />
                </Link>
              </motion.div>

              {/* Text Metadata Block */}
              <div className="flex flex-col">
                {/* Meta Category and Date Tag */}
                <div
                  style={sansStyle}
                  className="text-[10px] tracking-[0.2em] text-[#C2A677] uppercase mb-2.5 flex items-center gap-2 font-medium"
                >
                  <span>{post.category}</span>
                  <span className="opacity-40 font-light">•</span>
                  <span className="text-[#8B7A72]">{post.date}</span>
                </div>

                {/* Article Title */}
                <Link to={`/journal/${post.slug}`} className="inline-block mb-3">
                  <h3
                    style={serifStyle}
                    className="text-xl lg:text-2xl leading-[1.25] text-[#2B2623] tracking-wide font-light group-hover:text-[#B2964D] transition-colors duration-300"
                  >
                    {post.title}
                  </h3>
                </Link>

                {/* Short Paragraph Description Excerpt */}
                <p
                  style={sansStyle}
                  className="text-[#6E615A] text-sm leading-relaxed font-light opacity-90 max-w-[95%]"
                >
                  {post.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default JournalGrid;