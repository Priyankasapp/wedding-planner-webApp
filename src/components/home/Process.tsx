const process = [
  {
    number: "I",
    title: "Discovery",
    description:
      "An unhurried conversation to learn your story, taste, and dream.",
  },
  {
    number: "II",
    title: "Design",
    description:
      "Moodboards, palette, paper goods, and a full creative direction.",
  },
  {
    number: "III",
    title: "Curation",
    description:
      "We assemble the right vendors, venues, and craftspeople for you.",
  },
  {
    number: "IV",
    title: "Production",
    description:
      "Detailed run-of-show, rehearsals, and on-site orchestration.",
  },
  {
    number: "V",
    title: "Celebration",
    description:
      "You are present. We hold every thread so you don't have to.",
  },
];

const Process = () => {
  return (
    <section className="bg-[#F8F6F2] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-xs text-[#C6A15B]">
            The Process
          </p>

          <h2 className="font-serif text-4xl md:text-6xl text-[#3B2A24] font-light mt-5">
            Five movements, gently composed.
          </h2>

        </div>

        {/* Timeline */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 border-y border-[#D8D0C8]">

          {process.map((step, index) => (

            <div
              key={index}
              className="
                group
                p-8
                last:border-r-0
                hover:bg-[#F2EEE8]
                transition-all
                duration-300
              "
            >

              <i className="
                text-[#C6A15B]
                font-serif
                text-3xl
              ">
                {step.number}
              </i>

              <h3 className="
                font-serif
                text-2xl
                text-[#3B2A24]
                mt-6
              ">
                {step.title}
              </h3>

              <p className="
                mt-5
                text-[#6E615A]
                leading-7
              ">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Process;