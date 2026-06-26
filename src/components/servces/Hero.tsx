const Hero = () => {
  return (
    <section className="bg-[#fdfcf5] pt-40 pb-24"> 
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div style={{ opacity: 1, transform: 'none' }}>
         
          <p className="font-sans text-[11px] font-normal uppercase tracking-[0.35em] text-[#b89154] mb-7">
            — Services
          </p>

          <h1 className="mt-6 max-w-4xl font-serif  text-6xl font-light leading-[1.05] text-[#1a1a1a] md:text-8xl">
            <span className="block">
              From the first{" "}
              <em className="font-serif italic font-normal text-[#b89154]">
                spark
              </em>{" "}
              to the last dance.
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;