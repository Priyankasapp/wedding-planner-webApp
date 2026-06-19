import React from 'react'

const Atelier = () => {
  // We specify font-weight 300/400 explicitly here to bypass standard thick defaults
  const serifStyle = { 
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300 // Light weight for that razor-thin look in Screenshot from 2026-06-19 09-17-03.png
  };
  
  const sansStyle = { 
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 300
  };

  return (
    <section className='min-h-screen flex items-center bg-[#FAF6EE] text-[#2B2623] px-6 md:px-16 py-20'>
      <div className='max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center'>
        
        {/* Left Column: Heading */}
        <div>
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

        {/* Right Column: Paragraph */}
        <div className="md:mt-24">
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