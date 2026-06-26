import { useEffect, useRef, useState } from "react";

interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

const stats: StatItem[] = [
  { label: "Weddings Designed", value: 240, suffix: "+" },
  { label: "Countries", value: 32, suffix: "" },
  { label: "Years of Craft", value: 18, suffix: "" },
  { label: "Couples Referred Us", value: 99, suffix: "%" },
];

const Stats = () => {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            stats.forEach((stat, index) => {
              const duration = 2000; 
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
      { threshold: 0.2 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [hasAnimated]);

  return (
    <section 
      ref={sectionRef}
      className="bg-espresso text-ivory py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-16 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-start" 
            >
              {/* Scaled down numbers to match the image */}
              <p
               className="font-serif text-6xl md:text-7xl font-light tracking-wide text-[#FAF6EE] leading-none"
                style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300 }}
              >
                {counts[index]}
                
                <span className="font-light italic ml-0.5 text-4xl md:text-5xl font-light italic ml-1">
                  {stat.suffix}
                </span>
              </p>

              {/* Smaller labels with wide tracking */}
              <p 
                className="mt-6 uppercase tracking-[0.35em] text-[11px]  font-medium leading-relaxed font-sans text-[#b0935f]"
                style={{ fontFamily: '"Montserrat", sans-serif' }}
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