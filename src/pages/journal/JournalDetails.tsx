import { useParams, Link } from "react-router-dom";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import LeaveAThought from "../../components/journal/LeaveAThought";
import ContinueReading from "../../components/journal/ContinueReading";

// 1. Centralized Editorial Data Matching Your Screenshots
const journalDatabase = {
  "real-wedding-elena-marco": {
    category: "Real Weddings",
    date: "February 2026",
    readTime: "12 min",
    title: "Real Wedding — Elena & Marco at Villa del Balbianello",
    subtitle: "Three days on Lake Como, cypress lanterns, and the most romantic first dance we've ever witnessed.",
    image: "https://cdn.sanity.io/images/xfzlvuer/production/8951888ee19c400b63d169efa4c9ee18bb37ee13-1280x1600.jpg?w=1600&q=80&auto=format",
    imageAlt: "Elena and Marco real wedding at Villa del Balbianello, Lake Como",
    paragraphs: [
      "There is a question we ask every couple in our first meeting: what do you want your guests to feel when they walk in? The answers are almost never about a centerpiece or a color. They are about a memory, a holiday, a grandparent's kitchen, a song that played in a car twenty years ago.",
      "We build celebrations backwards from those answers. The flowers come later, and they come naturally, because the feeling has already been decided. A wedding designed in this order — feeling first, finishes second — has a quality that no amount of budget can buy: it feels inevitable."
    ],
    sections: [
      {
        heading: "On restraint",
        text: "The temptation, especially with a generous budget, is to fill every surface. But the most luxurious weddings we have ever designed have all shared one quality: they breathe. There are pauses. There are empty corners."
      },
      {
        quote: "The most luxurious thing in any room is space."
      },
      {
        heading: "On trust",
        text: "We accept only twelve weddings per year. It means that when you hire us, you receive the entire attention of the studio. You also receive our honesty: if a vendor isn't right, we will say so."
      }
    ]
  },
  "planning-a-destination-wedding-without-losing-yourself": {
    category: "Guides",
    date: "April 2026",
    readTime: "8 min",
    title: "Planning a Destination Wedding Without Losing Yourself",
    subtitle: "A modern guide to keeping your peace and creative balance while planning across scenic international borders.",
    image: "https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Destination wedding altar overview overlooking the ocean sunset",
    paragraphs: [
      "Planning a celebration from thousands of miles away can feel abstract. The key is establishing local production roots early. Trusting regional textures, native floral landscapes, and seasonal Mediterranean lighting structures preserves your peace.",
      "Rather than forcing external materials onto a pristine landscape, let the geography direct your finishes. It creates a seamless narrative loop for your arriving guests."
    ],
    sections: [
      {
        heading: "Logistics over looks",
        text: "Design components are empty without functional structural backup. Micro-coordinate guest transport structures and culinary timing metrics before curating tabletop selections."
      }
    ]
  },
  "a-brides-letter-to-herself-the-morning-of": {
    category: "Inspiration",
    date: "June 2026",
    readTime: "5 min",
    title: "A Bride's Letter to Herself the Morning Of",
    subtitle: "A meditative moment of complete stillness captured before the celebratory chaos gracefully unfolds.",
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Bride preparing in morning sunlight wearing silk attire",
    paragraphs: [
      "The quiet moments right before stepping into your dress are incredibly fleeting. This visual and written journal study details the luxury of taking just fifteen solitary minutes alone with your own morning thoughts.",
      "Write to remember who you were right before this threshold. Keep the sentence structures raw, genuine, and close to your heart."
    ],
    sections: [
      {
        quote: "Savor the quiet baseline before the symphony starts."
      }
    ]
  }
};

const JournalDetails = () => {
  const { slug } = useParams<{ slug?: keyof typeof journalDatabase }>(); // 2. Grabs the route parameters from the URL slug
  const serifStyle = {
    fontFamily: '"Cormorant Garamond", serif',
  };

  // 3. Match URL to dataset, fallback to Elena & Marco if no slug exists yet
  const article = slug && journalDatabase[slug]
    ? journalDatabase[slug]
    : journalDatabase["real-wedding-elena-marco"];

  return (
    <main className="bg-[#FAF8F5] text-[#3B2A24] min-h-screen selection:bg-[#D4B06A]/20 selection:text-[#3B2A24]">
      
      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-6 pt-24 pb-12 text-center md:pt-32 md:pb-16">
        <Link 
          to="/journal" 
          className="uppercase tracking-[4px] text-xs font-light text-[#A89276] hover:text-[#3B2A24] transition-colors duration-300"
        >
          ← The Journal
        </Link>

        <p className="text-xs uppercase tracking-[3px] text-[#A89276] mt-8 mb-4">
          {article.category} · {article.date} · {article.readTime}
        </p>

        <h1 
          style={serifStyle}
          className="text-4xl md:text-6xl font-light leading-tight text-[#3B2A24] max-w-3xl mx-auto"
        >
          {article.title}
        </h1>

        <p className="text-base md:text-lg text-[#706053] font-light max-w-xl mx-auto mt-6 leading-relaxed italic">
          {article.subtitle}
        </p>
      </header>

      {/* Dynamic Featured Hero Image Container */}
      <div className="max-w-5xl mx-auto px-0 md:px-6 mb-16 md:mb-24">
        <div className="aspect-[4/5] md:aspect-[16/10] overflow-hidden bg-stone-200 shadow-sm">
          <img 
            alt={article.imageAlt} 
            src={article.image} 
            className="w-full h-full object-cover object-[center_40%] hover:scale-[1.02] transition-transform duration-[3000ms] ease-out"
          />
        </div>
      </div>

      {/* Dynamic Article Body Content */}
      <article className="max-w-2xl mx-auto px-6 text-base md:text-lg font-light leading-relaxed text-[#54463C] space-y-8 pb-24">
        {article.paragraphs.map((p, index) => (
          <p key={index}>{p}</p>
        ))}

        {article.sections?.map((section, index) => {
  // 1. Check if it's a quote block
  if ('quote' in section && section.quote) {
    return (
      <blockquote 
        key={index} 
        className="border-l-2 border-[#D4B06A] pl-6 my-10 py-1 italic text-xl md:text-2xl text-[#3B2A24] font-serif tracking-wide bg-white/40 shadow-sm rounded-r p-4"
      >
        &ldquo;{section.quote}&rdquo;
      </blockquote>
    );
  }

  // 2. TypeScript now safely knows this must be a heading/text block
  if ('heading' in section && 'text' in section) {
    return (
      <div key={index} className="space-y-4">
        <h2 
          style={serifStyle}
          className="text-2xl md:text-3xl text-[#3B2A24] pt-6 font-normal tracking-wide"
        >
          {section.heading}
        </h2>
        <p>{section.text}</p>
      </div>
    );
  }

  return null;
})}

        {/* Share Section */}
        <div className="border-t border-stone-200 pt-12 mt-16 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-xs uppercase tracking-[3px] text-[#A89276]">
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
        </div>
      </article>

      {/* Leave a Thought Section */}
      <LeaveAThought />

      {/* Bottom Continue Reading Component Section */}
      <ContinueReading />
      
    </main>
  );
};

export default JournalDetails;