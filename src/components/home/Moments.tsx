import { Link } from "react-router-dom";

import img1 from "../../assets/images/photo_2.jpg";
import img2 from "../../assets/images/photo_5.jpg";
import img3 from "../../assets/images/photo_3.jpg";
import img4 from "../../assets/images/photo_6.jpg";
import img5 from "../../assets/images/photo_1.jpg";
import img6 from "../../assets/images/photo_4.jpg";
import img7 from "../../assets/images/photo_10.jpg";
import img8 from "../../assets/images/photo_11.jpg";

const moments = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
];

const Moments = () => {
  return (
    <section className="bg-[#F8F6F2] py-24 lg:py-32">

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-16">

          <div>

            <p className="uppercase tracking-[8px] text-xs text-[#C6A15B]">
              Moments
            </p>

            <h2 className="font-serif text-4xl md:text-6xl text-[#3B2A24] font-light mt-5">
              From the lens.
            </h2>

          </div>

          <Link
            to="/"
            className="
              mt-8
              lg:mt-0
              inline-flex
              items-center
              gap-3
              border
              border-[#43342F]
              px-8
              py-4
              uppercase
              tracking-[4px]
              text-xs
              hover:bg-[#43342F]
              hover:text-white
              transition
            "
          >
            Follow on Instagram →
          </Link>

        </div>

        {/* Gallery */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {moments.map((image, index) => (

            <div
              key={index}
            className={index % 2 !== 0 ? "md:pt-20" : ""}
            >

              <img
                src={image}
                alt="Wedding moment"
                className="
                  w-full
                  h-[220px]
                  md:h-[280px]
                  object-cover
                "
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Moments; 