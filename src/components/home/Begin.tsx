import { Link } from "react-router-dom";

const Begin = () => {
  return (
    <section className="bg-[#F8F6F2] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        <div className="border-y border-[#D9D1C8] py-16">

          <div className="grid lg:grid-cols-12 gap-12">

            {/* Left */}

            <div className="lg:col-span-6">

              <p className="uppercase tracking-[8px] text-xs text-[#C6A15B] mb-6">
                Begin
              </p>

              <h2 className="font-serif text-[#3B2A24] text-4xl md:text-6xl font-light leading-tight">
                When you're ready,
                <br />
                we'd love to listen.
              </h2>

            </div>

            {/* Right */}

            <div className="lg:col-span-6 flex flex-col lg:items-start justify-center">

              <p className="text-[#6E615A] text-lg leading-8 max-w-md">
                We accept a small number of weddings each year.
                Tell us about yours.
              </p>

              <Link
                to="/contact"
                className="
                  mt-10
                  inline-flex
                  items-center
                  justify-center
                  px-10
                  py-5
                  border
                  border-[#43342F]
                  uppercase
                  tracking-[5px]
                  text-xs
                  text-[#43342F]
                  hover:bg-[#43342F]
                  hover:text-white
                  transition
                "
              >
                Make an Enquiry
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Begin;