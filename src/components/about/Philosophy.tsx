import { useEffect, useRef, useState } from 'react';
import SectionKicker from '../sections/SectionKicker'; // Adjust path based on your folder structure

const Philosophy = () => {
  const serifStyle = { 
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300 
  };

  const sansStyle = { 
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 300
  };

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-[#f7f2f0]  py-24 lg:py-36 flex flex-col justify-center text-[#2B2623] px-6 md:px-16 overflow-hidden select-none"
    >
      {/* Container wrapper matching luxury width metrics */}
      <div className='max-w-[1400px] mx-auto w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start'>
            
          {/* Left Column: Heading Block (Spans 5 of 12 columns) */}
          <div 
            className={`lg:col-span-5 transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            {/* Reusable SectionKicker component */}
            <SectionKicker title="PHILOSOPHY" className="mb-6" />

            <h2
             
              className="font-serif text-3xl md:text-3xl lg:text-3xl tracking-wide text-[#2B2623] leading-tight font-light"
            >
              What we believe.
            </h2>
          </div>

          {/* Right Column: Key Pillars List (Spans 7 of 12 columns) */}
          <div 
            className={`lg:col-span-7 space-y-10 lg:pt-16 transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Pillar 1 */}
            <div className="group">
              <h3   
                style={{ ...serifStyle, fontStyle: "italic" }} 
                className="text-2xl md:text-3xl text-[#2B2623] tracking-wide mb-3"
              >
                Restraint over spectacle
              </h3>
              <p 
               
                className='text-[#2B2623]/70 text-base md:text-base leading-relaxed max-w-[580px] font-light font-sans'
              >
                The most luxurious thing in a room is space. We design with breathing room — empty chairs, quiet corners, candles allowed to burn down.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="group">
              <h3   
                style={{ ...serifStyle, fontStyle: "italic" }} 
                className="text-2xl md:text-3xl text-[#2B2623] tracking-wide mb-3"
              >
                Couples first, always
              </h3>
              <p 
                style={sansStyle}
                className='text-[#2B2623]/70 text-base md:text-3xl leading-relaxed max-w-[580px] font-normal font-light'
              >
                Our work is never about us. It is shaped entirely around the two people getting married, and the world they want to gather around them.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="group">
              <h3   
                style={{ ...serifStyle, fontStyle: "italic" }} 
                className="text-2xl md:text-3xl text-[#2B2623] tracking-wide mb-3"
              >
                Beauty earned slowly
              </h3>
              <p 
                style={sansStyle}
                className='text-[#2B2623]/70 text-base md:text-3xl leading-relaxed max-w-[580px] font-normal font-light'
              >
                We resist the trend cycle. The aesthetic choices we make are built to feel as right in twenty years as they do on the day.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;