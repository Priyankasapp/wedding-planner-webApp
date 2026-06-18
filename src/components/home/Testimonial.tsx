import bgImage from "../../assets/images/photo_3.jpg";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">

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

      <div className="absolute inset-0 backdrop-blur-sm bg-black/45" />

      {/* Content */}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Stars */}

        <div className="flex justify-center gap-2 mb-8">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className="text-[#C6A15B]"
              size={18}
            />
          ))}
        </div>

        {/* Quote */}

        <blockquote className="
          font-serif
          text-white
          text-3xl
          md:text-5xl
          leading-[1.4]
          font-light
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
          text-[#E5D5B8]
        ">
          — Elena & Marco, Lake Como
        </p>

      </div>

    </section>
  );
};

export default Testimonial;