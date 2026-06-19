import { motion } from "framer-motion";

interface ProjectGalleryProps {
  images: string[];
}

const ProjectGallerySection = ({ images }: ProjectGalleryProps) => {
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
        
        {/* Header Section */}
        <div className="mb-12">
          <p 
            style={sansStyle} 
            className="text-[10px] tracking-[0.25em] text-[#C2A677] uppercase font-medium flex items-center gap-2 mb-4"
          >
            <span className="inline-block w-4 h-px bg-[#C2A677]"></span>
            Gallery
          </p>
          <h2 
            style={serifStyle} 
            className="text-4xl md:text-5xl text-[#2B2623] tracking-wide"
          >
            Moments from the weekend.
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="w-full">
          {/* Changed from sm:grid-cols-2 to md:grid-cols-3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
              {images.map((src, index) => {
                let gridClasses = "aspect-[3/4]"; // Default elegant portrait proportion
                
                // Row 1 matches:
                if (index === 0) {
                  gridClasses = "md:col-span-2 aspect-[4/3]"; // First image spans 2 columns (Wide)
                } else if (index === 1) {
                  gridClasses = "md:col-span-1 aspect-[3/4]"; // Second image takes 1 column (Tall)
                } 
                // Row 2 matches (3 individual items):
                else if (index === 2 || index === 3 || index === 4) {
                  gridClasses = "md:col-span-1 aspect-[1/1] sm:aspect-[3/4]"; 
                } 
                // Row 3 matches:
                else if (index === 5) {
                  gridClasses = "md:col-span-2 aspect-[16/10]"; // Wide dancing shot spanning 2 columns
                } else if (index === 6) {
                  gridClasses = "md:col-span-1 aspect-[3/4]"; // Portrait solo window shot next to it
                }
                // Row 4 matches:
                else if (index === 7) {
                  gridClasses = "md:col-span-1 md:col-start-2 aspect-[3/4]"; // Bottom center image
                }

                return (
                  <motion.div
                    key={index}
                    className={`overflow-hidden rounded-xs bg-neutral-100 relative w-full ${gridClasses}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }}
                  >
                    <img
                      src={src}
                      alt={`Gallery moment ${index + 1}`}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </motion.div>
                );
              })}
            </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectGallerySection;