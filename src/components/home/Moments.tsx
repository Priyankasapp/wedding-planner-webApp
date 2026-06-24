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
  { image: img1, alt: "Wedding ceremony floral arch walkway" },
  { image: img2, alt: "Bride with floating veil by the ocean cliffside" },
  { image: img3, alt: "Wedding reception table styled with candles and florals" },
  { image: img4, alt: "Elegant bridal portrait holding pink bouquet" },
  { image: img5, alt: "Indoor wedding reception dinner setting under market lights" },
  { image: img6, alt: "Newlyweds dancing intimately under warm fairy lights" },
  { image: img7, alt: "Editorial bridal morning portrait preparation in robe" },
  { image: img8, alt: "Bougainvillea floral wedding arch setup outside" },
];

const Moments = () => {
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  
  const headerRef = useRef<HTMLDivElement>(null);

  const serifStyle = { fontFamily: '"Cormorant Garamond", serif', fontWeight: 300 };
  const sansStyle = { fontFamily: '"Montserrat", sans-serif', fontWeight: 300 };

  useEffect(() => {
    if (!headerRef.current) return;
    const headerObserver = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.2 }
    );
    headerObserver.observe(headerRef.current);
    return () => headerObserver.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetEl = entry.target as HTMLElement;
            const index = parseInt(targetEl.dataset.index || "0", 10);
            setVisibleImages(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.05 }
    );

    const imageElements = document.querySelectorAll('[data-image]');
    imageElements.forEach((el) => observer.observe(el));
    return () => imageElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="bg-[#FAF6EE] py-24 lg:py-32 text-[#2B2623] select-none">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header Area */}
        <div 
          ref={headerRef}
          className={`flex flex-col sm:flex-row sm:justify-between sm:items-end mb-16 transition-all duration-1000 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div>
            <p style={{ ...sansStyle, fontWeight: 400 }} className="uppercase tracking-[0.3em] text-[10px] sm:text-xs text-[#C2A677]">
              — Moments
            </p>
            <h2 style={serifStyle} className="text-4xl sm:text-5xl md:text-6xl mt-4 text-[#2B2623] tracking-wide">
              From the lens.
            </h2>
          </div>

          <Link
            to="/"
            style={sansStyle}
            className="group text-[10px] sm:text-xs tracking-[0.25em] uppercase border-b border-[#2B2623]/30 pb-1 mt-6 sm:mt-0 hover:text-[#C2A677] hover:border-[#C2A677] transition-all inline-flex items-center gap-1 self-start sm:self-auto"
          >
            Follow on Instagram 
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Asymmetric Luxury Grid Layout mimicking Screenshot exactly */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 items-start">
          
          {/* Column 1: Holds image 0 as a tall banner, and image 7 underneath it */}
          <div className="flex flex-col gap-4 lg:gap-6 md:col-span-1 col-span-1">
            {moments.filter((_, i) => i === 0 || i === 7).map((moment, idx) => {
              const realIndex = idx === 0 ? 0 : 7;
              return (
                <div
                  key={realIndex} data-image data-index={realIndex}
                  className={`relative overflow-hidden transition-all duration-1000 ease-out ${
                    visibleImages.includes(realIndex) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-98'
                  }`}
                >
                  <img
                    src={moment.image} alt={moment.alt}
                    className={`w-full object-cover object-center transition-transform duration-1000 group-hover:scale-102 ${
                      realIndex === 0 ? 'h-[420px] md:h-[450px]' : 'h-[200px] md:h-[300px]'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Column 2: Holds image 1 (Square-ish top) and image 4 (Square-ish bottom) */}
          <div className="flex flex-col gap-4 lg:gap-6 md:col-span-1 col-span-1">
            {moments.filter((_, i) => i === 1 || i === 4).map((moment, idx) => {
              const realIndex = idx === 0 ? 1 : 4;
              return (
                <div
                  key={realIndex} data-image data-index={realIndex}
                  className={`relative overflow-hidden transition-all duration-1000 ease-out ${
                    visibleImages.includes(realIndex) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-98'
                  }`}
                >
                  <img
                    src={moment.image} alt={moment.alt}
                    className="w-full h-[200px] md:h-[300px] object-cover object-center"
                  />
                </div>
              );
            })}
          </div>

          {/* Column 3: Holds image 2 (Square-ish top) and image 5 (Tall dramatic vertical bottom) */}
          <div className="flex flex-col gap-4 lg:gap-6 md:col-span-1 col-span-1">
            {moments.filter((_, i) => i === 2 || i === 5).map((moment, idx) => {
              const realIndex = idx === 0 ? 2 : 5;
              return (
                <div
                  key={realIndex} data-image data-index={realIndex}
                  className={`relative overflow-hidden transition-all duration-1000 ease-out ${
                    visibleImages.includes(realIndex) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-98'
                  }`}
                >
                  <img
                    src={moment.image} alt={moment.alt}
                    className={`w-full object-cover object-center ${
                      realIndex === 5 ? 'h-[250px] md:h-[450px]' : 'h-[200px] md:h-[300px]'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Column 4: Holds image 3 (Landscape/Square top) and image 6 (Vertical bottom) */}
          <div className="flex flex-col gap-4 lg:gap-6 md:col-span-1 col-span-1">
            {moments.filter((_, i) => i === 3 || i === 6).map((moment, idx) => {
              const realIndex = idx === 0 ? 3 : 6;
              return (
                <div
                  key={realIndex} data-image data-index={realIndex}
                  className={`relative overflow-hidden transition-all duration-1000 ease-out ${
                    visibleImages.includes(realIndex) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-98'
                  }`}
                >
                  <img
                    src={moment.image} alt={moment.alt}
                    className={`w-full object-cover object-center ${
                      realIndex === 6 ? 'h-[230px] md:h-[380px]' : 'h-[200px] md:h-[300px]'
                    }`}
                  />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Moments;