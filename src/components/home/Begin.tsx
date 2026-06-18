import { Link } from "react-router-dom";

const Begin = () => {
  return (
    <section className="bg-[#3A241F] text-[#F7F1EB] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        <div className=" py-16">

          <div className="grid lg:grid-cols-12 gap-12">

            {/* Left */}

            <div className="lg:col-span-6">

              <p className="uppercase tracking-[8px] text-xs text-[#C6A15B] mb-6">
                Begin
              </p>

              <h2 className="font-serif  text-4xl md:text-6xl font-light leading-tight">
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
                  bg-[#ffffff]
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