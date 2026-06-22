import { Link } from "react-router-dom";
import gridImg2 from "../../assets/images/photo_5.jpg";
import gridImg3 from "../../assets/images/photo_11.jpg";
import gridImg4 from "../../assets/images/photo_1.jpg";


const ContinueReading = () => {
  const serifStyle = {
    fontFamily: '"Cormorant Garamond", serif',
  };

  // Mock data matching your live layout exactly
  const articles = [
    {
      id: "destination-planning",
      category: "GUIDES",
      title: "Planning a Destination Wedding Without Losing Yourself",
      slug: "planning-a-destination-wedding-without-losing-yourself",
      image:gridImg4,
    },
    {
      id: "elena-marco-real",
      category: "REAL WEDDINGS",
      title: "Real Wedding — Elena & Marco at Villa del Balbianello",
      slug: "real-wedding-elena-marco-at-villa-del-balbianello",
      image: gridImg2,
    },
    {
      id: "brides-letter",
      category: "INSPIRATION",
      title: "A Bride's Letter to Herself the Morning Of",
      slug: "a-brides-letter-to-herself-the-morning-of",
      image:gridImg3,
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