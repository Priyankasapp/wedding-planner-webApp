const Intro = () => {
  return (
    <section className="bg-[#F8F6F2] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left */}

          <div className="lg:col-span-3">

            <p className="
              uppercase
              tracking-[8px]
              text-xs
              text-[#C6A15B]
            ">
              — A Few Words
            </p>

          </div>

          {/* Right */}

          <div className="lg:col-span-9">

            <h2 className="
              font-serif
              text-[#3B2A24]
              text-3xl
              md:text-5xl
              lg:text-6xl
              leading-[1.2]
              font-light
            ">
              We design a dozen weddings each year —
              no more — for couples who value craft
              over spectacle, and presence over
              performance.
            </h2>

            <p className="
              mt-10
              text-[#7B6B63]
              italic
              text-lg
            ">
             <span>—— </span> Lior Amari, Founder
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Intro;