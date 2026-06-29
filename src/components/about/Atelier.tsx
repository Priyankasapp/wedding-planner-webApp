import { useEffect, useRef, useState } from 'react'
import img from "../../assets/images/photo_11.jpg"
import SectionKicker from '../sections/SectionKicker';
const Atelier = () => {
 

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

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className='min-h-screen flex flex-col justify-center bg-[#FAF6EE] text-[#2B2623] px-6 mt-20 md:px-16 py-20 overflow-hidden'
    >
      {/* Container wrapper for content flow */}
      <div className='max-w-6xl mx-auto w-full flex flex-col gap-16 md:gap-24'>
        
        {/* TEXT CONTENT: Two-column layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center'>
          
          {/* Left Column */}
          <div 
            className={`transform transition-all duration-1000 ease-out ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-16 opacity-0'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            {/* Kicker styled with Montserrat */}
          
            <SectionKicker title='THE ATELIER'/>

            {/* Elegant Display Heading */}
            <h1 
             
              className="text-6xl font-serif md:text-8xl lg:text-6xl text-[#2B2623] leading-[1.2] tracking-[2px]">
              An atelier of {" "}
             <span className="italic text-[#C2A677] text-gold mr-2">
                attentive
              </span> {" "}
              design.
            </h1>
          </div>

          {/* Right Column */}
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
              className="text-lg leading-[1.8] text-[#2B2623]/70 font-normal max-w-lg lg:max-w-[420px] font-sans"
            >
              Founded in 2008 by Lior Amari in a quiet Parisian courtyard, 
              Maison Lior is built on a single conviction: that a wedding 
              should feel like the truest version of the couple at its center.
            </p>
          </div>
          
        </div>

        {/* HERO IMAGE CONTAINER: Spans full width of the 6xl container */}
        <div 
          className={`w-full transform transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-16 opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }} // Cascades beautifully after the text fades in
        >
          <div className="w-full h-[50vh] md:h-[105vh] overflow-hidden  shadow-sm">
            <img 
              src={img} 
              alt="Maison Lior Atelier Hero" 
              className="w-full h-full object-cover object-center transform hover:scale-105 transition duration-700 ease-out"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Atelier