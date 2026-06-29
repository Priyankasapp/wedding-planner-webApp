const Hero = () => {
  return (
    <section className="bg-[#fdfcf5] pt-40 pb-24"> 
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div style={{ opacity: 1, transform: 'none' }}>
         
          <p className="font-sans text-[11px] font-normal uppercase tracking-[0.35em] text-[#b89154] mb-7">
            — Services
          </p>

          <h1 className="  text-6xl md:text-8xl mt-6 max-w-4xl leading-[0.95] font-serif"
         
    >

       {/* style={{font-family: var(--font-serif);
    letter-spacing: -.02em;
    font-weight: 300;
    line-height: 1.02;}} */}
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