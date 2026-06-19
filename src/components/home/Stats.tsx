import { useEffect, useRef, useState } from "react";

interface StatItem {
  number: string;
  label: string;
  value: number;
  suffix: string;
}

const stats: StatItem[] = [
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
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  // FIX: Type the ref explicitly to satisfy TS signatures on elements
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const serifStyle = { 
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300 
  };

  const sansStyle = { 
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 300
  };

  useEffect(() => {
    // FIX: Snapshot the current ref to an internal mutable variable to satisfy react-hooks/exhaustive-deps
    const currentSection = sectionRef.current;

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

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      // FIX: Clean up using your local variable snapshot reference safely
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [hasAnimated]);

  return (
    <section 
      ref={sectionRef}
      className="bg-[#2B2623] text-[#FAF6EE] py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-x-0 lg:divide-y-0 lg:divide-x divide-[#FAF6EE]/10 border-y border-[#FAF6EE]/10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="py-12 text-center flex flex-col justify-center items-center px-4"
            >
              <h2 
                style={serifStyle}
                className="text-5xl lg:text-7xl font-light tracking-wide text-[#E2D4BF]"
              >
                {counts[index]}{stat.suffix}
              </h2>

              <p 
                style={sansStyle}
                className="mt-4 uppercase tracking-[0.2em] text-xs text-[#FAF6EE]/70 leading-6 text-center"
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;