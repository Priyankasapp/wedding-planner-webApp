
import { motion } from "framer-motion";

export interface TimelineItem {
  time:string;
  title:string;
  description:string;
}

interface ProjectTimelineProps {
  items:TimelineItem[];
}


const ProjectTimelineSection = ({items}:ProjectTimelineProps) => {
   const serifStyle = {
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300,
  };

  const sansStyle = {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 300,
  };

  return (
     <section className="bg-champagne/40 py-32">
       <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div >
          <p className="text-[12px] tracking-[0.25em] text-[#C2A677] uppercase  flex items-center gap-2 mb-4">— The day</p>
          <h2
          style={serifStyle} 
          className="display text-5xl md:text-6xl mt-4">A timeline.</h2>
        </div>
        {/* RIGHT SIDE  */}
         <div className="mt-20 mx-auto max-w-3xl">
          {/* {items.map} */}


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
                    className="text-base md:text-2xl  text-[#C2A677]"
                  >
                    {item.time}
                  </span>
                </div>

                {/* Details text context column */}
                <div className="col-span-9 md:col-span-10 space-y-1.5">
                 <h3
  style={serifStyle}
  className="text-base md:text-2xl text-[#2B2623] font-normal tracking-wide truncate"
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
            
         </div>
       </div>
      </section>
  )
}

export default ProjectTimelineSection