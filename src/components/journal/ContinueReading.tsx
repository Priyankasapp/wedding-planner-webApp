import { Link } from "react-router-dom";

const ContinueReading = () => {
  const serifStyle = {
    fontFamily: '"Cormorant Garamond", serif',
  };

  // Mock data matching your live layout exactly
  const articles = [
    {
      id: 1,
      category: "Guides",
      title: "Planning a Destination Wedding Without Losing Yourself",
      slug: "planning-a-destination-wedding-without-losing-yourself",
      image: "https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=800&auto=format&fit=crop", // Elegant coastal altar setup
    },
    {
      id: 2,
      category: "Inspiration",
      title: "A Bride's Letter to Herself the Morning Of",
      slug: "a-brides-letter-to-herself-the-morning-of",
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=800&auto=format&fit=crop", // Bridal preparation light
    },
    {
      id: 3,
      category: "Trends",
      title: "The Rise of the Multi-Day Celebration",
      slug: "the-rise-of-the-multi-day-celebration",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop", // Indoor reception banquet under string lights
    },
  ];

  return (
    <section className="bg-[#FAF8F5] py-20 px-6 md:px-12 border-t border-stone-100">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Title */}
        <p className="text-xs uppercase tracking-[4px] text-[#A89276] mb-12">
          — Continue Reading
        </p>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {articles.map((article) => (
            <Link 
              key={article.id} 
              to={`/journal/${article.slug}`}
              className="group block space-y-4"
            >
              {/* Image Container with Custom Aspect Ratio matching the screen */}
              <div className="aspect-[4/5] overflow-hidden bg-stone-200">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.04]"
                />
              </div>

              {/* Text Meta Content */}
              <div className="space-y-2">
                <span className="block text-[11px] uppercase tracking-[3px] text-[#A89276]">
                  {article.category}
                </span>
                <h3 
                  style={serifStyle}
                  className="text-xl md:text-2xl font-light text-[#3B2A24] leading-snug group-hover:text-[#D4B06A] transition-colors duration-300"
                >
                  {article.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContinueReading;