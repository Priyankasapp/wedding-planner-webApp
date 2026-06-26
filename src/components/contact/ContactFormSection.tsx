import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiInstagram } from "react-icons/fi";
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

  // Track independent errors for the three required fields
  const [errors, setErrors] = useState({
    firstName: "",
    email: "",
    aboutYourDay: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear specific field error as user types
    if (name in errors && errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let valid = true;
    const newErrors = { firstName: "", email: "", aboutYourDay: "" };

    // Validate each required field individually to match the reference style
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Your name is required.";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
      valid = false;
    }
    if (!formData.aboutYourDay.trim()) {
      newErrors.aboutYourDay = "Please write your details.";
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

    console.log("Enquiry submitted:", formData);
  };

  // Base input styles (removed fixed border color and focus states to dynamic classes below)
  const baseInputClass =
    "w-full bg-transparent border-b py-3 focus:outline-none transition-colors font-serif text-lg italic placeholder:not-italic placeholder:font-sans placeholder:text-base placeholder:text-foreground/40 border-foreground/30 focus:border-gold";
  const labelClass =
    "block  mb-3 text-gold font-sans tracking-[0.35em] uppercase text-[0.7em] font-normal mt-3";

  return (
    <section className="bg-[#FAF6EE] text-[#2B2623] pb-24  lg:pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUpVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-16 xl:gap-x-24 items-start"
        >
          {/* LEFT: MINIMALIST LUXURY FORM */}
          <form
            onSubmit={handleSubmit}
            className="w-full lg:col-span-7 space-y-10"
            noValidate
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="flex flex-col">
                <label
                  htmlFor="firstName"
                 
                  className={labelClass}
                >
                  First Name *
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Elena"
                
                  className={`${baseInputClass} ${
                    errors.firstName
                      ? "border-red-400 focus:border-red-400"
                      : "border-[#D8D0C8] focus:border-[#C2A677]"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs font-light mt-1.5">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="partnerName"
                 
                  className={labelClass}
                >
                  Partner's Name
                </label>
                <input
                  id="partnerName"
                  type="text"
                  name="partnerName"
                  value={formData.partnerName}
                  onChange={handleChange}
                  placeholder="Marco"
                 
                  className={`${baseInputClass} border-[#D8D0C8] focus:border-[#C2A677]`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="flex flex-col">
                <label htmlFor="email" className={labelClass}>
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                 
                  className={`${baseInputClass} ${
                    errors.email
                      ? "border-red-400 focus:border-red-400"
                      : "border-[#D8D0C8] focus:border-[#C2A677]"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs font-light mt-1.5">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className={labelClass}>
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+44 ..."
                 
                  className={`${baseInputClass} border-[#D8D0C8] focus:border-[#C2A677]`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="flex flex-col">
                <label
                  htmlFor="dateOrSeason"
                 
                  className={labelClass}
                >
                  Wedding Date or Season
                </label>
                <input
                  id="dateOrSeason"
                  type="text"
                  name="dateOrSeason"
                  value={formData.dateOrSeason}
                  onChange={handleChange}
                  placeholder="June 2027"
                  
                  className={`${baseInputClass} border-[#D8D0C8] focus:border-[#C2A677]`}
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="estimatedGuests"
                  
                  className={labelClass}
                >
                  Estimated Guests
                </label>
                <input
                  id="estimatedGuests"
                  type="text"
                  name="estimatedGuests"
                  value={formData.estimatedGuests}
                  onChange={handleChange}
                  placeholder="80"
                  
                  className={`${baseInputClass} border-[#D8D0C8] focus:border-[#C2A677]`}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="celebrationLocation"
                
                className={labelClass}
              >
                Where would you like to celebrate?
              </label>
              <input
                id="celebrationLocation"
                type="text"
                name="celebrationLocation"
                value={formData.celebrationLocation}
                onChange={handleChange}
                placeholder="Lake Como, the Cotswolds, somewhere we haven't dreamt of yet..."
                
                className={`${baseInputClass} border-[#D8D0C8] focus:border-[#C2A677]`}
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="aboutYourDay"
               
                className={labelClass}
              >
                Tell us about your day *
              </label>
              <textarea
                id="aboutYourDay"
                name="aboutYourDay"
                value={formData.aboutYourDay}
                onChange={handleChange}
                placeholder="The feeling, the people, what you've already decided, what you're still wondering..."
                rows={4}
               
                className={`${baseInputClass} resize-none ${
                  errors.aboutYourDay
                    ? "border-red-400 focus:border-red-400"
                    : "border-[#D8D0C8] focus:border-[#C2A677]"
                }`}
              />
              {errors.aboutYourDay && (
                <p className="text-red-500 text-xs font-light mt-1.5">
                  {errors.aboutYourDay}
                </p>
              )}
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-ivory text-xs tracking-[0.25em] uppercase hover:bg-gold hover:text-foreground transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Send Enquiry
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
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
                <h2
                 
                   className="font-sans tracking-[0.35em] uppercase text-[0.7rem] font-normal text-[#B89154]"
                >
                  Studio
                </h2>
                <div className="flex items-center gap-3 text-[#2B2623]">
                  <FiMapPin className="text-[#C2A677] text-sm shrink-0" />
                  <p
                    
                    className="text-xl mt-2 italic text-[#6e605b]"
                  >
                    14 Rue de Sévigné, 75004 Paris
                  </p>
                </div>
              </div>

              {/* Telephone */}
              <div>
                <h2
                  
                 className="font-sans tracking-[0.35em] uppercase text-[0.7rem] font-normal text-[#B89154]"
                >
                  By Telephone
                </h2>
                <a
                  href="tel:+33142780000"
                  className="flex items-center gap-3 text-[#2B2623] hover:text-[#B2964D] transition-colors group"
                >
                  <FiPhone className="text-[#C2A677] group-hover:text-[#B2964D] transition-colors text-sm shrink-0" />
                  <span
                    
                    className="text-xl mt-2 italic text-[#6e605b]"
                  >
                    +33 1 42 78 00 00
                  </span>
                </a>
              </div>

              {/* Email */}
              <div>
                <h2
                  
                 className="font-sans tracking-[0.35em] uppercase text-[0.7rem] font-normal text-[#B89154]"
                >
                  By Letter
                </h2>
                <a
                  href="mailto:hello@maisonlior.com"
                  className="flex items-center gap-3 text-[#2B2623] hover:text-[#B2964D] transition-colors group"
                >
                  <FiMail className="text-[#C2A677] group-hover:text-[#B2964D] transition-colors text-sm shrink-0" />
                  <span  
                    className="text-xl mt-2 italic text-[#6e605b]">hello@maisonlior.com</span>
                </a>
              </div>

              {/* Instagram */}
              <div>
                <h2
                  
                  className="font-sans tracking-[0.35em] uppercase text-[0.7rem] font-normal text-[#B89154]"
                >
                  Follow
                </h2>
                <a
                  href="https://instagram.com/maisonlior"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-[#2B2623] hover:text-[#B2964D] transition-colors group"
                >
                  <FiInstagram className="text-[#C2A677] group-hover:text-[#B2964D] transition-colors text-sm shrink-0" />
                  <span
                   
                    className="text-xl mt-2 italic text-[#6e605b]"
                  >
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
