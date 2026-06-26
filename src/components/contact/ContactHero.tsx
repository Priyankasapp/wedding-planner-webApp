import React from 'react';

export const EnquiryHero: React.FC = () => {
  return (
    <section className="pt-40 pb-20 bg-[var(--ivory)] w-full">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-end">
        
        {/* Left Column - Heading */}
        <div 
          className="lg:col-span-8 opacity-100 transform-none"
        >
<p className="font-sans uppercase font-normal tracking-[0.35em] text-[var(--gold)] mb-7 text-[0.7rem]">
      — Enquiries
    </p>
<h1 className="text-6xl font-serif md:text-8xl font-light tracking-[-0.02em] leading-[0.95] text-[var(--espresso)]">
  <span className="block">
    We'd{' '}
    <em 
      className="font-serif italic font-normal" 
      style={{ color: 'rgb(184, 145, 84)' }}
    >
      love
    </em>{' '}
    to hear about your day.
  </span>
</h1>
        </div>

        {/* Right Column - Subtext */}
        <div 
          className="lg:col-span-4 opacity-100 transform-none"
        >
          <p className="text-[var(--muted-foreground)] font-light leading-relaxed text-base md:text-lg">
  Tell us a little about yourselves and your wedding. We respond to every 
  enquiry personally, within three days.
</p>
        </div>

      </div>
    </section>
  );
};

export default EnquiryHero;