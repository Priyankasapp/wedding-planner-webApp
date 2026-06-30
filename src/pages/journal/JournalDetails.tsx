import { useParams, Link } from "react-router-dom";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, type Variants } from "framer-motion"; // 1. Imported framer-motion
import LeaveAThought from "../../components/journal/LeaveAThought";
import ContinueReading from "../../components/journal/ContinueReading";
import PageTitle from "../../components/PageTitle";
import gridImg1 from "../../assets/images/photo_1.jpg";
import gridImg2 from "../../assets/images/photo_6.jpg";
import gridImg3 from "../../assets/images/photo_11.jpg";
import gridImg4 from "../../assets/images/photo_4.jpg";
import gridImg5 from "../../assets/images/photo_5.jpg";


const sharedArticleBody = {
  paragraphs: [
    "There is a question we ask every couple in our first meeting: what do you want your guests to feel when they walk in? The answers are almost never about a centerpiece or a color. They are about a memory, a holiday, a grandparent's kitchen, a song that played in a car twenty years ago.",
    "We build celebrations backwards from those answers. The flowers come later, and they come naturally, because the feeling has already been decided. A wedding designed in this order — feeling first, finishes second — has a quality that no amount of budget can buy: it feels inevitable.",
  ],
  sections: [
    {
      heading: "On restraint",
      text: "The temptation, especially with a generous budget, is to fill every surface. But the most luxurious weddings we have ever designed have all shared one quality: they breathe. There are pauses. There are empty corners.",
    },
    {
      quote: "The most luxurious thing in any room is space.",
    },
    {
      heading: "On trust",
      text: "We accept only twelve weddings per year. It means that when you hire us, you receive the entire attention of the studio. You also receive our honesty: if a vendor isn't right, we will say so.",
    },
  ],
};

const journalDatabase = {
  "planning-a-destination-wedding": {
    category: "Guides",
    date: "March 2026",
    readTime: "10 min",
    title: "Planning a Destination Wedding Without Losing Yourself",
    subtitle: "Twelve gentle principles we share with every couple before they board the plane.",
    image: gridImg1,
    imageAlt: "Destination wedding altar overview overlooking the ocean sunset",
    ...sharedArticleBody,
  },
  "florals-that-feel-like-a-garden": {
    category: "Design",
    date: "April 2026",
    readTime: "10 min",
    title: "Florals That Feel Like a Garden, Not a Showroom",
    subtitle: "A conversation with our lead floral designer on wildness, asymmetry, and trust.",
    image: gridImg2,
    imageAlt: "Organic wild floral design compositions",
    ...sharedArticleBody,
  },
  "a-brides-letter-to-herself": {
    category: "Inspiration",
    date: "December 2025",
    readTime: "5 min",
    title: "A Bride's Letter to Herself the Morning Of",
    subtitle: "Words to read with coffee in hand, before anyone else is awake.",
    image: gridImg3,
    imageAlt: "Bride preparing in morning sunlight wearing silk attire",
    ...sharedArticleBody,
  },
  "the-rise-of-the-multi-day-celebration": {
    category: "Trends",
    date: "January 2026",
    readTime: "9 min",
    title: "The Rise of the Multi-Day Celebration",
    subtitle: "Why couples are abandoning the single Saturday in favor of slow, layered weekends.",
    image: gridImg4,
    imageAlt: "Long candlelit outdoor reception feast tables",
    ...sharedArticleBody,
  },
  "real-wedding-elena-marco-at-villa-del-balbianello": {
    category: "Real Weddings",
    date: "February 2026",
    readTime: "12 min",
    title: "Real Wedding — Elena & Marco at Villa del Balbianello",
    subtitle: "Three days on Lake Como, cypress lanterns, and the most romantic first dance we've ever witnessed.",
    image: gridImg5,
    imageAlt: "Elena and Marco real wedding at Villa del Balbianello, Lake Como",
    ...sharedArticleBody,
  },
};

// 2. High-end motion preset variant configuration
const fadeInUp:Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.215, 0.610, 0.355, 1.000] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const JournalDetails = () => {
  const { slug } = useParams<{ slug?: string }>();

  const serifStyle = {
    fontFamily: '"Cormorant Garamond", serif',
  };

  const currentKey =
    slug && slug in journalDatabase
      ? (slug as keyof typeof journalDatabase)
      : "real-wedding-elena-marco-at-villa-del-balbianello";
  const article = journalDatabase[currentKey];

  return (
    <>
      <PageTitle title={article.title}/>
      <main className="bg-[#FAF8F5] text-[#3B2A24] min-h-screen mt-10 selection:bg-[#D4B06A]/20 selection:text-[#3B2A24]">
        
        {/* Animated Header Section */}
        <motion.header 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto px-6 pt-24 pb-12 text-center md:pt-32 md:pb-16"
        >
          <motion.div variants={fadeInUp}>
            <Link
              to="/journal"
              className="uppercase tracking-[4px] text-xs text-gold transition-colors duration-300"
            >
              ← The Journal
            </Link>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-base uppercase tracking-[3px] text-gold mt-8 mb-4">
            {article.category} · {article.date} · {article.readTime}
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            style={serifStyle}
            className="text-4xl md:text-6xl font-light leading-snug text-[#3B2A24] max-w-3xl mx-auto"
          >
            {article.title}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            style={serifStyle}
            className="text-base md:text-lg text-[#706053] font-light max-w-xl mx-auto mt-6 leading-relaxed italic"
          >
            {article.subtitle}
          </motion.p>
        </motion.header>

        {/* Animated Hero Image (Re-animates cleanly on slug key change) */}
        <motion.div 
          key={`${currentKey}-hero`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="max-w-5xl mx-auto px-0 md:px-6 mb-16 md:mb-24"
        >
          <div className="aspect-[4/5] md:aspect-[16/10] overflow-hidden bg-stone-200 shadow-sm">
            <img
              alt={article.imageAlt}
              src={article.image}
              className="w-full h-full object-cover object-[center_40%] hover:scale-[1.02] transition-transform duration-[3000ms] ease-out"
            />
          </div>
        </motion.div>

        {/* Dynamic Article Body Layout with individual block elements triggering whileInView */}
        <article
          style={serifStyle}
          className="max-w-2xl mx-auto px-6 text-base md:text-lg font-light leading-relaxed text-[#54463C] space-y-8 pb-24"
        >
          {article.paragraphs.map((p, index) => (
            <motion.p 
              key={`p-${index}`}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {p}
            </motion.p>
          ))}

          {article.sections?.map((section, index) => {
            if ("quote" in section && section.quote) {
              return (
                <motion.blockquote
                  key={`quote-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="border-l-2 border-[#D4B06A] pl-6 my-10 py-1 italic text-xl md:text-2xl text-[#3B2A24] font-serif tracking-wide bg-white/40 shadow-sm rounded-r p-4"
                >
                  &ldquo;{section.quote}&rdquo;
                </motion.blockquote>
              );
            }

            if ("heading" in section && "text" in section) {
              return (
                <motion.div 
                  key={`sec-${index}`} 
                  className="space-y-4"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                >
                  <h2
                    style={serifStyle}
                    className="text-2xl md:text-3xl text-[#3B2A24] pt-6 font-normal tracking-wide"
                  >
                    {section.heading}
                  </h2>
                  <p>{section.text}</p>
                </motion.div>
              );
            }

            return null;
          })}

          {/* Share Section Footer */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="border-t border-stone-200 pt-12 mt-16 flex flex-col sm:flex-row justify-between items-center gap-6"
          >
            <p className="text-xs uppercase tracking-[3px] text-gold">
              Share this piece
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                aria-label="Share on Facebook"
                className="text-stone-500 hover:text-[#D4B06A] transition-colors duration-300 p-2 hover:bg-stone-50 rounded-full"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Share on X (formerly Twitter)"
                className="text-stone-500 hover:text-[#D4B06A] transition-colors duration-300 p-2 hover:bg-stone-50 rounded-full"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Share on Pinterest"
                className="text-stone-500 hover:text-[#D4B06A] transition-colors duration-300 p-2 hover:bg-stone-50 rounded-full"
              >
                <FaPinterestP className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </article>

        <LeaveAThought />
        <ContinueReading />
      </main>
    </>
  );
};

export default JournalDetails;