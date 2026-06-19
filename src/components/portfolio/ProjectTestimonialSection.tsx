import { motion } from "framer-motion";

interface ProjectTestimonialProps {
  quote?: string;
  author?: string;
}

const ProjectTestimonialSection = ({
  quote = "“Maison Lior turned our wedding into a piece of art. Every detail felt considered, every moment intentional. We still receive notes from guests about it.”",
  author = "ELENA & MARCO"
}: ProjectTestimonialProps) => {
  const serifStyle = {
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300,
  };

  const sansStyle = {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 400,
  };

  return (
    <section className="bg-[#2B2623] text-[#FAF6EE] py-32 md:py-40 w-full flex items-center justify-center text-center px-6">
      <motion.div 
        className="max-w-[850px] mx-auto flex flex-col items-center"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Quote Text */}
        <blockquote 
          style={serifStyle} 
          className="text-2xl md:text-3xl lg:text-[34px] leading-relaxed md:leading-relaxed lg:leading-[1.6] text-[#FAF6EE]/90 italic tracking-wide mb-8 md:mb-10"
        >
          {quote}
        </blockquote>

        {/* Divider / Author Attribution */}
        <div 
          style={sansStyle} 
          className="text-[10px] tracking-[0.3em] text-[#C2A677] uppercase flex items-center gap-3"
        >
          <span className="inline-block w-4 h-px bg-[#C2A677]/60"></span>
          {author}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectTestimonialSection;