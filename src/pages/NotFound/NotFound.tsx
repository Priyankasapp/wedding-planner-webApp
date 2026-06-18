import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#F8F6F2] flex items-center justify-center px-6">
      <section className="max-w-xl text-center">
        {/* Subtitle */}
        <p className="mb-8 text-xs md:text-sm uppercase tracking-[8px] text-[#C9A97E]">
          Lost in the Garden
        </p>

        {/* 404 */}
       <div className="flex items-end justify-center">
  <span className="font-serif text-[90px] md:text-[70px] leading-none text-[#2F2522] mx-2">
    4
  </span>

  <span className="font-serif text-[90px] md:text-[60px] leading-none text-[#2F2522] mx-1">
    <sup>0</sup>
  </span>

  

  <span className="font-serif text-[90px] md:text-[70px] leading-none text-[#2F2522] mx-2">
    4
  </span>
</div>

        {/* Description */}
        <p className="mt-8 text-base md:text-lg text-[#7A7069] leading-relaxed">
          The page you're looking for has wandered off into another
          celebration.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block mt-12 border border-[#2F2522] px-10 py-4 text-xs uppercase tracking-[3px] text-[#2F2522] transition-all duration-300 hover:bg-[#2F2522] hover:text-white"
        >
          Return Home
        </Link>
      </section>
    </main>
  );
};

export default NotFound;