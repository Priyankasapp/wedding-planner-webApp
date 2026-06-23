import bgImage from "../../assets/images/photo_3.jpg";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  const serifStyle = {
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300,
  };
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden ">

      {/* Background */}

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      {/* Blur Layer */}

      <div className="absolute inset-0 backdrop-blur-none bg-[#F8F6F2]/70" />

      {/* Content */}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Stars */}

        <div className="flex justify-center gap-2 mb-8">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className="text-gold"
              size={18}
            />
          ))}
        </div>

        {/* Quote */}

        <blockquote 
        
        style={{...serifStyle, fontStyle:"italic"}}
        className="
          
          text-3xl
          md:text-4xl
          leading-[1.1]
          
        ">
          “Maison Lior turned our wedding into a piece of art.
          Every detail felt considered, every moment intentional.
          We still receive notes from guests about it.”
        </blockquote>

        {/* Author */}

        <p className="

          mt-10
          uppercase
          tracking-[5px]
          text-xs
          text-gold
        ">
          — Elena & Marco, Lake Como
        </p>

      </div>

    </section>
  );
};

export default Testimonial;