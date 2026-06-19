import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiInstagram } from "react-icons/fi";

// Replace with your actual asset path matching the bride bouquet visual
import contactImg from "../../assets/images/photo_6.jpg";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function ContactFormSection() {
  const serifStyle = {
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300,
  };

  const sansStyle = {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 300,
  };

  const [formData, setFormData] = useState({
    firstName: "",
    partnerName: "",
    email: "",
    phone: "",
    dateOrSeason: "",
    estimatedGuests: "",
    celebrationLocation: "",
    aboutYourDay: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry submitted:", formData);
  };

  const inputClass = "w-full bg-transparent border-b border-[#D8D0C8] py-3 text-sm text-[#2B2623] focus:border-[#C2A677] outline-none transition-colors duration-300 placeholder-[#BDB1A8]";
  const labelClass = "block text-[10px] tracking-[0.2em] text-[#C2A677] uppercase mb-1 font-medium";

  return (
    <section className="bg-[#FAF6EE] text-[#2B2623] pb-24 lg:pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUpVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-16 xl:gap-x-24 items-start"
        >
          
          {/* LEFT: MINIMALIST LUXURY FORM */}
          <form onSubmit={handleSubmit} className="w-full lg:col-span-7 space-y-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <label style={sansStyle} className={labelClass}>First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Elena"
                  required
                  style={sansStyle}
                  className={inputClass}
                />
              </div>
              <div>
                <label style={sansStyle} className={labelClass}>Partner's Name</label>
                <input
                  type="text"
                  name="partnerName"
                  value={formData.partnerName}
                  onChange={handleChange}
                  placeholder="Marco"
                  style={sansStyle}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <label style={sansStyle} className={labelClass}>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  style={sansStyle}
                  className={inputClass}
                />
              </div>
              <div>
                <label style={sansStyle} className={labelClass}>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+44 ..."
                  style={sansStyle}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <label style={sansStyle} className={labelClass}>Wedding Date or Season</label>
                <input
                  type="text"
                  name="dateOrSeason"
                  value={formData.dateOrSeason}
                  onChange={handleChange}
                  placeholder="June 2027"
                  style={sansStyle}
                  className={inputClass}
                />
              </div>
              <div>
                <label style={sansStyle} className={labelClass}>Estimated Guests</label>
                <input
                  type="text"
                  name="estimatedGuests"
                  value={formData.estimatedGuests}
                  onChange={handleChange}
                  placeholder="80"
                  style={sansStyle}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label style={sansStyle} className={labelClass}>Where would you like to celebrate?</label>
              <input
                type="text"
                name="celebrationLocation"
                value={formData.celebrationLocation}
                onChange={handleChange}
                placeholder="Lake Como, the Cotswolds, somewhere we haven't dreamt of yet..."
                style={sansStyle}
                className={inputClass}
              />
            </div>

            <div>
              <label style={sansStyle} className={labelClass}>Tell us about your day *</label>
              <textarea
                name="aboutYourDay"
                value={formData.aboutYourDay}
                onChange={handleChange}
                placeholder="The feeling, the people, what you've already decided, what you're still wondering..."
                required
                rows={4}
                style={sansStyle}
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                style={sansStyle}
                className="bg-[#2B2623] hover:bg-[#B2964D] text-[#FAF6EE] px-8 py-4 text-xs font-normal tracking-[0.2em] uppercase transition-colors duration-300 flex items-center gap-4 group rounded-sm shadow-sm"
              >
                Send Enquiry
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </button>
            </div>

          </form>

          {/* RIGHT: EDITORIAL IMAGE & UPDATED METADATA CARD */}
          <div className="w-full lg:col-span-5 flex flex-col space-y-12">
            
            <div className="w-full overflow-hidden rounded-sm aspect-[4/5] shadow-[0_4px_25px_rgba(0,0,0,0.02)]">
              <img
                src={contactImg}
                alt="Maison Lior Bouquet Visual"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Meta Information List Rows */}
            <div className="space-y-8 pl-1">
              
              {/* Studio Address */}
              <div>
                <h4 style={sansStyle} className="text-[9px] tracking-[0.25em] text-[#C2A677] uppercase mb-2.5 font-medium">
                  Studio
                </h4>
                <div className="flex items-center gap-3 text-[#2B2623]">
                  <FiMapPin className="text-[#C2A677] text-sm shrink-0" />
                  <p style={{ ...serifStyle, fontStyle: "italic" }} className="text-xl md:text-2xl leading-none">
                    14 Fue de Sévigné, 75004 Paris
                  </p>
                </div>
              </div>

              {/* Telephone */}
              <div>
                <h4 style={sansStyle} className="text-[9px] tracking-[0.25em] text-[#C2A677] uppercase mb-2.5 font-medium">
                  By Telephone
                </h4>
                <a 
                  href="tel:+33142780000" 
                  className="flex items-center gap-3 text-[#2B2623] hover:text-[#B2964D] transition-colors group"
                >
                  <FiPhone className="text-[#C2A677] group-hover:text-[#B2964D] transition-colors text-sm shrink-0" />
                  <span style={{ ...serifStyle, fontStyle: "italic" }} className="text-xl md:text-2xl leading-none">
                    +33 1 42 78 00 00
                  </span>
                </a>
              </div>

              {/* Email */}
              <div>
                <h4 style={sansStyle} className="text-[9px] tracking-[0.25em] text-[#C2A677] uppercase mb-2.5 font-medium">
                  By Letter
                </h4>
                <a 
                  href="mailto:hello@maisonlior.com" 
                  className="flex items-center gap-3 text-[#2B2623] hover:text-[#B2964D] transition-colors group"
                >
                  <FiMail className="text-[#C2A677] group-hover:text-[#B2964D] transition-colors text-sm shrink-0" />
                  <span style={{ ...serifStyle, fontStyle: "italic" }} className="text-xl md:text-2xl leading-none">
                    hello@maisonlior.com
                  </span>
                </a>
              </div>

              {/* Instagram */}
              <div>
                <h4 style={sansStyle} className="text-[9px] tracking-[0.25em] text-[#C2A677] uppercase mb-2.5 font-medium">
                  Follow
                </h4>
                <a 
                  href="https://instagram.com/maisonlior" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3 text-[#2B2623] hover:text-[#B2964D] transition-colors group"
                >
                  <FiInstagram className="text-[#C2A677] group-hover:text-[#B2964D] transition-colors text-sm shrink-0" />
                  <span style={{ ...serifStyle, fontStyle: "italic" }} className="text-xl md:text-2xl leading-none">
                    @maisonlior
                  </span>
                </a>
              </div>

            </div>

          </div>

        </motion.div>
        
      </div>
    </section>
  );
}

export default ContactFormSection;