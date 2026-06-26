import React from "react";

export const EnquiryHero: React.FC = () => {
  return (
    <section className="pt-40 pb-20 bg-[var(--ivory)] ">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-1- grid lg:grid-cols-12 gap-12 items-end">
        {/* Left Column - Heading */}
        <div className="lg:col-span-8 opacity-100 transform-none">
          <p className="font-sans uppercase font-normal tracking-[0.35em] text-[var(--gold)] mb-7 text-[0.7rem]">
            — Enquiries
          </p>
          <h1 className=" text-6xl md:text-8xl mt-6 leading-[1.02] tracking-[-0.02em] font-serif font-light ">
            We'd{" "}
            <span className="font-serif italic font-light text-[var(--gold)]">
              love
            </span>{" "}
            to hear about your day.
          </h1>
        </div>

        {/* Right Column - Subtext<p class="text-muted-foreground leading-relaxed"></p> */}
        <div className="lg:col-span-4 opacity-100 transform-none">
          <p className="text-[var(--muted-foreground)] font-light leading-relaxed text-base md:text-lg">
            Tell us a little about yourselves and your wedding. We respond to
            every enquiry personally, within three days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnquiryHero;
