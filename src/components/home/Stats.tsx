const stats = [
  {
    number: "240+",
    label: "Weddings Designed",
  },
  {
    number: "32",
    label: "Countries",
  },
  {
    number: "18",
    label: "Years of Craft",
  },
  {
    number: "99%",
    label: "Couples Referred Us",
  },
];

const Stats = () => {
  return (
    <section className="bg-[#3A241F] text-[#F7F1EB] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        <div>

          <div className="grid grid-cols-2 lg:grid-cols-4">

            {stats.map((stat, index) => (
              <div
                key={index}
                className="
                  py-12
                  text-center
                  last:border-r-0
                "
              >
                <h2 className="
                  font-serif
                  text-5xl
                  lg:text-6xl
                  font-light
                ">
                  {stat.number}
                </h2>

                <p className="
                  mt-4
                  uppercase
                  tracking-[3px]
                  text-xs
                  text-[#8B7A72]
                  leading-6
                ">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Stats;