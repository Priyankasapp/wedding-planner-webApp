import { Link } from "react-router-dom";
import img1 from "../../assets/images/photo_2.jpg"
import img2 from "../../assets/images/photo_1.jpg"
import img3 from "../../assets/images/photo_3.jpg"
import img4 from "../../assets/images/photo_4.jpg"
const services = [
  {
    image: img1,
    number: "01",
    title: "Full Wedding Planning",
    description:
      "End-to-end orchestration of every detail, from concept to last dance.",
  },
  {
    image:img2,
    number: "02",
    title: "Destination Weddings",
    description:
      "Curated celebrations in Europe's most romantic estates and coastlines.",
  },
  {
    image:img3,
    number: "03",
    title: "Decor & Floral Styling",
    description:
      "Bespoke design direction with editorial florals and tactile textures.",
  },
  {
    image:img4,
    number: "04",
    title: "Venue Management",
    description:
      "Sourcing, negotiation, and stewardship of unforgettable settings.",
  },
];

const Services = () => {
  return (
    <section className="bg-[#f7f2f0] py-24 lg:py-32">

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Heading */}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">

          <div>

            <p className="uppercase tracking-[8px] text-xs text-[#C6A15B]">
              What We Do
            </p>

            <h2 className="font-serif text-[#3B2A24] text-4xl md:text-6xl font-light mt-5">
              Services tailored to your <br /> story.
            </h2>

          </div>

          <Link
            to="/services"
            className="
              mt-8
              lg:mt-0
              uppercase
              tracking-[5px]
              text-xs
              text-[#3B2A24]
              flex
              items-center
              gap-4
              group
            "
          >
            <span className="w-10 h-px bg-[#3B2A24] group-hover:w-16 transition-all duration-300"></span>

            All Services
          </Link>

        </div>

        {/* Services */}

       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
  {services.map((service) => (
    <div key={service.number} className="group">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-[450px] object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      {/* Number */}
      <p className="mt-5 text-[#C6A15B] tracking-[4px] text-xs">
        {service.number}
      </p>

      {/* Title */}
      <h3 className="mt-3 font-serif text-3xl text-[#3B2A24]">
        {service.title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-[#6E615A] leading-7">
        {service.description}
      </p>

    </div>
  ))}
</div>

      </div>

    </section>
  );
};

export default Services;