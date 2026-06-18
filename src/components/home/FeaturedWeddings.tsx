
import img1 from "../../assets/images/photo_5.jpg";
import img2 from "../../assets/images/photo_4.jpg";
import img3 from "../../assets/images/photo_1.jpg";
import img4 from "../../assets/images/photo_2.jpg";

const weddings = [
  {
    title: "Elena & Marco",
    location: "Lake Como, Italy · 2025",
    description: "A villa romance under cypress light.",
    image: img1,
  },
  {
    title: "Sophia & James",
    location: "Provence, France · 2024",
    description: "Lavender fields and a candlelit chateau.",
    image: img2,
  },
  {
    title: "Amara & Noah",
    location: "Santorini, Greece · 2024",
    description: "Bougainvillea, sea breeze, and gold hour.",
    image: img3,
  },
  {
    title: "Isla & Rhys",
    location: "Cotswolds, England · 2023",
    description: "An English garden in full bloom.",
    image: img4,
  },
];

import { Link } from "react-router-dom";

const FeaturedWeddings = () => {
  return (
    <section className="bg-[#F8F6F2] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-16">

          <div>
            <p className="uppercase tracking-[8px] text-xs text-[#C6A15B]">
              Featured Weddings
            </p>

            <h2 className="font-serif text-4xl md:text-6xl text-[#3B2A24] font-light mt-5">
              Stories worth telling.
            </h2>
          </div>

          <Link
            to="/portfolio"
            className="group mt-8 lg:mt-0 flex items-center gap-4 uppercase tracking-[5px] text-xs"
          >
            <span className="w-10 h-px bg-[#3B2A24] group-hover:w-16 transition-all" />
            The Full Portfolio
          </Link>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {weddings.map((wedding, index) => (

           <div
  key={index}
  className={`group ${
    index % 2 !== 0 ? "md:mt-24" : ""
  }`}
>

              <div className="overflow-hidden">

                <img
                  src={wedding.image}
                  alt={wedding.title}
                  className="
                    w-full
                    h-[500px]
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                  "
                />

              </div>

              <div className="mt-6">

                <p className="text-[#C6A15B] uppercase tracking-[3px] text-xs">
                  {wedding.location}
                </p>

                <h3 className="font-serif text-3xl text-[#3B2A24] mt-3">
                  {wedding.title}
                </h3>

                <p className="mt-4 text-[#6E615A] leading-7">
                  {wedding.description}
                </p>

              </div>

            </div>

          ))}

        </div>
        

      </div>
      <div className="flex justify-center mt-16">
  <Link
    to="/portfolio"
    className="
      group
      inline-flex
      items-center
      gap-3
      px-8
      py-4
      border
      border-[#43342F]
      uppercase
      tracking-[4px]
      text-xs
      text-[#43342F]
      transition-all
      duration-300
      hover:bg-[#43342F]
      hover:text-white
    "
  >
    The Full Portfolio

    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </Link>
</div>
    </section>
  );
};

export default FeaturedWeddings;