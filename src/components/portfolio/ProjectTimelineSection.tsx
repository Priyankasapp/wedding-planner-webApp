import { motion } from "framer-motion";

export interface TimelineItem {
  time: string;
  title: string;
  description: string;
}

interface ProjectTimelineProps {
  items: TimelineItem[];
}

const ProjectTimelineSection = ({ items }: ProjectTimelineProps) => {
  const serifStyle = {
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300,
  };

  const sansStyle = {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 300,
  };

  return (
    <section className="bg-[#FAF6EE] text-[#2B2623] py-24 w-full">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        
        {/* Main Section Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 xl:gap-x-24">
          
          {/* LEFT SIDE: Heading Block */}
          <div className="lg:col-span-4">
            <p 
              style={sansStyle} 
              className="text-[10px] tracking-[0.25em] text-[#C2A677] uppercase font-medium flex items-center gap-2 mb-4"
            >
              <span className="inline-block w-4 h-px bg-[#C2A677]"></span>
              The Day
            </p>
            <h2 
              style={serifStyle} 
              className="text-4xl md:text-5xl text-[#2B2623] tracking-wide"
            >
              A timeline.
            </h2>
          </div>

          {/* RIGHT SIDE: Content List Stack */}
          <div className="lg:col-span-8 w-full flex flex-col">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-12 py-8 border-t border-[#D8D0C8] items-baseline first:border-t"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Time stamps column */}
                <div className="col-span-3 md:col-span-2">
                  <span 
                    style={{ ...serifStyle, fontStyle: "italic" }} 
                    className="text-base md:text-lg text-[#C2A677]"
                  >
                    {item.time}
                  </span>
                </div>

                {/* Details text context column */}
                <div className="col-span-9 md:col-span-10 space-y-1.5">
                  <h3 
                    style={sansStyle} 
                    className="text-sm md:text-base text-[#2B2623] font-normal tracking-wide"
                  >
                    {item.title}
                  </h3>
                  <p 
                    style={sansStyle} 
                    className="text-xs md:text-sm text-[#6E615A] font-light leading-relaxed max-w-xl opacity-90"
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
            
            {/* Fine bottom line to elegantly close the grid list */}
            <div className="border-b border-[#D8D0C8] w-full" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectTimelineSection;