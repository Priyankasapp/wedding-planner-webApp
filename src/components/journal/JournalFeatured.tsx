import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";

// Replace this with your actual journal post banner image asset
import postImg1 from "../../assets/images/photo_3.jpg"; 

interface JournalPost {
  id: string;
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
  image: string;
}

const journalFeaturedPost: JournalPost = {
  id: "luxury-of-restraint",
  slug: "the-quiet-luxury-of-restraint",
  category: "PHILOSOPHY",
  date: "MAY 2026",
  title: "The Quiet Luxury of Restraint",
  excerpt: "Why the most memorable weddings are often the ones that whisper.",
  readTime: "6 MIN",
  image: postImg1, // The tablescape candle setting image from your screenshot
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageZoomVariants: Variants = {
  hover: {
    scale: 1.04,
    transition: { duration: 0.9, ease: [0.25, 1, 0.5, 1] },
  },
};

export function JournalFeatured() {
  const serifStyle = {
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300,
  };

  const sansStyle = {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 300,
  };

  const post = journalFeaturedPost;

  return (
    <section className="bg-[#FAF6EE] text-[#2B2623] pb-24 lg:pb-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Main Post Grid Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 gap-x-12 lg:gap-x-16 items-center w-full"
        >
          
          {/* Left Column: Post Cover Image Frame (Spans 6 out of 12 columns) */}
          <motion.div
            whileHover="hover"
            className="w-full lg:col-span-6 overflow-hidden rounded-sm aspect-[4/3] cursor-pointer relative group"
          >
            <Link to={`/journal/${post.slug}`} className="block w-full h-full">
              <motion.img
                variants={imageZoomVariants}
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover object-center shadow-[0_4px_25px_rgba(0,0,0,0.02)]"
              />
              <div className="absolute inset-0 bg-[#2B2623]/0 group-hover:bg-[#2B2623]/[0.01] transition-colors duration-500 pointer-events-none" />
            </Link>
          </motion.div>

          {/* Right Column: Text Content Block (Spans 5 out of 12 columns with 1-column layout gap) */}
          <div className="w-full lg:col-span-5 lg:col-start-8 flex flex-col justify-center">
            
            {/* Category and Date row */}
            <div
              style={sansStyle}
              className="text-[10px] tracking-[0.25em] text-[#C2A677] uppercase mb-4 flex items-center gap-2.5 font-medium"
            >
              <span className="text-gold">{post.category}</span>
              <span className="opacity-40 text-gold">—</span>
              <span className="text-[#795757]">{post.date}</span>
            </div>

            {/* Post Title */}
            <Link to={`/journal/${post.slug}`} className="group inline-block">
              <h2
                style={serifStyle}
                className="text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] text-[#352021] tracking-wide mb-5 group-hover:text-[#B2964D] transition-colors duration-300 font-light"
              >
                {post.title}
              </h2>
            </Link>

            {/* Excerpt / Subheading description */}
            <p
              style={sansStyle}
              className="text-[#795757] text-sm md:text-base leading-relaxed mb-8 font-light max-w-md opacity-90"
            >
              {post.excerpt}
            </p>

            {/* Action Read-Time Link */}
            <div>
              <Link
                to={`/journal/${post.slug}`}
                style={sansStyle}
                className="
                  inline-flex items-center gap-2.5
                  text-[10px] font-normal uppercase tracking-[0.25em] text-gold
                  hover:text-[#2B2623] transition-colors duration-300 group
                "
              >
                Read
                <span className="text-[#8B7A72] opacity-50 font-light">—</span>
                <span className="text-[#352021] group-hover:text-[#2B2623] transition-colors duration-300">
                  {post.readTime}
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-1.5 text-xs">
                  ↗
                </span>
              </Link>
            </div>

          </div>

        </motion.div>
        
      </div>
    </section>
  );
}

export default JournalFeatured;