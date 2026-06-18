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
  const [visibleImages, setVisibleImages] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
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

  const getAnimationClass = (index) => {
    if (!visibleImages.includes(index)) {
      return 'opacity-0 translate-y-12 scale-95';
    }
    
    // Different animations for different positions
    const position = index % 4;
    switch(position) {
      case 0:
        return 'opacity-100 translate-y-0 scale-100';
      case 1:
        return 'opacity-100 translate-y-0 scale-100';
      case 2:
        return 'opacity-100 translate-y-0 scale-100';
      case 3:
        return 'opacity-100 translate-y-0 scale-100';
      default:
        return 'opacity-100 translate-y-0 scale-100';
    }
  };

  return (
    <section ref={sectionRef} className="bg-[#F8F6F2] py-24 lg:py-32">

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header with slide-up animation */}
        <div 
          className="
            flex flex-col lg:flex-row lg:justify-between lg:items-end mb-16
            transition-all duration-800 ease-out
            opacity-0 -translate-y-4
            [&.visible]:opacity-100 [&.visible]:translate-y-0
          "
          ref={(el) => {
            if (el) {
              const observer = new IntersectionObserver(
                ([entry]) => {
                  if (entry.isIntersecting) {
                    el.classList.add('visible');
                  }
                },
                { threshold: 0.3 }
              );
              observer.observe(el);
              el._observer = observer;
              return () => {
                if (el._observer) {
                  el._observer.disconnect();
                }
              };
            }
          }}
        >
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
              group
            "
          >
            Follow on Instagram 
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Gallery with staggered animations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {moments.map((image, index) => (
            <div
              key={index}
              data-image
              data-index={index}
              className={`
                relative overflow-hidden
                transition-all duration-700 ease-out
                ${index % 2 !== 0 ? "md:pt-20" : ""}
                ${getAnimationClass(index)}
              `}
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image}
                  alt="Wedding moment"
                  className="
                    w-full
                    h-[220px]
                    md:h-[280px]
                    object-cover
                    transition-all duration-700 ease-out
                    hover:scale-110
                    group-hover:brightness-75
                  "
                />
                
                {/* Overlay effect on hover */}
                <div className="
                  absolute inset-0
                  bg-black/0
                  transition-all duration-500
                  hover:bg-black/20
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