import { useEffect, useRef, useState } from "react";

const stats = [
  {
    number: "240+",
    label: "Weddings Designed",
    value: 240,
    suffix: "+",
  },
  {
    number: "32",
    label: "Countries",
    value: 32,
    suffix: "",
  },
  {
    number: "18",
    label: "Years of Craft",
    value: 18,
    suffix: "",
  },
  {
    number: "99%",
    label: "Couples Referred Us",
    value: 99,
    suffix: "%",
  },
];

const Stats = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate each counter
            stats.forEach((stat, index) => {
              const duration = 2000; // 2 seconds
              const steps = 60;
              const increment = stat.value / steps;
              let current = 0;
              let step = 0;

              const timer = setInterval(() => {
                step++;
                current += increment;
                
                if (step >= steps) {
                  current = stat.value;
                  clearInterval(timer);
                }
                
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.floor(current);
                  return newCounts;
                });
              }, duration / steps);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section 
      ref={sectionRef}
      className="bg-[#3A241F] text-[#F7F1EB] py-24 lg:py-32"
    >
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
                  {counts[index]}{stat.suffix}
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