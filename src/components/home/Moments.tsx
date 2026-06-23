import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import img1 from "../../assets/images/photo_2.jpg";
import img2 from "../../assets/images/photo_5.jpg";
import img3 from "../../assets/images/photo_3.jpg";
import img4 from "../../assets/images/photo_6.jpg";
import img5 from "../../assets/images/photo_1.jpg";
import img6 from "../../assets/images/photo_4.jpg";
import img7 from "../../assets/images/photo_10.jpg";
import img8 from "../../assets/images/photo_11.jpg";

const moments = [
  {
    image:  img1,
    alt: "Bride holding a bouquet during wedding preparations",
  },
  {
    image: img2,
    alt: "Wedding reception table styled with candles and florals",
  },
  {
    image: img3,
    alt: "Couple sharing a quiet moment during their celebration",
  },
   {
    image: img4,
    alt: "Elegant bridal portrait in natural light",
  },
   {
    image: img5,
    alt: "Wedding ceremony set within a romantic venue",
  },
   {
    image: img6,
     alt: "Guests gathered during an outdoor wedding reception",
  },
  {
    image: img7,
    alt: "Editorial wedding detail featuring florals and décor",
  },
  {
    image: img8,
    alt: "Newlyweds celebrating together after the ceremony",
  },
 
];

const Moments = () => {
  // FIX: Explicitly type the state array as number[] instead of letting it infer never[]
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Typography guidelines configuration
  const serifStyle = { 
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300 
  };

  const sansStyle = { 
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 300
  };

  // Observer for header element
  useEffect(() => {
    if (!headerRef.current) return;

    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    headerObserver.observe(headerRef.current);
    return () => headerObserver.disconnect();
  }, []);

  // Observer for gallery images items
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // FIX: Cast entry.target as HTMLElement to access the .dataset map object
            const targetEl = entry.target as HTMLElement;
            const index = parseInt(targetEl.dataset.index || "0", 10);
            setVisibleImages(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const imageElements = document.querySelectorAll('[data-image]');
    imageElements.forEach((el) => observer.observe(el));

    return () => {
      imageElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // FIX: Explicitly give 'index' a number parameter type definition
  const getAnimationClass = (index: number): string => {
    if (!visibleImages.includes(index)) {
      return 'opacity-0 translate-y-12 scale-95';
    }
    return 'opacity-100 translate-y-0 scale-100';
  };

  return (
    <section ref={sectionRef} className="bg-[#FAF6EE] py-24 lg:py-32 text-[#2B2623]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header Area */}
        <div 
          ref={headerRef}
          className={`
            flex flex-col lg:flex-row lg:justify-between lg:items-end mb-20
            transition-all duration-1000 ease-out
            ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
          `}
        >
          <div>
            <p 
              style={{ ...sansStyle, fontWeight: 400 }}
              className="uppercase tracking-[0.25em] text-xs text-[#8B6A2F]"
            >
              — Moments
            </p>
             

              <h2
              style={{...serifStyle}}
               className="display text-5xl md:text:6xl mt-4">
                <span className="block">From the lens.</span>
              </h2>
          </div>

         
          <Link
            to="/"
            style={sansStyle}
            className="
             text-xs
tracking-[0.25em] uppercase border-b border-forground pb-1 hover:text-gold hover:border-gold transition-colors

            "
          >
            Follow on Instagram 
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {moments.map((moment, index) => (
            <div
              key={index}
              data-image
              data-index={index}
              className={`
                relative overflow-hidden group rounded-sm shadow-sm
                transition-all duration-700 ease-out
                ${index % 2 !== 0 ? "md:pt-16" : ""}
                ${getAnimationClass(index)}
              `}
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={moment.image}
                  alt={moment.alt}
                  className="
                    w-full
                    h-[240px]
                    md:h-[340px]
                    object-cover
                    object-center
                    transition-transform
                    duration-1000
                    ease-out
                    group-hover:scale-105
                  "
                />
                
                {/* Subtle refined overlay tint */}
                <div className="
                  absolute inset-0
                  bg-[#2B2623]/0
                  transition-colors
                  duration-300
                  group-hover:bg-[#2B2623]/[0.03]
                  pointer-events-none
                " />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Moments;