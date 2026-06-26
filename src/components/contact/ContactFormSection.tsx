import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import contactImg from "../../assets/images/photo_6.jpg";
import ContactItem from "./ContactItem";


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

    // Type-safe check to clear errors dynamically when the user types
    if (name === "firstName" || name === "email" || name === "aboutYourDay") {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let valid = true;
    const newErrors = { firstName: "", email: "", aboutYourDay: "" };

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

  // Matched exactly to source classes
  const baseInputClass =
    "w-full bg-transparent border-b py-3 focus:outline-none transition-colors font-serif text-lg italic placeholder:not-italic placeholder:font-sans placeholder:text-base placeholder:text-[var(--foreground)]/40 border-[var(--foreground)]/30 focus:border-[var(--gold)] text-[var(--foreground)]";
  
  // Cleaned label setup matching your eyebrow styles
  const labelClass =
    "block mb-3 font-sans tracking-[0.35em] uppercase text-[0.7rem] font-normal text-[var(--gold)]";

  return (
    <section className="bg-[var(--ivory)] text-[var(--foreground)] pb-24 lg:pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUpVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-16 xl:gap-x-24 items-start"
        >
          {/* LEFT: FORM SECTION */}
          <form
            onSubmit={handleSubmit}
            className="w-full lg:col-span-7 space-y-8"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label htmlFor="firstName" className={labelClass}>
                  First name *
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Elena"
                  className={`${baseInputClass} ${
                    errors.firstName ? "border-red-400 focus:border-red-400" : ""
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs font-light mt-1.5">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="partnerName" className={labelClass}>
                  Partner's name
                </label>
                <input
                  id="partnerName"
                  type="text"
                  name="partnerName"
                  value={formData.partnerName}
                  onChange={handleChange}
                  placeholder="Marco"
                  className={baseInputClass}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
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
                    errors.email ? "border-red-400 focus:border-red-400" : ""
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
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+44 ..."
                  className={baseInputClass}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label htmlFor="dateOrSeason" className={labelClass}>
                  Wedding date or season
                </label>
                <input
                  id="dateOrSeason"
                  type="text"
                  name="dateOrSeason"
                  value={formData.dateOrSeason}
                  onChange={handleChange}
                  placeholder="June 2027"
                  className={baseInputClass}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="estimatedGuests" className={labelClass}>
                  Estimated guests
                </label>
                <input
                  id="estimatedGuests"
                  type="text"
                  name="estimatedGuests"
                  value={formData.estimatedGuests}
                  onChange={handleChange}
                  placeholder="80"
                  className={baseInputClass}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="celebrationLocation" className={labelClass}>
                Where would you like to celebrate?
              </label>
              <input
                id="celebrationLocation"
                type="text"
                name="celebrationLocation"
                value={formData.celebrationLocation}
                onChange={handleChange}
                placeholder="Lake Como, the Cotswolds, somewhere we haven't dreamt of yet..."
                className={baseInputClass}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="aboutYourDay" className={labelClass}>
                Tell us about your day *
              </label>
              <textarea
                id="aboutYourDay"
                name="aboutYourDay"
                value={formData.aboutYourDay}
                onChange={handleChange}
                placeholder="The feeling, the people, what you've already decided, what you're still wondering..."
                rows={6}
                className={`w-full bg-transparent border-b py-3 focus:outline-none transition-colors resize-none font-serif text-lg italic placeholder:not-italic placeholder:font-sans placeholder:text-sm placeholder:text-[var(--foreground)]/40 border-[var(--foreground)]/30 focus:border-[var(--gold)] text-[var(--foreground)] ${
                  errors.aboutYourDay ? "border-red-400 focus:border-red-400" : ""
                }`}
              />
              {errors.aboutYourDay && (
                <p className="text-red-500 text-xs font-light mt-1.5">
                  {errors.aboutYourDay}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--foreground)] text-[var(--ivory)] text-xs tracking-[0.25em] uppercase hover:bg-[var(--gold)] hover:text-[var(--foreground)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Send enquiry{" "}
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
                className="lucide lucide-arrow-right h-4 w-4"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </form>

          {/* RIGHT: EDITORIAL SIDEBAR */}
          <div className="w-full lg:col-span-5 flex flex-col space-y-12">
            <div className="w-full overflow-hidden rounded-sm aspect-[4/5] shadow-[0_4px_25px_rgba(0,0,0,0.02)]">
              <img
                src={contactImg}
                alt="Maison Lior Bouquet Visual"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="space-y-8 pl-1">
               <ContactItem />   
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactFormSection;