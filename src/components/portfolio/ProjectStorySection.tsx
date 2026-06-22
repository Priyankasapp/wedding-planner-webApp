import { motion } from "framer-motion";

interface ProjectStoryProps {
  tagline: string;
  storyText: string;
  venue: string;
  guests: string;
  duration: string;
}

// FIX: Passed the props destructuring directly into the component parameters correctly
const ProjectStorySection = ({
  tagline,
  storyText,
  venue,
  guests,
  duration,
}: ProjectStoryProps) => {
  const serifStyle = {
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300,
  };

  const sansStyle = {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 300,
  };

  return (
    <section className="bg-[#FAF6EE] text-[#2B2623] py-20 w-full selection:bg-[#C2A677]/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-12 xl:gap-x-24 items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          
          {/* LEFT: Section Label Tag */}
          <div className="lg:col-span-3 lg:pt-2">
            <p 
              style={sansStyle} 
              className="text-[10px] tracking-[0.25em] text-[#C2A677] uppercase font-medium flex items-center gap-2"
            >
              <span className="inline-block w-4 h-px bg-[#8B6B2E]"></span>
              The Story
            </p>
          </div>

          {/* RIGHT: Main Editorial Copy Blocks & Spec Grid Row */}
          <div className="lg:col-span-9 flex flex-col space-y-12">
            
            {/* Elegant Main Large Italic Tagline */}
            <h2 
              style={{ ...serifStyle, fontStyle: "italic" }} 
              className="text-3xl md:text-4xl lg:text-5xl text-[#2B2623] leading-snug tracking-wide max-w-4xl"
            >
              {tagline}
            </h2>

            {/* Detailed Body Copy Narrative */}
            <p 
              style={sansStyle} 
              className="text-[#795757] text-sm md:text-base leading-relaxed tracking-wide font-light max-w-3xl opacity-90"
            >
              {storyText}
            </p>

            {/* Micro Thin Divider Separator Line */}
            <hr className="border-[#D8D0C8] border-t w-full pt-4" />

            {/* Triple Columns Metadata Details Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 sm:gap-x-12 pt-4 w-full">
              
              {/* Venue column */}
              <div className="space-y-2">
                <h4 style={sansStyle} className="text-[10px] tracking-[0.2em] text-[#C2A677] uppercase font-medium">
                  Venue
                </h4>
                <p style={serifStyle} className="text-xl md:text-2xl text-[#2B2623] tracking-wide font-light">
                  {venue}
                </p>
              </div>

              {/* Guests column */}
              <div className="space-y-2">
                <h4 style={sansStyle} className="text-[10px] tracking-[0.2em] text-[#C2A677] uppercase font-medium">
                  Guests
                </h4>
                <p style={{ ...serifStyle, fontStyle: "italic" }} className="text-xl md:text-2xl text-[#2B2623] tracking-wide font-light">
                  {guests}
                </p>
              </div>

              {/* Duration column */}
              <div className="space-y-2">
                <h4 style={sansStyle} className="text-[10px] tracking-[0.2em] text-[#C2A677] uppercase font-medium">
                  Duration
                </h4>
                <p style={{ ...serifStyle, fontStyle: "italic" }} className="text-xl md:text-2xl text-[#2B2623] tracking-wide font-light">
                  {duration}
                </p>
              </div>

            </div>

          </div>

        </motion.div>
        
      </div>
    </section>
  );
};

export default ProjectStorySection;