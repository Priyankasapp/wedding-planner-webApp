const PortfolioQuote = () => {
  return (
    <section className="bg-espresso py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <blockquote
          className="
            mx-auto
            max-w-4xl
            font-serif
            italic
            text-white
            text-2xl
            md:text-4xl
            font-light
            leading-[1.3]
          "
          style={{
            fontFamily: '"Cormorant Garamond", serif',
          }}
        >
          “Maison Lior turned our wedding into a piece of art. Every detail felt
          considered, every moment intentional. We still receive notes from
          guests about it.”
        </blockquote>

        <p className="mt-10 text-xs md:text-sm uppercase tracking-[0.35em] text-[#C9A86A]">
          — Elena & Marco
        </p>
      </div>
    </section>
  );
};

export default PortfolioQuote;