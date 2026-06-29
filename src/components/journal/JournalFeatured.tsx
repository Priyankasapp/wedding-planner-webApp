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
  image: postImg1,
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
    scale: 1.02, // Kept subtle to maintain the elegant luxury feel
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
    <section className="bg-[#FAF6EE] text-[#2B2623] pt-12 pb-24 lg:pb-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        
        {/* Main Post Grid Layout */}
 <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-60px" }}
  variants={fadeUpVariants}
  className="group grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 items-center w-full"
>
          
          {/* Left Column: Post Cover Image (Spans 6 out of 12 columns) */}
          <motion.div
            whileHover="hover"
            className="w-full lg:col-span-6 overflow-hidden aspect-[4/3] cursor-pointer relative"
          >
            <Link to={`/journal/${post.slug}`} className="block w-full h-full">
              <motion.img
                variants={imageZoomVariants}
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover object-center"
              />
            </Link>
          </motion.div>

          {/* Right Column: Text Content Block (Spans 6 out of 12 columns) */}
          <div className="w-full lg:col-span-6 flex flex-col justify-center ">
            
            {/* Category and Date row */}
            <div
              style={sansStyle}
              className="text-[11px] tracking-[0.25em] text-[#C2A677] uppercase mb-4 flex items-center gap-1 font-medium"
            >
              <span>{post.category}</span>
              <span className="opacity-40">—</span>
              <span className="text-[#8C827A]">{post.date}</span>
            </div>

            {/* Post Title */}
            <Link to={`/journal/${post.slug}`} className=" inline-block mb-4">
              <h2
  style={serifStyle}
  className="
    text-4xl md:text-5xl lg:text-5xl
    leading-[1.2]
    text-[#2B2623]
    tracking-wide
    font-light
    transition-colors duration-300
    group-hover:text-[#C2A677]
  "
>
  {post.title}
</h2>
            </Link>

            {/* Excerpt / Subheading description */}
            <p
            
              className="font-sans text-[#6E646E] text-base md:text-lg leading-relaxed mb-8 font-light max-w-xl opacity-90"
            >
              {post.excerpt}
            </p>

            {/* Action Read-Time Link */}
            <div>
              <Link
                to={`/journal/${post.slug}`}
                style={sansStyle}
                className="
                  inline-flex items-center gap-2
                  text-[11px] font-medium uppercase tracking-[0.25em] text-[#C2A677]
                  hover:text-[#2B2623] transition-colors duration-300 group
                "
              >
                <span>Read</span>
                <span className="text-[#8C827A] opacity-40 font-light">•</span>
                <span className="text-[var(--gold)]">
                  {post.readTime}
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 text-xs ml-0.5 text[var(--gold)]">
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