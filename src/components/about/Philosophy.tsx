import { useEffect, useRef, useState } from 'react'
// import Services from "../home/Services"

const Philosophy = () => {
  const serifStyle = { 
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300 
  };

  const sansStyle = { 
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 300
  };

  // State and ref for the scroll animation trigger
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
      className="bg-[#f7f2f0] py-24 lg:py-32 min-h-screen flex flex-col justify-center text-[#2B2623] px-6 md:px-16 overflow-hidden"
    >
      <div className='max-w-6xl mx-auto w-full flex flex-col gap-16 md:gap-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24'>
            
          {/* Left Column: Animates instantly on visibility */}
          <div 
            className={`transform transition-all duration-1000 ease-out ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-16 opacity-0'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            <p 
              style={{ ...sansStyle, fontWeight: 400 }} 
              className="text-xs md:text-sm tracking-[0.25em] text-[#C2A677] uppercase mb-6"
            >
              — Philosophy
            </p>

            <h2
              style={serifStyle} 
              className="text-5xl md:text-[5.5rem] leading-[1.05] tracking-wide max-w-lg"
            >
              What we <br /> believe.
            </h2>
          </div>

          {/* Right Column: Animates with a slight 300ms delay */}
          <div 
            className={`space-y-12 transform transition-all duration-1000 ease-out ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-16 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div>
              <h2   
                style={serifStyle} 
                className="text-3xl leading-[1.05] tracking-wide mb-4 max-w-lg"
              >
                Restraint over spectacle
              </h2>
              <p 
                style={sansStyle} 
                className="text-base md:text-lg leading-relaxed text-[#5A5450] max-w-md"
              >
                The most luxurious thing in a room is space. We design with breathing room — empty chairs, quiet corners, candles allowed to burn down.
              </p>
            </div>

            <div>
              <h2   
                style={serifStyle} 
                className="text-3xl leading-[1.05] tracking-wide mb-4 max-w-lg"
              >
                Couples first, always
              </h2>
              <p 
                style={sansStyle} 
                className="text-base md:text-lg leading-relaxed text-[#5A5450] max-w-md"
              >
                Our work is never about us. It is shaped entirely around the two people getting married, and the world they want to gather around them.
              </p>
            </div>

            <div>
              <h2   
                style={serifStyle} 
                className="text-3xl leading-[1.05] tracking-wide mb-4 max-w-lg"
              >
                Beauty earned slowly
              </h2>
              <p 
                style={sansStyle} 
                className="text-base md:text-lg leading-relaxed text-[#5A5450] max-w-md"
              >
                We resist the trend cycle. The aesthetic choices we make are built to feel as right in twenty years as they do on the day.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Philosophy