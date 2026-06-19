import { useEffect, useRef, useState } from 'react'

const Atelier = () => {
 
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
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className='min-h-screen flex items-center bg-[#FAF6EE] text-[#2B2623] px-6 md:px-16 py-20 overflow-hidden'
    >
      <div className='max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center'>
        
        {/* Left Column*/}
        <div 
          className={`transform transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-16 opacity-0'
          }`}
          style={{ transitionDelay: '0ms' }}
        >
          {/* Kicker styled with Montserrat */}
          <p 
            style={{ ...sansStyle, fontWeight: 400 }} 
            className="text-xs md:text-sm tracking-[0.25em] text-[#C2A677] uppercase mb-6"
          >
            — THE ATELIER
          </p>

          {/* Elegant Display Heading */}
          <h1 
            style={serifStyle} 
            className="text-6xl md:text-[5.5rem] leading-[1.05] tracking-wide max-w-lg"
          >
            An atelier of <br />
            <span 
              style={{ ...serifStyle, fontStyle: 'italic' }} 
              className="text-[#B2964D]"
            >
              attentive
            </span> <br />
            design.
          </h1>
        </div>

        {/* Right Column*/}
        <div 
          className={`md:mt-24 transform transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-16 opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <p 
            style={sansStyle} 
            className="text-base md:text-lg leading-relaxed text-[#5A5450] max-w-md"
          >
            Founded in 2008 by Lior Amari in a quiet Parisian courtyard, 
            Maison Lior is built on a single conviction: that a wedding 
            should feel like the truest version of the couple at its center.
          </p>
        </div>
        
      </div>
    </section>
  )
}

export default Atelier